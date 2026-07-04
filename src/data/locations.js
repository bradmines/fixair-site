// Per-city landing page content. Each entry drives a page at
// /service-areas/<slug>/ plus its <head>, structured data and internal links.
// Copy is unique per city to avoid thin/duplicate "doorway" pages.
export const locations = [
  {
    slug: 'welland',
    name: 'Welland',
    tagline: 'Home base',
    metaTitle: 'HVAC in Welland | Furnace, AC & Heating | FixAir',
    metaDescription:
      "FixAir is Welland's residential HVAC specialist, handling furnace, AC, ductless and water heater service from Tom, a local tech with 25+ years. Call 905-732-2791.",
    h1: 'Residential HVAC Services in Welland',
    intro:
      'Welland is home base for FixAir. Tom lives and works right here, providing furnace, air conditioning, ductless and water heater service to Welland homeowners.',
    localDetail: [
      "As a Welland-based business, FixAir offers something the big regional outfits can't: a local specialist who's just minutes away and genuinely invested in the community. When you call, you talk to Tom, the same person who shows up, does the work and stands behind it.",
      'From the older homes near the canal to newer builds across the city, Tom has worked on Welland’s full range of heating and cooling systems for over 25 years. Whatever your home needs, you’ll get honest advice and first-rate workmanship.',
      "From the century homes along the old Welland Canal and Chippawa Park to the newer subdivisions in the north end and out toward Dain City and Cooks Mills, Tom tailors his furnace, AC and ductless recommendations to each home's age and layout.",
    ],
    neighbourhoods: ['Dain City', 'Cooks Mills', 'Chippawa Park', 'North Welland', 'Downtown Welland'],
    faqs: [
      {
        q: 'Are you actually based in Welland?',
        a: 'Yes. Welland is home base for FixAir, which means fast response times and a contractor who knows the area well.',
      },
      {
        q: 'What HVAC services do you offer in Welland?',
        a: 'Furnaces, air conditioners, ductless mini-splits, hot water heaters, boilers and duct cleaning, all for residential homes.',
      },
      {
        q: 'Do you offer emergency service in Welland?',
        a: "Yes. Call Tom at 905-732-2791 and he'll get to you as quickly as possible.",
      },
    ],
  },
  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    tagline: 'Regional hub',
    metaTitle: 'HVAC in St. Catharines | Furnace & AC Service | FixAir',
    metaDescription:
      'Residential furnace, AC and heating service for St. Catharines homes. Trusted, licensed HVAC from Tom with 25+ years experience. Call 905-732-2791.',
    h1: 'Residential HVAC Services in St. Catharines',
    intro:
      'St. Catharines homeowners trust FixAir for honest, expert HVAC service. Tom handles furnace, air conditioning, ductless and water heater work across the city.',
    localDetail: [
      'As the largest city in Niagara, St. Catharines has everything from century homes in the old downtown to modern subdivisions, each with its own heating and cooling needs. Tom brings 25+ years of residential experience to match the right solution to your home.',
      "You won't get a rotating cast of technicians or a hard sell. With FixAir, it's Tom on the job every time: assessing honestly, working cleanly, and making sure your home is comfortable year-round.",
      "Whether you're in a heritage home in Port Dalhousie, a post-war house in Merritton or the Facer district, or a newer place in Grantham or Glenridge near Brock, Tom matches the right solution to your home. Many older St. Catharines homes lack ductwork, which makes them ideal candidates for the ductless systems he specializes in.",
    ],
    neighbourhoods: ['Port Dalhousie', 'Merritton', 'Grantham', 'Western Hill', 'Glenridge', 'Facer District'],
    faqs: [
      {
        q: 'Do you serve all of St. Catharines?',
        a: 'Yes. Tom serves homeowners throughout St. Catharines and the surrounding Niagara region.',
      },
      {
        q: 'Can you install both a furnace and AC?',
        a: 'Absolutely. Many St. Catharines homeowners replace both together, which Tom can quote as a matched system.',
      },
      {
        q: 'How quickly can you come out?',
        a: 'Tom aims to respond quickly, often the same day for urgent issues. Call 905-732-2791.',
      },
    ],
  },
  {
    slug: 'niagara-falls',
    name: 'Niagara Falls',
    tagline: 'Tourist city & suburbs',
    metaTitle: 'HVAC in Niagara Falls | Furnace, AC & Heating | FixAir',
    metaDescription:
      'Residential HVAC service in Niagara Falls: furnace, air conditioning, ductless and more from a licensed local tech with 25+ years. Call 905-732-2791.',
    h1: 'Residential HVAC Services in Niagara Falls',
    intro:
      'From the tourist district to the quiet residential neighbourhoods beyond it, Tom keeps Niagara Falls homes comfortable with expert furnace, AC and heating service.',
    localDetail: [
      "Niagara Falls homeowners deal with the same hot summers and cold winters as the rest of the region, and they deserve HVAC service that's reliable and honest. Tom has spent 25+ years installing and repairing residential systems across the Falls and surrounding suburbs.",
      "Whether you're upgrading to a high-efficiency furnace, adding central air, or troubleshooting a system that isn't keeping up, you'll get a straight answer and clean, careful work, with no upselling and no runaround.",
      "From the established streets of Stamford and Drummondville to riverside Chippawa and the neighbourhoods around Lundy's Lane and Mount Carmel, Tom keeps Niagara Falls homes comfortable year-round. Many older Falls homes benefit from a furnace upgrade or added central air, and he'll tell you honestly what yours needs.",
    ],
    neighbourhoods: ['Chippawa', 'Stamford', 'Drummondville', 'Mount Carmel', "Lundy's Lane area"],
    faqs: [
      {
        q: 'Do you cover all of Niagara Falls?',
        a: 'Yes. Tom serves residential customers throughout Niagara Falls and nearby communities.',
      },
      {
        q: 'What kind of heating systems do you work on?',
        a: 'Furnaces, boilers and ductless heat pumps, plus air conditioning, water heaters and duct cleaning.',
      },
      {
        q: 'Is FixAir licensed and insured?',
        a: 'Yes, FixAir is fully licensed and insured in Ontario, with 25+ years of residential experience.',
      },
    ],
  },
  {
    slug: 'thorold',
    name: 'Thorold',
    tagline: 'Just south of the Falls',
    metaTitle: 'HVAC in Thorold | Furnace, AC & Heating | FixAir',
    metaDescription:
      'Residential furnace, AC and heating service for Thorold homes. Local, licensed HVAC from Tom with 25+ years experience. Call 905-732-2791.',
    h1: 'Residential HVAC Services in Thorold',
    intro:
      'Just south of the Falls, Thorold homeowners count on FixAir for dependable furnace, air conditioning and heating service from a local specialist.',
    localDetail: [
      'Thorold blends established neighbourhoods with newer development along the escarpment, and Tom has worked on homes across the city for over 25 years. Being nearby means quick response and a contractor who understands local homes.',
      'With FixAir you get a residential-only specialist who does the work himself, giving you honest recommendations, tidy installations, and systems that keep your home comfortable through every season.',
      "Tom serves homeowners across Thorold, from Confederation Heights and the downtown core near the canal locks to the smaller communities of Port Robinson, Allanburg and Beaverdams. Homes near the escarpment and canal come in every era, and he fits the right system to each one.",
    ],
    neighbourhoods: ['Port Robinson', 'Allanburg', 'Beaverdams', 'Confederation Heights', 'Downtown Thorold'],
    faqs: [
      {
        q: 'Do you service Thorold and surrounding areas?',
        a: 'Yes. Tom serves Thorold and the wider Niagara region, including Welland, St. Catharines and Niagara Falls.',
      },
      {
        q: 'Can you help with a no-heat or no-cooling emergency?',
        a: "Yes. Call Tom at 905-732-2791 and he'll respond as quickly as he can.",
      },
      {
        q: 'Do you only work on homes?',
        a: 'Yes. FixAir is a residential-only company, which means deeper expertise in home heating and cooling.',
      },
    ],
  },
  {
    slug: 'fonthill',
    name: 'Fonthill',
    tagline: 'Pelham community',
    metaTitle: 'HVAC in Fonthill (Pelham) | Furnace & AC | FixAir',
    metaDescription:
      'Residential HVAC service in Fonthill and Pelham: furnace, AC, ductless and water heaters from a licensed local tech with 25+ years. Call 905-732-2791.',
    h1: 'Residential HVAC Services in Fonthill',
    intro:
      'Tom provides trusted furnace, air conditioning and heating service to homeowners in Fonthill and the wider Pelham community.',
    localDetail: [
      "Fonthill's mix of established and executive homes means a wide range of heating and cooling systems, and Tom has the residential experience to service and install them all. As a local contractor, he's close by and easy to reach.",
      "You'll get the same person every time. Tom assesses your home honestly, installs cleanly, and stands behind the workmanship. No pressure, no upsell, just comfortable temperatures year-round.",
      "Serving Fonthill and the wider Town of Pelham, including Fenwick, Ridgeville and North Pelham, Tom works on everything from established village homes to larger properties on Fonthill's higher ground. Bigger homes here often call for multi-zone comfort, where his ductless and high-efficiency furnace experience pays off.",
    ],
    neighbourhoods: ['Fonthill village', 'Fenwick', 'Ridgeville', 'North Pelham'],
    faqs: [
      {
        q: 'Do you serve Fonthill and Pelham?',
        a: 'Yes. Tom serves Fonthill, Pelham and the surrounding Niagara region.',
      },
      {
        q: 'What services do you offer in Fonthill?',
        a: 'Furnaces, air conditioners, ductless mini-splits, hot water heaters, boilers and duct cleaning for residential homes.',
      },
      {
        q: 'Are quotes free and honest?',
        a: 'Yes. Tom gives up-front, no-pressure quotes and will tell you honestly whether a repair or replacement makes more sense.',
      },
    ],
  },
  {
    slug: 'port-colborne',
    name: 'Port Colborne',
    tagline: 'South Niagara',
    metaTitle: 'HVAC in Port Colborne | Furnace, AC & Heating | FixAir',
    metaDescription:
      'Residential furnace, AC and heating service in Port Colborne. Local, licensed HVAC from Tom with 25+ years experience. Call 905-732-2791.',
    h1: 'Residential HVAC Services in Port Colborne',
    intro:
      'In south Niagara, Port Colborne homeowners rely on FixAir for honest, expert furnace, air conditioning and heating service.',
    localDetail: [
      'Lakeside living in Port Colborne means homes work hard through humid summers and cold, windy winters. Tom brings 25+ years of residential HVAC experience to keep your system running efficiently in every season.',
      "As a residential-only specialist serving south Niagara, Tom offers something the big companies don't: personal, accountable service from the same technician every time, with honest advice and workmanship you can count on.",
      "From the Sugarloaf and West Side neighbourhoods to homes near the lake and out toward Sherkston, Tom understands what Port Colborne's lakeside climate does to a home. Humid summers and cold, windy winters put real demand on heating and cooling systems, so he sizes equipment to keep your home comfortable and efficient through both.",
    ],
    neighbourhoods: ['Sugarloaf', 'West Side', 'Sherkston', 'Downtown / West Street'],
    faqs: [
      {
        q: 'Do you travel to Port Colborne?',
        a: 'Yes. Tom serves Port Colborne and the surrounding south Niagara area.',
      },
      {
        q: 'What HVAC work do you do in Port Colborne?',
        a: 'Furnace, air conditioning, ductless, boiler, water heater and duct cleaning service for residential homes.',
      },
      {
        q: 'How do I get a quote?',
        a: "Call Tom at 905-732-2791 or use the contact form and he'll get back to you promptly with an honest quote.",
      },
    ],
  },
]
