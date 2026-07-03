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
  sameAs: [
    'https://www.facebook.com/fixairheatandcool',
    'https://www.instagram.com/fixairheatandcool',
  ],
  aggregateRating: { ratingValue: '5', reviewCount: '27', bestRating: '5' },
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

// Compact "provider" reference to the business, for Service schema on subpages.
export const PROVIDER = {
  '@type': 'HVACBusiness',
  name: BUSINESS.name,
  telephone: BUSINESS.phoneE164,
  url: BUSINESS.url,
  areaServed: NIAGARA_AREA_SERVED,
}
