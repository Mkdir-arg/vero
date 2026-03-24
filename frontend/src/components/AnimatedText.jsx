export default function AnimatedText({ text, className }) {
  return (
    <div className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block animate-fade-in-up"
          style={{
            animationDelay: `${i * 0.08}s`,
            animationFillMode: 'both'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}
