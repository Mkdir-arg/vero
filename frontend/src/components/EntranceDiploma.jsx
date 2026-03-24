export default function EntranceDiploma({ onEnter }) {
  return (
    <main className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,222,196,0.3),_transparent_32%),linear-gradient(180deg,_#fcf9f6_0%,_#f7f4ef_58%,_#efe8dd_100%)] px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute -left-[22%] -top-[10%] w-[140%] max-w-none rotate-[10deg] opacity-[0.11] blur-[10px] mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Xpp5q33aXouA0_IOHZp6RLxtajoCapjx7KFLHltALHQlS-tp7eIux8-rApP9_7LWdjVqwS_PL7bFN722JXmtPoa1oQF1XlzSOmnCY42IFyiYRQspnTsxSK6uQG_3g9rCCLm67Naib8X90BQVGAigsEWwXIhc_P1MyxQlV2oGitcd8wOywDTijEr5dBhbZe8Lybt2mRt8BRzck12XRNQdyqAfRz6MpkLeg61Czr15UretplSTA4MJJADFsX62PJrEm6eD7HPsFDo"
        />
        <img
          alt=""
          className="absolute -bottom-[14%] -right-[8%] w-[120%] max-w-none -rotate-[34deg] opacity-[0.11] blur-[10px] mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCABP8UPHnpakw6Jd0bsuyfUhJz_y72PMTpbakU3OiW44arKEWkU0YkgFihst7H96wyzTqwuzKAqgKE9U4PdA5mKyqt90upxTWEGLlzVkcuq9YP5dC-oX0_SBpkC-89e-HqhD8EbJYjPxAHChZN3wqBWpQmaeshla0m-Wlx-AcOFUboo9ID7ZG9slWtK0bwOM9DqAIb36RWcEeDEEKjQOLAsXH3RSDllDGPjQAjcaxfRHDpwKPVFbmaobM2eYBd0f8DqDLuKplNAvE"
        />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="mb-10 space-y-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#8ea98c]">
            Mi Lauria
          </p>
          <h1 className="font-heading text-4xl italic tracking-tight text-text-dark sm:text-5xl">
            Vero 2026
          </h1>
        </div>

        <button
          type="button"
          onClick={onEnter}
          className="group relative aspect-[5/4] w-full cursor-pointer transition-transform duration-500 active:scale-95"
        >
          <div className="absolute inset-0 rounded-[1.35rem] border border-[#e3dfd8] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),0_10px_20px_-10px_rgba(0,0,0,0.05)]" />
          <div className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(255,255,255,0.3)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjzU-nXy5FG5L3_5e1F1BHVnjYd8fByZv6PTzapkss88Eytd2nUj6WzsVtCyLJc5hYKk81oXzOlXjej7w60Mqd0MuK5yYrV4MrIEwBSp6zoTTBMQ0q4LMf47a3sY7498cLEj9OzBahzGDZukFdgtzBpdgBu05h_NquLb3BS-0s2Z3Qd5NDpGh9g-BMIzBMdP2jRvAEiO70ocLWo1C6E92XXYnFJWE9B9Sqga7TkFCfXyAL6OdEymxZ6rIKF_-b9lcRF_fFIZEycak')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-[12px] rounded-[1rem] border-[10px] border-[#c6dec4]/18" />

          <div
            className="absolute inset-x-0 top-0 z-10 h-full rounded-t-[1.35rem] border-b border-[#e5e2df]/40 bg-white/95 shadow-sm"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 60%)' }}
          >
            <div className="absolute inset-0 rounded-t-[1.35rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_rgba(255,255,255,0.15)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjzU-nXy5FG5L3_5e1F1BHVnjYd8fByZv6PTzapkss88Eytd2nUj6WzsVtCyLJc5hYKk81oXzOlXjej7w60Mqd0MuK5yYrV4MrIEwBSp6zoTTBMQ0q4LMf47a3sY7498cLEj9OzBahzGDZukFdgtzBpdgBu05h_NquLb3BS-0s2Z3Qd5NDpGh9g-BMIzBMdP2jRvAEiO70ocLWo1C6E92XXYnFJWE9B9Sqga7TkFCfXyAL6OdEymxZ6rIKF_-b9lcRF_fFIZEycak')] bg-cover bg-center opacity-10" />
          </div>

          <div className="absolute left-1/2 top-[35%] z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#8e6f10]/30 bg-[linear-gradient(135deg,#fed65b_0%,#785a00_100%)] shadow-[0_8px_20px_rgba(115,92,0,0.35)]">
              <div className="absolute inset-[-4px] rounded-full border-[6px] border-[#785a00]/20 blur-[1px]" />
              <span className="relative font-heading text-2xl italic text-white">V</span>
              <div className="absolute inset-[5px] rounded-full border border-white/30" />
            </div>
          </div>

          <div className="absolute inset-0 rounded-[1.35rem] bg-[#c6dec4]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>

        <div className="mt-12 text-center">
          <div className="inline-flex animate-[breathe_3s_ease-in-out_infinite] flex-col items-center gap-4">
            <span className="font-heading text-xl italic tracking-wide text-[#5f675e]">
              Toca para ingresar
            </span>
            <div className="h-px w-10 bg-[#c6dec4]/60" />
          </div>
        </div>

        <footer className="pointer-events-none fixed bottom-10 left-1/2 w-full -translate-x-1/2 px-8 text-center">
          <span className="block text-[9px] uppercase tracking-[0.4em] text-text-dark/35">
            
          </span>
        </footer>
      </div>
    </main>
  )
}
