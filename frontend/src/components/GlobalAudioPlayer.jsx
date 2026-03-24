import { useEffect, useRef, useState } from 'react'

export default function GlobalAudioPlayer({ shouldStart = false }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [requiresInteraction, setRequiresInteraction] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.volume = 0.55
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !shouldStart) return undefined

    const tryPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        setRequiresInteraction(false)
      } catch (_error) {
        setIsPlaying(false)
        setRequiresInteraction(true)
      }
    }

    tryPlay()

    return undefined
  }, [shouldStart])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
        setRequiresInteraction(false)
      } catch (_error) {
        setIsPlaying(false)
        setRequiresInteraction(true)
      }
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src="/set-fire-to-the-rain.mp3" loop preload="auto" />

      <button
        type="button"
        onClick={togglePlayback}
        className="fixed bottom-4 right-4 z-50 rounded-full border border-peach/70 bg-white/88 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-text-dark shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
      >
        {isPlaying ? 'Pausar musica' : requiresInteraction ? 'Activar musica' : 'Reproducir musica'}
      </button>
    </>
  )
}
