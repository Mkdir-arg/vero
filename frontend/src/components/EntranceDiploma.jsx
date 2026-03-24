export default function EntranceDiploma({ onEnter }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-white to-peach/20 px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-peach/25 blur-3xl" />
        <div className="absolute bottom-10 left-8 h-40 w-40 rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute right-8 top-1/3 h-44 w-44 rounded-full bg-peach/20 blur-3xl" />
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="group relative w-full max-w-[23rem] transition-transform duration-500 hover:scale-[1.02]"
      >
        <div className="absolute inset-x-10 -top-8 h-16 rounded-full bg-peach/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[2.4rem] border border-[#b8cfb6] bg-gradient-to-b from-[#fdfcf6] via-[#fffdf8] to-[#f6f2e8] px-7 py-12 shadow-[0_24px_60px_rgba(90,110,88,0.18)]">
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#d8c9a2] via-[#efe2ba] to-transparent opacity-80" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#d8c9a2] via-[#efe2ba] to-transparent opacity-80" />
          <div className="absolute inset-x-0 top-5 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />
          <div className="absolute inset-x-0 bottom-5 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />

          <div className="relative z-10">
            <p className="text-center text-[11px] uppercase tracking-[0.45em] text-text-mid">
              Invitacion
            </p>
            <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full border border-peach/60 bg-white/70 text-2xl text-text-dark shadow-soft">
              V
            </div>
            <h1 className="mt-6 text-center font-heading text-4xl italic text-text-dark">
              Toca para ingresar
            </h1>
            <p className="mx-auto mt-5 max-w-xs text-center text-sm leading-7 text-text-mid">
              Abre la invitacion y deja que la experiencia empiece con musica.
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}
