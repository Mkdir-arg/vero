const express = require('express');
const { db } = require('../db');

const router = express.Router();

// POST /api/rsvp - Submit a new RSVP
router.post('/', async (req, res) => {
  try {
    const { name, guests = 1, phone, email, attending = 1, message } = req.body;

    // Validation
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Name is required' });
    }

    const result = await db.runAsync(
      'INSERT INTO rsvps (name, guests, phone, email, attending, message) VALUES (?, ?, ?, ?, ?, ?)',
      [name.trim(), Number(guests), phone || null, email || null, attending ? 1 : 0, message || null]
    );

    res.status(201).json({
      id: result.id,
      message: '¡Confirmación registrada!'
    });
  } catch (err) {
    console.error('Error submitting RSVP:', err);
    res.status(500).json({ error: 'Error al registrar confirmación' });
  }
});

// GET /api/rsvp - List all RSVPs (admin)
router.get('/', async (req, res) => {
  try {
    const rows = await db.allAsync('SELECT * FROM rsvps ORDER BY created_at DESC');
    res.json(rows || []);
  } catch (err) {
    console.error('Error fetching RSVPs:', err);
    res.status(500).json({ error: 'Error al obtener confirmaciones' });
  }
});

module.exports = router;
