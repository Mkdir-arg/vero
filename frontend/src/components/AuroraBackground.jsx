export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Aurora glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-rose/5"></div>

      {/* Animated aurora orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rose to-peach rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-gold to-rose rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-peach to-blush rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDuration: '9s', animationDelay: '4s'}}></div>

      {/* Mesh gradient effect */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4B8A8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F8EDE3" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#gradient1)" />
        <rect width="100" height="100" fill="url(#gradient2)" opacity="0.5" />
      </svg>
    </div>
  )
}
