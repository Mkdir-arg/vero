export default function EntranceDiploma({ onEnter }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,222,196,0.28),_transparent_32%),linear-gradient(180deg,_#fffef9_0%,_#fbf8f0_55%,_#f4efe3_100%)] px-5">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-peach/20 blur-3xl" />
        <div className="absolute bottom-6 left-6 h-36 w-36 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute right-4 top-1/3 h-44 w-44 rounded-full bg-peach/18 blur-3xl" />
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="group relative flex w-full max-w-[24rem] items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
      >
        <div className="absolute inset-x-8 -bottom-4 h-10 rounded-full bg-[#b8c8b2]/25 blur-2xl" />

        <div className="relative w-full">
          <div className="absolute left-1 top-1/2 z-20 h-[72%] w-7 -translate-y-1/2 rounded-full border border-[#b99d6f] bg-[linear-gradient(180deg,#f6edd2_0%,#dbc18e_28%,#f8efd6_54%,#d7ba7b_78%,#f4e7c8_100%)] shadow-[inset_0_0_10px_rgba(120,90,30,0.18),0_8px_18px_rgba(120,90,30,0.18)]" />
          <div className="absolute right-1 top-1/2 z-20 h-[72%] w-7 -translate-y-1/2 rounded-full border border-[#b99d6f] bg-[linear-gradient(180deg,#f6edd2_0%,#dbc18e_28%,#f8efd6_54%,#d7ba7b_78%,#f4e7c8_100%)] shadow-[inset_0_0_10px_rgba(120,90,30,0.18),0_8px_18px_rgba(120,90,30,0.18)]" />

          <div className="relative overflow-hidden rounded-[2.8rem] border border-[#d7c69f] bg-[linear-gradient(180deg,#fffdf8_0%,#faf4e7_48%,#f5eddc_100%)] px-10 py-14 shadow-[0_28px_70px_rgba(100,84,45,0.18)]">
            <div className="absolute inset-3 rounded-[2.2rem] border border-[#e7dcc0]/90" />
            <div className="absolute inset-x-10 top-7 h-px bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />
            <div className="absolute inset-x-10 bottom-7 h-px bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />
            <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-[#ecdcb5] bg-white/40 blur-md" />

            <div className="relative z-10">
              <p className="text-center text-[11px] uppercase tracking-[0.5em] text-text-mid">
                Invitacion de recibida
              </p>

              <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#cfbf92] bg-[radial-gradient(circle_at_30%_30%,#fffef6_0%,#f4ebd4_60%,#e3d2a4_100%)] shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_10px_24px_rgba(150,125,70,0.18)]">
                <span className="font-heading text-3xl italic text-text-dark">V</span>
              </div>

              <h1 className="mt-7 text-center font-heading text-[2.4rem] italic leading-none text-text-dark">
                Toca para ingresar
              </h1>

              <p className="mx-auto mt-5 max-w-[15rem] text-center text-sm leading-7 text-text-mid">
                Abre la invitacion y deja que la noche empiece con musica.
              </p>

              <div className="mt-9 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c6dec4]" />
                <span className="text-[11px] uppercase tracking-[0.38em] text-text-mid">
                  Tap to enter
                </span>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c6dec4]" />
              </div>

              <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8c59a] bg-[#f6efdc] shadow-[0_8px_20px_rgba(150,125,70,0.15)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfbf92] bg-[#fbf7ee] text-[10px] uppercase tracking-[0.24em] text-text-dark">
                  Vero
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
