export default function FloralDivider() {
  return (
    <div className="flex items-center justify-center my-6 gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/30 to-transparent"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path
          d="M12 2C12 2 14 8 12 12C10 8 12 2 12 2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M12 22C12 22 14 16 12 12C10 16 12 22 12 22"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M2 12C2 12 8 10 12 12C8 14 2 12 2 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M22 12C22 12 16 10 12 12C16 14 22 12 22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/30 to-transparent"></div>
    </div>
  )
}
