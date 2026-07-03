// Visible breadcrumb trail for subpages. Pairs with the BreadcrumbList
// JSON-LD emitted in the page <head>. `items` = [{ name, href }]; the last
// item is rendered as the current (unlinked) page.
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-blue-200">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.name} className="flex items-center gap-1.5">
              {last || !it.href ? (
                <span className="text-white font-semibold" aria-current="page">
                  {it.name}
                </span>
              ) : (
                <a href={it.href} className="hover:text-white hover:underline transition-colors">
                  {it.name}
                </a>
              )}
              {!last && (
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
