export default function VentDivider() {
  return (
    <div className="relative w-full h-16 sm:h-[72px] overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/longvent-crop.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#b8bec4',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
