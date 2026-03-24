const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { db } = require('../db');

const router = express.Router();
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se aceptan archivos de imagen'));
    }
  }
});

// POST /api/photos/upload - Upload photos
router.post('/upload', upload.array('photos', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploader = req.body.uploader || 'Anonymous';

    // Insert all photos into database
    for (const file of req.files) {
      await db.runAsync(
        'INSERT INTO photos (filename, original_name, uploader) VALUES (?, ?, ?)',
        [file.filename, file.originalname, uploader]
      );
    }

    res.status(201).json({ uploaded: req.files.length });
  } catch (err) {
    console.error('Error uploading photos:', err);
    res.status(500).json({ error: 'Error al subir fotos' });
  }
});

// GET /api/photos - List all photos
router.get('/', async (req, res) => {
  try {
    const rows = await db.allAsync('SELECT * FROM photos ORDER BY created_at DESC');
    const photos = (rows || []).map((p) => ({
      ...p,
      url: `/uploads/${p.filename}`
    }));
    res.json(photos);
  } catch (err) {
    console.error('Error fetching photos:', err);
    res.status(500).json({ error: 'Error al obtener fotos' });
  }
});

// DELETE /api/photos/:id - Delete a photo
router.delete('/:id', async (req, res) => {
  try {
    const photo = await db.getAsync('SELECT * FROM photos WHERE id = ?', [req.params.id]);

    if (!photo) {
      return res.status(404).json({ error: 'Foto no encontrada' });
    }

    const filePath = path.join(UPLOADS_DIR, photo.filename);

    // Delete file from disk
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete from database
    await db.runAsync('DELETE FROM photos WHERE id = ?', [req.params.id]);

    res.json({ message: 'Foto eliminada' });
  } catch (err) {
    console.error('Error deleting photo:', err);
    res.status(500).json({ error: 'Error al eliminar foto' });
  }
});

module.exports = router;
