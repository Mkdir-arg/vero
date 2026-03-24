export default function EntranceDiploma({ onEnter }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,222,196,0.32),_transparent_30%),linear-gradient(180deg,_#fffef9_0%,_#faf7ef_54%,_#efe8d8_100%)] px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-peach/25 blur-3xl" />
        <div className="absolute bottom-8 left-4 h-40 w-40 rounded-full bg-blush/55 blur-3xl" />
        <div className="absolute right-4 top-1/3 h-44 w-44 rounded-full bg-peach/18 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="group relative w-full max-w-[25rem] transition-all duration-500 hover:-translate-y-1 active:scale-[0.985]"
      >
        <div className="absolute inset-x-8 bottom-0 h-8 rounded-full bg-[#9fb19a]/20 blur-2xl" />

        <div className="relative pt-10">
          <div className="absolute left-1/2 top-0 z-30 h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#d8c59a] to-transparent" />

          <div className="absolute left-2 top-1/2 z-20 h-[74%] w-8 -translate-y-1/2 rounded-full border border-[#b99d6f] bg-[linear-gradient(180deg,#f8efda_0%,#dcc28e_20%,#f6ecd0_48%,#cfb171_78%,#f7edd2_100%)] shadow-[inset_0_0_14px_rgba(120,90,30,0.16),0_12px_22px_rgba(120,90,30,0.16)]" />
          <div className="absolute right-2 top-1/2 z-20 h-[74%] w-8 -translate-y-1/2 rounded-full border border-[#b99d6f] bg-[linear-gradient(180deg,#f8efda_0%,#dcc28e_20%,#f6ecd0_48%,#cfb171_78%,#f7edd2_100%)] shadow-[inset_0_0_14px_rgba(120,90,30,0.16),0_12px_22px_rgba(120,90,30,0.16)]" />

          <div className="relative overflow-hidden rounded-[3rem] border border-[#d9c79f] bg-[linear-gradient(180deg,#fffdf8_0%,#fbf5e8_36%,#f3ead7_100%)] px-10 pb-16 pt-14 shadow-[0_34px_80px_rgba(101,82,44,0.16)]">
            <div className="absolute inset-3 rounded-[2.35rem] border border-[#e7dcc1]/90" />
            <div className="absolute inset-x-12 top-8 h-px bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />
            <div className="absolute inset-x-12 bottom-8 h-px bg-gradient-to-r from-transparent via-[#c6dec4] to-transparent" />
            <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-white/45 blur-xl" />
            <div className="absolute right-6 top-10 h-16 w-16 rounded-full bg-[#c6dec4]/18 blur-xl" />

            <div className="relative z-10">
              <p className="text-center text-[11px] uppercase tracking-[0.52em] text-text-mid">
                Invitacion de recibida
              </p>

              <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#ceb98b] bg-[radial-gradient(circle_at_30%_30%,#fffef7_0%,#f3ead5_60%,#deca96_100%)] shadow-[inset_0_3px_14px_rgba(255,255,255,0.85),0_14px_30px_rgba(150,125,70,0.2)]">
                <span className="font-heading text-4xl italic text-text-dark">V</span>
              </div>

              <h1 className="mt-8 text-center font-heading text-[2.7rem] italic leading-[0.92] text-text-dark">
                Toca para
                <span className="block text-[#93ae91]">ingresar</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[16rem] text-center text-sm leading-7 text-text-mid">
                Abre la invitacion, enciende la musica y deja que empiece la noche.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c6dec4]" />
                <span className="rounded-full border border-[#d8c9a2] bg-white/55 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-text-dark shadow-[0_8px_18px_rgba(120,90,30,0.08)]">
                  Tap to enter
                </span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c6dec4]" />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-0 z-40 flex -translate-x-1/2 flex-col items-center">
            <div className="h-6 w-6 rounded-full border border-[#ceb98b] bg-[radial-gradient(circle_at_30%_30%,#fff9ea_0%,#f0dfb5_65%,#d4b878_100%)] shadow-[0_8px_18px_rgba(120,90,30,0.18)]" />
            <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-full border border-[#c7b182] bg-[radial-gradient(circle_at_30%_30%,#fffdf6_0%,#f1e7d0_58%,#dbc08b_100%)] shadow-[0_14px_28px_rgba(120,90,30,0.18)]">
              <span className="font-heading text-sm uppercase tracking-[0.22em] text-text-dark">
                Vero
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
