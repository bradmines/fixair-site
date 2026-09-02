import { PHONE, PHONE_HREF, EMAIL } from '../constants'

// Single source of truth for the business's NAP + brand identity.
// Used by every page's structured data and by the head builder so the
// business name / phone / URL stay consistent across the whole site.
export const BUSINESS = {
  name: 'FixAir Heating and Air Conditioning',
  url: 'https://www.fixairheatandcool.ca',
  phone: PHONE,
  phoneHref: PHONE_HREF,
  phoneE164: '+19057322791',
  email: EMAIL,
  founder: 'Tom Guitard',
  logo: 'https://www.fixairheatandcool.ca/fixairlog.png',
  image: 'https://www.fixairheatandcool.ca/logoforcedairfurnace.jpg',
  // Canonical URL of the Google Business Profile listing. Decoded from the
  // place URL behind the review button in components/Testimonials.jsx: Google
  // encodes the listing there as 0x<mapsFeatureId>:0x<cid>, and 0x4f058f4f82b2bedc
  // is 5694114875537800924 in decimal. The ?cid= form is used rather than the
  // long place URL because the latter carries session/version params
  // (entry=ttu, g_ep=...) that go stale.
  gbpUrl: 'https://www.google.com/maps?cid=5694114875537800924',
  sameAs: [
    'https://www.facebook.com/fixairheatandcool',
    'https://www.instagram.com/fixairheatandcool',
    'https://www.google.com/maps?cid=5694114875537800924',
  ],
  // Welland city centroid. FixAir is a service-area business with no public
  // storefront, so this is deliberately the city rather than a street address —
  // it matches the Google Business Profile, which is also city-level.
  // TODO: confirm against the coordinates Google shows on the GBP listing.
  geo: { latitude: 42.9925, longitude: -79.2483 },
  // Radius in metres from the Welland base. 50 km reaches every city FixAir
  // actually serves (St. Catharines ~25 km, Niagara Falls ~25 km, Dunnville
  // ~35 km, Caledonia ~50 km) and stops short of the Ontario towns we were
  // being surfaced for — Campbellville and Lowville sit ~65-75 km out, and
  // Alliston, Stayner, Inverary, Rockland, Casselman and Noelville are far
  // beyond that. A radius is a containment signal, not just a claim.
  serviceRadiusMetres: 50000,
  // FixAir is a service-area business: Tom travels to the customer and has no
  // public storefront, so there is deliberately no streetAddress here. Google
  // accepts a city/region-level address for SABs, and inventing a street
  // address would conflict with the Google Business Profile listing.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Welland',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  // Quotes are free and job cost varies by equipment, so a range band is the
  // honest signal here rather than a fabricated figure.
  priceRange: '$$',
  // The cities FixAir serves, used for areaServed on the homepage schema.
  cities: [
    'St. Catharines',
    'Welland',
    'Thorold',
    'Fonthill',
    'Pelham',
    'Port Colborne',
    'Niagara Falls',
  ],
  region: 'Regional Municipality of Niagara',
}

// Reusable areaServed block covering the whole Niagara region.
export const NIAGARA_AREA_SERVED = {
  '@type': 'AdministrativeArea',
  name: BUSINESS.region,
  containedInPlace: {
    '@type': 'State',
    name: 'Ontario',
    containedInPlace: { '@type': 'Country', name: 'Canada' },
  },
}

// Point geometry for the business, reused by the schema builder.
export const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: BUSINESS.geo.latitude,
  longitude: BUSINESS.geo.longitude,
}

// Explicit circular service area centred on the Welland base. Paired with the
// named-region areaServed above: the AdministrativeArea says where we work,
// the GeoCircle bounds how far.
export const NIAGARA_SERVICE_CIRCLE = {
  '@type': 'GeoCircle',
  geoMidpoint: BUSINESS_GEO,
  geoRadius: String(BUSINESS.serviceRadiusMetres),
}

// Compact "provider" reference to the business, for Service schema on subpages.
export const PROVIDER = {
  '@type': 'HVACBusiness',
  name: BUSINESS.name,
  telephone: BUSINESS.phoneE164,
  url: BUSINESS.url,
  areaServed: NIAGARA_AREA_SERVED,
}
