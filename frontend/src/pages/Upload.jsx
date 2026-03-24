import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'

export default function Upload() {
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [uploader, setUploader] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files || [])
    const validFiles = selectedFiles.filter(f => f.type.startsWith('image/'))

    if (validFiles.length !== selectedFiles.length) {
      alert('Solo se aceptan archivos de imagen')
    }

    setFiles(prev => [...prev, ...validFiles].slice(0, 10)) // Max 10 files

    // Generate previews
    const newPreviews = validFiles.map(f => URL.createObjectURL(f))
    setPreviews(prev => [...prev, ...newPreviews].slice(0, 10))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add('bg-peach/30')
  }

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('bg-peach/30')
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove('bg-peach/30')
    const droppedFiles = Array.from(e.dataTransfer.files || [])
    const validFiles = droppedFiles.filter(f => f.type.startsWith('image/'))

    setFiles(prev => [...prev, ...validFiles].slice(0, 10))

    const newPreviews = validFiles.map(f => URL.createObjectURL(f))
    setPreviews(prev => [...prev, ...newPreviews].slice(0, 10))
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setPreviews(prev => {
      URL.revokeObjectURL(prev[index])
      return prev.filter((_, i) => i !== index)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      setStatus('error')
      setMessage('Por favor, selecciona al menos una foto')
      return
    }

    if (!uploader.trim()) {
      setStatus('error')
      setMessage('Por favor, ingresa tu nombre')
      return
    }

    setStatus('loading')

    const formData = new FormData()
    files.forEach(file => {
      formData.append('photos', file)
    })
    formData.append('uploader', uploader.trim())

    try {
      const response = await fetch('/api/photos/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        setStatus('success')
        setMessage(`¡${result.uploaded} foto${result.uploaded !== 1 ? 's' : ''} subida${result.uploaded !== 1 ? 's' : ''} con éxito!`)

        // Reset form
        setFiles([])
        setPreviews([])
        setUploader('')

        // Redirect to gallery after 2 seconds
        setTimeout(() => {
          window.location.href = '/gallery'
        }, 2000)
      } else {
        setStatus('error')
        setMessage('Error al subir fotos. Intenta nuevamente.')
      }
    } catch (err) {
      console.error('Error:', err)
      setStatus('error')
      setMessage('Error de conexión. Intenta nuevamente.')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cream via-peach/5 to-cream py-8 px-4 overflow-hidden">
      <AuroraBackground />
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6 text-rose hover:text-rose/80 transition">
            ← Volver a la invitación
          </Link>
          <h1 className="text-4xl font-heading italic text-text-dark mb-2">
            Sube tus fotos
          </h1>
          <p className="text-text-mid">Comparte los momentos especiales</p>
        </div>

        {/* Form Card */}
        <div className="card-glass bg-white/90 backdrop-blur-lg border border-white/50 p-8 mb-6 shadow-2xl animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Tu nombre *
              </label>
              <input
                type="text"
                value={uploader}
                onChange={(e) => setUploader(e.target.value)}
                placeholder="¿Cómo te llamas?"
                className="input-soft"
              />
            </div>

            {/* Drag and drop area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="border-2 border-dashed border-rose/40 rounded-lg p-8 text-center transition-all duration-300 cursor-pointer hover:border-rose/70 hover:bg-white/40 hover:backdrop-blur bg-white/20 backdrop-blur-sm"
            >
              <label htmlFor="file-input" className="cursor-pointer block">
                <p className="text-lg font-semibold text-text-dark mb-2">
                  📸 Arrastra fotos aquí
                </p>
                <p className="text-sm text-text-mid mb-4">o haz clic para seleccionar</p>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
            </div>

            {/* File previews */}
            {previews.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-text-dark mb-3">
                  {files.length} foto{files.length !== 1 ? 's' : ''} seleccionada{files.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {previews.map((preview, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${i + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity"
                      >
                        <span className="text-white text-2xl">✕</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full btn-primary ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? 'Subiendo fotos...' : 'Subir fotos'}
            </button>
          </form>

          {/* Status messages */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-lg text-center font-medium animate-fade-in-up ${
                status === 'success'
                  ? 'bg-peach/30 text-rose'
                  : 'bg-rose/10 text-rose'
              }`}
            >
              {message}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="text-center space-y-2">
          <p>
            <Link to="/gallery" className="text-rose hover:text-rose/80 transition font-medium">
              Ver galería →
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
