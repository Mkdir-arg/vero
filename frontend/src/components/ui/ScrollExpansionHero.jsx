import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max)

export default function ScrollExpansionHero({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  eyebrow,
  title,
  date,
  scrollHint,
  description,
}) {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setProgress(1)
      return undefined
    }

    const updateProgress = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const total = Math.max(rect.height - window.innerHeight, 1)
      const current = clamp(-rect.top / total)
      setProgress(current)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [reduceMotion])

  const dimensions = useMemo(() => {
    const maxWidth = viewport.width < 768 ? viewport.width * 0.88 : Math.min(viewport.width * 0.9, 1180)
    const minWidth = viewport.width < 768 ? viewport.width * 0.72 : 360
    const width = minWidth + (maxWidth - minWidth) * progress
    const minHeight = viewport.width < 768 ? 280 : 500
    const maxHeight = viewport.width < 768 ? viewport.height * 0.72 : viewport.height * 0.82
    const height = minHeight + (maxHeight - minHeight) * progress

    return { width, height }
  }, [progress, viewport.height, viewport.width])

  const titleOffset = reduceMotion ? 0 : (1 - progress) * (viewport.width < 768 ? 60 : 120)
  const overlayOpacity = 0.2 + progress * 0.28
  const copyOpacity = clamp((progress - 0.52) / 0.32)

  const titleParts = title?.split(' ') || []
  const firstLine = titleParts.slice(0, Math.ceil(titleParts.length / 2)).join(' ')
  const secondLine = titleParts.slice(Math.ceil(titleParts.length / 2)).join(' ')

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-cream">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ opacity: reduceMotion ? 1 : 1 - progress * 0.72 }}
        >
          <img
            src={bgImageSrc}
            alt="Fondo de la invitacion"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-cream/35 to-cream" />
        </motion.div>

        <div className="relative z-10 flex h-full items-start justify-center px-6 pb-12 pt-16 md:items-center md:px-10 md:py-12 lg:px-16">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative order-1 flex flex-col justify-center">
              <motion.p
                className="text-xs uppercase tracking-[0.45em] text-text-mid"
                style={{ x: -titleOffset * 0.45, opacity: 0.7 + progress * 0.3 }}
              >
                {eyebrow}
              </motion.p>

              <div className="mt-6 overflow-hidden">
                <motion.h1
                  className="font-heading text-5xl italic leading-[0.9] text-text-dark sm:text-6xl md:text-7xl lg:text-[7rem]"
                  style={{ x: -titleOffset }}
                >
                  {firstLine}
                </motion.h1>
                {secondLine ? (
                  <motion.h1
                    className="mt-1 font-heading text-5xl italic leading-[0.9] text-[#9ab89a] sm:text-6xl md:text-7xl lg:text-[7rem]"
                    style={{ x: titleOffset }}
                  >
                    {secondLine}
                  </motion.h1>
                ) : null}
              </div>

              <motion.p
                className="mt-6 max-w-xl text-base leading-7 text-text-mid md:mt-8 md:text-2xl md:leading-10"
                style={{ opacity: 0.4 + progress * 0.6, y: reduceMotion ? 0 : (1 - progress) * 28 }}
              >
                {description}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-text-mid md:mt-10 md:gap-4 md:text-sm"
                style={{ opacity: copyOpacity }}
              >
                <span>{date}</span>
                <span className="hidden md:inline">•</span>
                <span>{scrollHint}</span>
              </motion.div>
            </div>

            <div className="order-2 mt-2 flex justify-center md:mt-0 lg:justify-end">
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/20 shadow-[0_20px_60px_rgba(90,110,88,0.18)] backdrop-blur-md"
                style={{ width: dimensions.width, height: dimensions.height }}
              >
                {mediaType === 'video' ? (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img src={mediaSrc} alt={title} className="h-full w-full object-cover" />
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-white/10"
                  style={{ opacity: overlayOpacity }}
                />

                <motion.div
                  className="absolute inset-x-0 bottom-0 p-4 md:p-8"
                  style={{ opacity: copyOpacity }}
                >
                  <div className="rounded-[1.5rem] border border-white/40 bg-white/35 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.32em] text-white/80">Recibida</p>
                    <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">{date}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/80">{scrollHint}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
