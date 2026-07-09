const BG = {
  backgroundImage: "url('/longvent-crop.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#b8bec4',
}

export default function VentStrip({ slim = false }) {
  if (slim) {
    return (
      <div className="relative h-1.5 overflow-hidden" aria-hidden="true" style={BG}>
        <div className="absolute inset-0 bg-black/30" />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden h-7 sm:h-auto" style={BG}>
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative hidden sm:flex sm:justify-center">
      <div className="w-full max-w-7xl grid sm:grid-cols-4 lg:grid-cols-8 divide-x divide-black/20">

        {[
          { value: '25+',      label: 'Years\nExperience'   },
          { value: '6',        label: 'Communities\nServed' },
          { value: 'Licensed', label: '& Insured'           },
        ].map(s => (
          <div key={s.label} className="flex flex-col items-center justify-center text-center px-3 py-4 gap-1">
            <span
              className="text-lg font-extrabold text-orange-400"
              style={{ textShadow: '0 0 10px rgba(251,146,60,0.7), 0 1px 3px rgba(0,0,0,0.6)' }}
            >
              {s.value}
            </span>
            <span
              className="text-[10px] text-white font-semibold leading-snug whitespace-pre-line tracking-widest uppercase"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
            >
              {s.label}
            </span>
          </div>
        ))}

        {[
          { label: 'Licensed &\nInsured',     icon: <path fillRule="evenodd" d="M10 1l2.09 4.26L17 6.27l-3.5 3.41.83 4.82L10 12.27l-4.33 2.23.83-4.82L3 6.27l4.91-.71L10 1z" clipRule="evenodd"/> },
          { label: 'Financing\nAvailable',    icon: <><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/></> },
          { label: 'Fast\nResponse',          icon: <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/> },
          { label: 'Local &\nFamily-Run',     icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/> },
          { label: 'Residential\nSpecialist', icon: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/> },
        ].map(t => (
          <div key={t.label} className="flex flex-col items-center justify-center text-center px-3 py-4 gap-1.5">
            <svg
              className="w-4 h-4 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ filter: 'drop-shadow(0 0 4px rgba(251,146,60,0.7))' }}
            >
              {t.icon}
            </svg>
            <span
              className="text-[10px] text-white font-semibold leading-snug whitespace-pre-line tracking-widest uppercase"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
            >
              {t.label}
            </span>
          </div>
        ))}

      </div>
      </div>
    </div>
  )
}
