export default function MobileCallBar() {
  return (
    <a
      href="tel:+19057322791"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-brand-orange text-white font-bold text-base py-4 shadow-2xl"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
      Call Tom Now: 905-732-2791
    </a>
  )
}
