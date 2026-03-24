import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/photos')
      if (response.ok) {
        const data = await response.json()
        setPhotos(data)
      }
    } catch (err) {
      console.error('Error fetching photos:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cream via-peach/5 to-cream py-8 px-4 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-6 text-rose hover:text-rose/80 transition">
            ← Volver a la invitación
          </Link>
          <h1 className="text-4xl font-heading italic text-text-dark mb-2">
            Galería
          </h1>
          <p className="text-text-mid">Momentos especiales compartidos</p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-text-mid">Cargando fotos...</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && photos.length === 0 && (
          <div className="card-soft p-12 text-center">
            <p className="text-text-mid mb-4">Aún no hay fotos subidas</p>
            <Link to="/upload" className="btn-primary inline-block">
              Sube la primera foto →
            </Link>
          </div>
        )}

        {/* Photos grid - CSS columns masonry */}
        {!loading && photos.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map(photo => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="break-inside-avoid cursor-pointer group"
              >
                <div className="photo-card card-glass bg-white/40 backdrop-blur">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blush/30 to-peach/20 aspect-auto">
                    <img
                      src={photo.url}
                      alt={photo.original_name}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {photo.uploader && (
                    <div className="p-3 text-xs text-text-mid backdrop-blur bg-white/30">
                      📸 {photo.uploader}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload button */}
        {!loading && (
          <div className="text-center mt-12">
            <Link to="/upload" className="btn-primary inline-block">
              + Subir más fotos
            </Link>
          </div>
        )}

        {/* Lightbox modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
          >
            <div
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl max-h-[80vh] rounded-xl overflow-hidden card-glass shadow-2xl animate-fade-in-up"
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.original_name}
                className="w-full h-full object-contain"
              />
              {selectedPhoto.uploader && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-sm">
                  📸 {selectedPhoto.uploader}
                </div>
              )}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 backdrop-blur"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
