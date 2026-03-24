import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ScrollExpansionHero from '../components/ui/ScrollExpansionHero'

const EVENTO = {
  nombre: 'Vero',
  subtitulo: 'Una invitacion de recibida pensada para bajar despacio, descubrir cada bloque y llegar al final con toda la info clara.',
  fecha: 'Sabado 14 de diciembre',
  hora: '19:00 hs',
  lugar: 'Fiestamania Pineto',
  direccion: 'Fiestamania Pineto',
  mapsEmbed: 'https://www.google.com/maps?q=Fiestamania+Pineto&z=16&output=embed',
  mapsLink:
    'https://www.google.com/maps/place/Fiestamania+Pineto/data=!4m2!3m1!1s0x0:0x2363ddba8b730aca?sa=X&ved=1t:2428&ictx=111',
  heroImage: '/vero-hero.jpeg',
  heroBackground: '/vero-hero.jpeg',
}

const detalles = [
  {
    id: 'fecha',
    etiqueta: 'Fecha',
    valor: EVENTO.fecha,
    descripcion: 'Reserva este dia para venir a celebrar conmigo.',
  },
  {
    id: 'hora',
    etiqueta: 'Hora',
    valor: EVENTO.hora,
    descripcion: 'Llegamos con tiempo para arrancar la noche juntas.',
  },
  {
    id: 'lugar',
    etiqueta: 'Lugar',
    valor: EVENTO.lugar,
    descripcion: 'Aqui despues va el salon o direccion definitiva.',
  },
]

export default function Invitation({ isActive = true }) {
  return (
    <main className="bg-cream text-text-dark">
      <ScrollExpansionHero
        mediaType="image"
        mediaSrc={EVENTO.heroImage}
        bgImageSrc={EVENTO.heroBackground}
        eyebrow="Invitacion de recibida"
        title={EVENTO.nombre}
        date={`${EVENTO.fecha} · ${EVENTO.hora}`}
        scrollHint="Desliza para descubrir la noche"
        description={EVENTO.subtitulo}
        isActive={isActive}
      />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mb-12 flex items-center justify-between gap-4 border-b border-peach/40 pb-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.45em] text-text-mid">Seccion 01</p>
            <h2 className="mt-3 font-heading text-4xl italic md:text-5xl">Detalles del evento</h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {detalles.map((detalle, index) => (
            <ScrollReveal key={detalle.id} delay={0.08 * (index + 1)}>
              <article className="h-full rounded-[1.75rem] border border-peach/50 bg-white/75 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.32em] text-text-mid">{detalle.etiqueta}</p>
                <p className="mt-5 text-2xl font-semibold leading-snug text-text-dark">{detalle.valor}</p>
                <p className="mt-5 text-sm leading-7 text-text-mid">{detalle.descripcion}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-6 py-20 md:px-10 lg:py-28">
        <ScrollReveal className="rounded-[2rem] border border-peach/45 bg-white/70 px-8 py-12 text-center shadow-soft backdrop-blur-sm md:px-16 md:py-16">
          <p className="text-xs uppercase tracking-[0.45em] text-text-mid">Seccion 02</p>
          <h2 className="mt-4 font-heading text-4xl italic md:text-5xl">Un mensaje para esta etapa</h2>
          <p className="mx-auto mt-8 max-w-3xl font-heading text-3xl italic leading-relaxed text-text-dark md:text-5xl md:leading-[1.3]">
            Quiero celebrar este cierre con la gente que estuvo cerca durante el camino, con una noche suave, linda y llena de recuerdos.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-text-mid md:text-lg">
            A medida que sigues bajando, aparecen secciones separadas para confirmar asistencia, sumar fotos y llegar facilmente al lugar.
          </p>
        </ScrollReveal>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-6 py-20 md:px-10 lg:py-28">
        <ScrollReveal className="rounded-[2rem] border border-peach/45 bg-white/72 px-8 py-12 shadow-soft backdrop-blur-sm md:px-16 md:py-16">
          <p className="text-xs uppercase tracking-[0.45em] text-text-mid">Seccion 03</p>
          <h2 className="mt-4 font-heading text-4xl italic md:text-5xl">Confirmar asistencia</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-text-mid md:text-lg">
            Si ya sabes que vienes, este bloque queda pensado para que confirmes en un solo toque y podamos organizarnos mejor.
          </p>
          <div className="mt-10 rounded-[1.75rem] border border-peach/40 bg-gradient-to-br from-white to-peach/20 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-text-mid">RSVP</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-text-dark md:text-3xl">
              Reserva tu lugar para la noche de Vero
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-text-mid md:text-base">
              Puedes confirmar asistencia y dejar un mensaje especial para que quede guardado como parte del recuerdo.
            </p>
            <Link
              to="/rsvp"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-peach px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-text-dark transition-all duration-300 hover:-translate-y-1 hover:bg-[#b9d6b7] hover:shadow-lg"
            >
              Confirmar asistencia
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-6 py-20 md:px-10 lg:py-28">
        <ScrollReveal className="rounded-[2rem] border border-peach/45 bg-gradient-to-b from-white/78 to-peach/20 px-8 py-12 shadow-soft backdrop-blur-sm md:px-16 md:py-16">
          <p className="text-xs uppercase tracking-[0.45em] text-text-mid">Seccion 04</p>
          <h2 className="mt-4 font-heading text-4xl italic md:text-5xl">Subir fotos</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-text-mid md:text-lg">
            Me encantaria que cada una pueda sumar su mirada de la noche. Esta card queda dedicada a reunir fotos y recuerdos del evento.
          </p>
          <div className="mt-10 rounded-[1.75rem] border border-peach/40 bg-white/85 p-6 shadow-soft md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-text-mid">Galeria colaborativa</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-text-dark md:text-3xl">
              Comparte tus fotos favoritas de la recibida
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-text-mid md:text-base">
              Sube imagenes desde el celular para que despues armemos un recuerdo comun de toda la noche.
            </p>
            <Link
              to="/upload"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-peach/80 bg-peach/35 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-text-dark transition-all duration-300 hover:-translate-y-1 hover:bg-peach/55 hover:shadow-lg"
            >
              Subir fotos
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.45em] text-text-mid">Seccion 05</p>
              <h2 className="mt-4 font-heading text-4xl italic leading-tight md:text-5xl">
                Ubicacion y mapa
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-text-mid md:text-lg">
                Este bloque queda al final del recorrido para que cualquiera pueda abrir el punto de Google Maps rapido y llegar sin perderse.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="mt-8 rounded-[1.75rem] border border-peach/45 bg-white/70 p-7 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-text-mid">Direccion</p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-text-dark">{EVENTO.direccion}</p>
              <p className="mt-4 text-base leading-8 text-text-mid">
                Reemplaza la direccion y el link de ejemplo por los reales cuando ya tengas definido el lugar.
              </p>
              <a
                href={EVENTO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-peach px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-dark transition-all duration-300 hover:-translate-y-1 hover:bg-[#b9d6b7] hover:shadow-lg"
              >
                Abrir Google Maps
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18}>
            <div className="overflow-hidden rounded-[2rem] border border-peach/50 bg-white/75 p-3 shadow-soft backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.4rem]">
                <iframe
                  title="Mapa del evento"
                  src={EVENTO.mapsEmbed}
                  className="h-[420px] w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
