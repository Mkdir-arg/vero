# 🎉 Fiesta de Despedida de Vero

Un sistema elegante y delicado para invitaciones digitales con confirmación de asistencia, galería de fotos y subida de imágenes durante el evento.

## 🛠 Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + shadcn/ui + 21st.dev components
- **Backend:** Node.js + Express
- **Database:** Supabase (PostgreSQL)
- **File uploads:** Multer
- **Design:** Playfair Display + Lato, paleta blanco/crema/rose/dorado

## 📋 Características

- ✨ **Invitación digital hermosa** - Tarjeta elegante con animaciones
- 📝 **Sistema RSVP** - Confirmación de asistencia con detalles de contacto
- 📸 **Subida de fotos** - Drag & drop, multiple files (hasta 10 a la vez)
- 🖼 **Galería** - Masonry grid con lightbox
- 👑 **Panel admin** - Ver confirmaciones, gestionar fotos

## 🚀 Instalación y Ejecución

### 1. Configuración inicial (solo primera vez)

En Claude Code, ejecuta estos comandos:

```bash
# Agregar Google Stitch MCP (para mockups/diseño)
claude mcp add stitch --transport http https://stitch.googleapis.com/mcp --header 'X-Goog-Api-Key: AQ.Ab8RN6IRIkvXzRTVij8xGT0ZpAfw0jV7pM4r9P1EWadRRDj7pA' -s user

# Instalar plugin ui-ux-pro-max (para sistema de diseño)
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

### 2. Instalar dependencias

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

### 3. Ejecutar en desarrollo

**Terminal 1 - Backend (puerto 3001):**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend (puerto 5173):**
```bash
cd frontend
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📁 Estructura del Proyecto

```
vero/
├── backend/
│   ├── server.js                 # Servidor Express
│   ├── db.js                     # Conexión y setup PostgreSQL
│   ├── routes/
│   │   ├── rsvp.js              # Endpoints de confirmaciones
│   │   └── photos.js            # Endpoints de fotos
│   ├── uploads/                 # Carpeta de fotos (creada en runtime)
│   ├── .env                      # Credenciales (en .gitignore)
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Invitation.jsx    # Landing page
    │   │   ├── RSVP.jsx          # Formulario de confirmación
    │   │   ├── Gallery.jsx       # Galería de fotos
    │   │   ├── Upload.jsx        # Subida de fotos
    │   │   └── Admin.jsx         # Panel admin
    │   ├── components/
    │   │   ├── Petal.jsx         # Elemento decorativo
    │   │   └── FloralDivider.jsx # Separador floral
    │   ├── styles/
    │   │   └── globals.css       # Estilos globales Tailwind
    │   ├── App.jsx               # Router principal
    │   └── main.jsx              # Entry point
    └── package.json
```

## 🎨 Paleta de Colores

- **Crema:** `#FAF7F2`
- **Durazno:** `#F8EDE3`
- **Blush:** `#E8D5C4`
- **Rose:** `#D4B8A8`
- **Dorado:** `#C9A96E`

## 🔑 Variables de Entorno

### Backend (`backend/.env`)
```
DATABASE_URL=postgresql://postgres:password@host:5432/database
PORT=3001
NODE_ENV=development
```

⚠️ **Nunca commits el archivo `.env`** - está en `.gitignore`

## 🛣 Rutas de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/rsvp` | Crear confirmación |
| GET | `/api/rsvp` | Listar confirmaciones (admin) |
| POST | `/api/photos/upload` | Subir fotos |
| GET | `/api/photos` | Listar fotos |
| DELETE | `/api/photos/:id` | Eliminar foto |
| GET | `/api/health` | Health check |

## 🔐 Panel Admin

**URL:** `/admin`
**Contraseña:** `vero2024` (cambiar en `Admin.jsx`)

## 📦 Build para producción

**Frontend:**
```bash
cd frontend
npm run build
# Genera carpeta `dist/`
```

## 💡 Próximos pasos

1. **Personalizar datos del evento:**
   - Edita `Invitation.jsx` con fecha, hora, lugar
   - Cambiar contraseña admin en `Admin.jsx`

2. **Agregar componentes 21st.dev:**
   ```bash
   cd frontend
   npx shadcn@latest add "https://21st.dev/r/..."
   ```

3. **Deploy:**
   - Backend: Render, Railway, Heroku
   - Frontend: Vercel, Netlify, GitHub Pages

## 🤝 Soporte

Para cambios en el diseño o funcionalidades, usa la skill `frontend-design` en Claude Code.

---

**Hecho con ❤️ para la despedida de Vero**
