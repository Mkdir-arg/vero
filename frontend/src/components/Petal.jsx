export default function Petal({ style }) {
  return (
    <svg
      className="float-petal pointer-events-none"
      style={{
        ...style,
        position: 'absolute'
      }}
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="20"
        cy="30"
        rx="12"
        ry="28"
        fill="#F0D0C0"
        fillOpacity="0.55"
        transform="rotate(-15 20 30)"
      />
    </svg>
  )
}
