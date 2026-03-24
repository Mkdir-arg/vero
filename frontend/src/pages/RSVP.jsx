import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuroraBackground from '../components/AuroraBackground'
import Confetti from '../components/Confetti'

export default function RSVP() {
  const [form, setForm] = useState({
    name: '',
    guests: 1,
    phone: '',
    email: '',
    attending: true,
    message: ''
  })

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value
    }))
  }

  const handleToggleAttending = (attending) => {
    setForm(prev => ({ ...prev, attending }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim()) {
      setStatus('error')
      setMessage('Por favor, ingresa tu nombre')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setStatus('success')
        setMessage('¡Tu confirmación ha sido registrada con éxito!')
        setShowConfetti(true)
        setForm({
          name: '',
          guests: 1,
          phone: '',
          email: '',
          attending: true,
          message: ''
        })

        // Reset after 3 seconds
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
          setShowConfetti(false)
        }, 3000)
      } else {
        setStatus('error')
        setMessage('Error al registrar confirmación. Intenta nuevamente.')
      }
    } catch (err) {
      console.error('Error:', err)
      setStatus('error')
      setMessage('Error de conexión. Intenta nuevamente.')
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cream via-peach/5 to-cream py-8 px-4 overflow-hidden">
      <AuroraBackground />
      <Confetti trigger={showConfetti} />

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6 text-rose hover:text-rose/80 transition">
            ← Volver a la invitación
          </Link>
          <h1 className="text-4xl font-heading italic text-text-dark mb-2">
            Confirmación
          </h1>
          <p className="text-text-mid">Cuéntanos si vendrás</p>
        </div>

        {/* Form Card */}
        <div className="card-glass bg-white/90 backdrop-blur-lg border border-white/50 p-8 mb-6 shadow-2xl animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="input-soft"
              />
            </div>

            {/* Attending toggle */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">
                ¿Vas a asistir?
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleToggleAttending(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    form.attending
                      ? 'bg-rose text-white'
                      : 'bg-blush/30 text-text-mid hover:bg-blush/50'
                  }`}
                >
                  Sí, voy
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleAttending(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    !form.attending
                      ? 'bg-rose text-white'
                      : 'bg-blush/30 text-text-mid hover:bg-blush/50'
                  }`}
                >
                  No puedo
                </button>
              </div>
            </div>

            {/* Guests */}
            {form.attending && (
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  ¿Cuántos van (incluido tú)?
                </label>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="input-soft"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Email (opcional)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="input-soft"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+54 9 11 2345 6789"
                className="input-soft"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Un mensaje para Vero (opcional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntale algo especial..."
                rows="4"
                className="input-soft resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full btn-primary ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? 'Registrando...' : 'Confirmar asistencia'}
            </button>
          </form>

          {/* Status messages */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-lg text-center font-medium ${
                status === 'success'
                  ? 'bg-peach/30 text-rose animate-fade-in-up'
                  : 'bg-rose/10 text-rose animate-fade-in-up'
              }`}
            >
              {message}
            </div>
          )}
        </div>

        {/* Footer link */}
        <div className="text-center">
          <Link to="/gallery" className="text-rose hover:text-rose/80 transition font-medium">
            Ver galería →
          </Link>
        </div>
      </div>
    </main>
  )
}
