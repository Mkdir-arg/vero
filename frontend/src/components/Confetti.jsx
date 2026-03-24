import { useEffect, useRef } from 'react'

export default function Confetti({ trigger = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!trigger || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confetti = []
    const colors = ['#D4B8A8', '#F8EDE3', '#E8D5C4', '#C9A96E', '#FAF7F2']

    // Create confetti particles
    for (let i = 0; i < 50; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 5 + 5,
        rotation: Math.random() * 360,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      })
    }

    let animationId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = confetti.length - 1; i >= 0; i--) {
        const p = confetti[i]

        // Physics
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.2 // gravity
        p.rotation += 5
        p.life -= 0.015

        if (p.life <= 0) {
          confetti.splice(i, 1)
          continue
        }

        // Draw
        ctx.save()
        ctx.globalAlpha = p.life
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      }

      if (confetti.length > 0) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [trigger])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  )
}
