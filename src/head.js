import { BUSINESS, NIAGARA_AREA_SERVED, PROVIDER } from './data/business'
import { REVIEWS } from './data/reviews'
import { generalFaqs, allFaqs } from './data/faqs'
import { blogPosts } from './data/blog'

// Builds the per-page <head> markup (title, meta, OG/Twitter, canonical,
// JSON-LD) that prerender.js injects into each page. Server/build-time only —
// not imported by the client bundle.

const OG_IMAGE = BUSINESS.image
const OG_IMAGE_ALT = 'FixAir residential HVAC in Niagara: furnace, AC and home comfort'

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

function ogAndTwitter({ title, description, canonical, image, imageAlt, type = 'website' }) {
  const img = image || OG_IMAGE
  const alt = imageAlt || OG_IMAGE_ALT
  return [
    `<meta property="og:type" content="${esc(type)}" />`,
    `<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta property="og:image:width" content="1280" />`,
    `<meta property="og:image:height" content="720" />`,
    `<meta property="og:image:alt" content="${esc(alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
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
    address: BUSINESS.address,
    priceRange: BUSINESS.priceRange,
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
    // The 24/7 emergency line is a separate offering from the regular office
    // hours above. Modelling it as an availableService with its own
    // hoursAvailable keeps both claims true — marking the whole business as
    // open 24/7 would misrepresent normal booking hours.
    availableService: {
      '@type': 'Service',
      name: 'Emergency HVAC Repair',
      description:
        'After-hours no-heat and no-cooling emergency repair for Niagara homeowners, available 24/7 by phone.',
      url: BUSINESS.url + '/services/emergency-repair/',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
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

// Site-level entity, so Google can tie every page back to one publisher and
// resolve the brand name for sitelinks.
function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    alternateName: 'FixAir',
    url: BUSINESS.url,
    inLanguage: 'en-CA',
    publisher: { '@type': 'HVACBusiness', name: BUSINESS.name, url: BUSINESS.url },
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
      // The hero poster is the LCP element. Preload it (per breakpoint, so
      // only one is ever fetched) instead of letting it wait on the JS bundle.
      `<link rel="preload" as="image" href="/hero-poster-newnew.jpg" media="(min-width: 640px)" fetchpriority="high" />`,
      `<link rel="preload" as="image" href="/hero-poster-mobile.jpg" media="(max-width: 639px)" fetchpriority="high" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(homeBusinessSchema()),
      jsonLd(webSiteSchema()),
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
    serviceType: `Residential ${s.name}`,
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

// City + service pages, e.g. /service-areas/welland/furnace-repair/. The
// Service schema pins areaServed to the single city rather than the whole
// region, which is the whole point of these pages existing.
function headForCityService(route) {
  const cs = route.data
  const canonical = canonicalFor(route)
  const title = cs.metaTitle
  const description = cs.metaDescription
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Residential ${cs.service}`,
    name: `${cs.service} in ${cs.city}`,
    description,
    url: canonical,
    areaServed: {
      '@type': 'City',
      name: cs.city,
      containedInPlace: NIAGARA_AREA_SERVED,
    },
    provider: PROVIDER,
  }
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'Service Areas', url: BUSINESS.url + '/#area' },
    { name: cs.city, url: `${BUSINESS.url}/service-areas/${cs.citySlug}/` },
    { name: cs.service, url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({
        title,
        description,
        canonical,
        image: BUSINESS.url + cs.image,
        imageAlt: `${cs.service} in ${cs.city} by FixAir`,
      }),
      jsonLd(serviceSchema),
      jsonLd(crumbs),
      jsonLd(faqPage(cs.faqs)),
    ],
  }
}

function headForFaq(route) {
  const canonical = canonicalFor(route)
  const title = 'HVAC FAQ | Furnace, AC & Heating Questions in Niagara | FixAir'
  const description =
    'Answers to common residential HVAC questions in Niagara: furnace and AC repair or replacement, ductless systems, boilers, maintenance, costs and financing. Call Tom: 905-732-2791.'
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'FAQ', url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="keywords" content="HVAC FAQ Niagara, furnace questions, air conditioner questions, when to replace furnace, HVAC cost Niagara, ductless mini split FAQ, residential HVAC contractor Niagara" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(faqPage(allFaqs)),
      jsonLd(crumbs),
    ],
  }
}

function headForBlog(route) {
  const canonical = canonicalFor(route)
  const title = 'HVAC Tips & Advice for Niagara Homeowners | FixAir Blog'
  const description =
    'Plain-language heating and cooling advice from Tom at FixAir — a residential HVAC specialist with 25+ years serving Niagara. Furnaces, AC, ductless systems, boilers and more.'
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'Blog', url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="keywords" content="HVAC tips Niagara, furnace advice, air conditioner guide, ductless mini split, water heater replacement, boiler guide, duct cleaning Niagara" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical }),
      jsonLd(blogIndexSchema(canonical)),
      jsonLd(crumbs),
    ],
  }
}

// The blog index as a Blog entity holding an ordered list of its posts, so
// crawlers can discover every article from this one page even before they
// follow the links.
function blogIndexSchema(canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'FixAir Blog',
    description:
      'Residential heating and cooling advice for Niagara homeowners from Tom Guitard, a licensed HVAC technician with 25+ years of experience.',
    url: canonical,
    inLanguage: 'en-CA',
    publisher: { '@type': 'HVACBusiness', name: BUSINESS.name, url: BUSINESS.url },
    blogPost: blogPosts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.metaDescription,
      url: BUSINESS.url + `/blog/${p.slug}/`,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      image: BUSINESS.url + p.image,
      author: { '@type': 'Person', name: BUSINESS.founder },
    })),
  }
}

function headForBlogPost(route) {
  const p = route.data
  const canonical = canonicalFor(route)
  const title = p.metaTitle
  const description = p.metaDescription
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    datePublished: p.date,
    // Posts carry an optional `updated` date; without one the publish date is
    // the honest answer. Never stamp "today" here — a dateModified that moves
    // on every deploy is a false freshness signal.
    dateModified: p.updated || p.date,
    author: {
      '@type': 'Person',
      name: BUSINESS.founder,
      jobTitle: 'Licensed HVAC Technician',
      worksFor: { '@type': 'HVACBusiness', name: BUSINESS.name, url: BUSINESS.url },
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: { '@type': 'ImageObject', url: BUSINESS.logo },
    },
    image: {
      '@type': 'ImageObject',
      url: BUSINESS.url + p.image,
      width: 1280,
      height: 720,
    },
    articleSection: p.serviceName,
    inLanguage: 'en-CA',
    isPartOf: { '@type': 'Blog', name: 'FixAir Blog', url: BUSINESS.url + '/blog/' },
  }
  const crumbs = breadcrumb([
    { name: 'Home', url: BUSINESS.url + '/' },
    { name: 'Blog', url: BUSINESS.url + '/blog/' },
    { name: p.title, url: canonical },
  ])
  return {
    title,
    lines: [
      `<title>${esc(title)}</title>`,
      `<meta name="description" content="${esc(description)}" />`,
      `<meta name="robots" content="index, follow" />`,
      `<link rel="canonical" href="${esc(canonical)}" />`,
      ...ogAndTwitter({ title, description, canonical, image: BUSINESS.url + p.image, imageAlt: p.title, type: 'article' }),
      jsonLd(articleSchema),
      jsonLd(crumbs),
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
  else if (route.kind === 'city-service') built = headForCityService(route)
  else if (route.kind === 'faq') built = headForFaq(route)
  else if (route.kind === 'blog') built = headForBlog(route)
  else if (route.kind === 'blog-post') built = headForBlogPost(route)
  else if (route.kind === '404') built = headForNotFound()
  else built = headForHome(route)
  return built.lines.join('\n    ')
}
