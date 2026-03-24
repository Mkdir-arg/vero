import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [rsvps, setRsvps] = useState([])
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const ADMIN_PASSWORD = 'vero2024' // Simple password - consider environment variable

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setPassword('')
      fetchData()
    } else {
      alert('Contraseña incorrecta')
      setPassword('')
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [rsvpRes, photosRes] = await Promise.all([
        fetch('/api/rsvp'),
        fetch('/api/photos')
      ])

      if (rsvpRes.ok) {
        const rsvpData = await rsvpRes.json()
        setRsvps(rsvpData)
      }

      if (photosRes.ok) {
        const photosData = await photosRes.json()
        setPhotos(photosData)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePhoto = async (id) => {
    if (!window.confirm('¿Eliminar esta foto?')) return

    try {
      const response = await fetch(`/api/photos/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setPhotos(prev => prev.filter(p => p.id !== id))
      }
    } catch (err) {
      console.error('Error deleting photo:', err)
    }
  }

  // Login view
  if (!authenticated) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-cream via-peach/5 to-cream flex items-center justify-center px-4 overflow-hidden">
        <AuroraBackground />
        <div className="max-w-sm w-full card-glass bg-white/90 backdrop-blur-lg border border-white/50 p-8 relative z-10 shadow-2xl animate-fade-in-up">
          <h1 className="text-3xl font-heading italic text-center text-text-dark mb-8">
            Panel Admin
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                className="input-soft"
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Acceder
            </button>
          </form>

          <p className="text-center text-sm text-text-mid mt-6">
            <Link to="/" className="text-rose hover:text-rose/80 transition">
              ← Volver
            </Link>
          </p>
        </div>
      </main>
    )
  }

  // Admin view
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cream via-peach/5 to-cream py-8 px-4 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-heading italic text-text-dark">Panel Admin</h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="btn-secondary"
          >
            Salir
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-text-mid">Cargando datos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RSVPs Section */}
            <div className="card-glass bg-white/90 backdrop-blur-lg border border-white/50 p-8 shadow-2xl">
              <h2 className="text-2xl font-heading italic text-text-dark mb-4">
                Confirmaciones
              </h2>

              {/* Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-blush/30">
                <div className="text-center">
                  <p className="text-sm text-text-mid">Total</p>
                  <p className="text-2xl font-bold text-rose">{rsvps.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-text-mid">Confirmados</p>
                  <p className="text-2xl font-bold text-rose">
                    {rsvps.filter(r => r.attending).length}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-text-mid">Personas</p>
                  <p className="text-2xl font-bold text-rose">
                    {rsvps.reduce((sum, r) => sum + (r.attending ? r.guests : 0), 0)}
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blush/30">
                      <th className="text-left py-2 px-2 font-semibold text-text-dark">Nombre</th>
                      <th className="text-center py-2 px-2 font-semibold text-text-dark">Gentes</th>
                      <th className="text-center py-2 px-2 font-semibold text-text-dark">¿Va?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rsvps.map(rsvp => (
                      <tr key={rsvp.id} className="border-b border-blush/10 hover:bg-peach/20">
                        <td className="py-3 px-2">{rsvp.name}</td>
                        <td className="text-center py-3 px-2">{rsvp.attending ? rsvp.guests : '—'}</td>
                        <td className="text-center py-3 px-2">
                          {rsvp.attending ? '✓' : '✗'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Photos Section */}
            <div className="card-glass bg-white/90 backdrop-blur-lg border border-white/50 p-8 shadow-2xl">
              <h2 className="text-2xl font-heading italic text-text-dark mb-4">
                Fotos ({photos.length})
              </h2>

              {photos.length === 0 ? (
                <p className="text-text-mid text-center py-8">
                  No hay fotos aún
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {photos.map(photo => (
                    <div key={photo.id} className="relative group">
                      <img
                        src={photo.url}
                        alt={photo.original_name}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleDeletePhoto(photo.id)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity"
                      >
                        <span className="text-white text-xl">🗑️</span>
                      </button>
                      {photo.uploader && (
                        <p className="text-xs text-text-mid mt-1 truncate">
                          {photo.uploader}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="text-center mt-8">
          <Link to="/" className="text-rose hover:text-rose/80 transition font-medium">
            ← Volver a la invitación
          </Link>
        </div>
      </div>
    </main>
  )
}
