import { BUSINESS, NIAGARA_AREA_SERVED, PROVIDER } from './data/business'
import { REVIEWS } from './data/reviews'
import { generalFaqs } from './data/faqs'

// Builds the per-page <head> markup (title, meta, OG/Twitter, canonical,
// JSON-LD) that prerender.js injects into each page. Server/build-time only —
// not imported by the client bundle.

const OG_IMAGE = BUSINESS.image
const OG_IMAGE_ALT = 'FixAir residential HVAC — furnace, AC and home comfort in Niagara'

// Escape a value for use in an HTML attribute or text node.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Serialize a JSON-LD object into a safe <script> body.
function jsonLd(obj) {
  const json = JSON.stringify(obj).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}

function canonicalFor(route) {
  return BUSINESS.url + route.path
}

function ogAndTwitter({ title, description, canonical }) {
  return [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1280" />`,
    `<meta property="og:image:height" content="720" />`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}" />`,
  ]
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Full HVACBusiness entity for the homepage (the canonical business record).
function homeBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: BUSINESS.name,
    description:
      'Residential only HVAC company serving Niagara and surrounding areas for 25+ years. Furnaces, air conditioners, ductless systems, boilers, hot water heaters and duct cleaning.',
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    founder: { '@type': 'Person', name: BUSINESS.founder },
    areaServed: [
      NIAGARA_AREA_SERVED,
      ...BUSINESS.cities.map(name => ({ '@type': 'City', name })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: BUSINESS.sameAs,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
      bestRating: BUSINESS.aggregateRating.bestRating,
    },
    review: REVIEWS.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: r.body,
    })),
  }
}

function headForHome(route) {
  const canonical = canonicalFor(route)
  const title = 'FixAir Heating and Air Conditioning | Residential HVAC in Niagara'
  const description =
    'FixAir Heating and Air Conditioning is a residential only HVAC company serving Niagara and surrounding areas for 25+ years. Furnaces, AC, ductless systems, hot water heaters and more. Call Tom: 905-732-2791.'
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="keywords" content="residential HVAC Niagara, home heating and cooling Niagara, furnace repair Niagara, air conditioner install Niagara, ductless mini split Niagara, residential HVAC contractor, FixAir" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(homeBusinessSchema()),
      jsonLd(faqPage(generalFaqs)),
    ],
  }
}

function headForService(route) {
  const s = route.data
  const canonical = canonicalFor(route)
  const title = s.metaTitle
  const description = s.metaDescription
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${s.name} — residential HVAC`,
    name: s.h1,
    description,
    url: canonical,
    areaServed: NIAGARA_AREA_SERVED,
    provider: PROVIDER,
  }
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'Services', url: BUSINESS.url + '/#services' },
    { name: s.name, url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(serviceSchema),
      jsonLd(crumbs),
      jsonLd(faqPage(s.faqs)),
    ],
  }
}

function headForLocation(route) {
  const l = route.data
  const canonical = canonicalFor(route)
  const title = l.metaTitle
  const description = l.metaDescription
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Residential HVAC',
    name: `HVAC Services in ${l.name}`,
    description,
    url: canonical,
    areaServed: {
      '@type': 'City',
      name: l.name,
      containedInPlace: NIAGARA_AREA_SERVED,
    },
    provider: PROVIDER,
  }
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'Service Areas', url: BUSINESS.url + '/#area' },
    { name: l.name, url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(serviceSchema),
      jsonLd(crumbs),
      jsonLd(faqPage(l.faqs)),
    ],
  }
}

function headForNotFound() {
  const title = 'Page Not Found | FixAir Heating and Air Conditioning'
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="The page you're looking for couldn't be found. Browse FixAir's residential HVAC services and Niagara service areas, or call Tom at 905-732-2791." />`,
      `<meta name="robots" content="noindex, follow" />`,
    ],
  }
}

// Returns the <head> inner HTML string for a route (everything between the
// static template's charset/viewport and the Google Fonts links).
export function buildHead(route) {
  let built
  if (route.kind === 'service') built = headForService(route)
  else if (route.kind === 'location') built = headForLocation(route)
  else if (route.kind === '404') built = headForNotFound()
  else built = headForHome(route)
  return built.lines.join('\n    ')
}
