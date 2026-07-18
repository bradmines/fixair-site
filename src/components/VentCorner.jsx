export default function VentCorner() {
  return (
    <div
      className="hidden md:block absolute pointer-events-none top-0 left-0"
      style={{ width: '220px', zIndex: 0 }}
      aria-hidden="true"
    >
      <img src="/vent-corner-tl.png" alt="" className="w-full" loading="eager" />
    </div>
  )
}
