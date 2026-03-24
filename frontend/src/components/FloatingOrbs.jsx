export default function FloatingOrbs() {
  const orbs = [
    { top: '5%', left: '10%', size: 60, delay: 0, color: 'from-rose/40 to-peach/20' },
    { top: '15%', right: '15%', size: 40, delay: 0.5, color: 'from-peach/30 to-blush/20' },
    { top: '60%', left: '5%', size: 50, delay: 1, color: 'from-gold/40 to-rose/20' },
    { top: '70%', right: '10%', size: 35, delay: 1.5, color: 'from-blush/30 to-peach/20' },
    { top: '30%', right: '5%', size: 45, delay: 0.3, color: 'from-gold/30 to-blush/20' },
  ]

  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none bg-gradient-to-br ${orb.color} rounded-full blur-3xl`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
      `}</style>
    </>
  )
}
