// General, site-wide FAQ shown on the homepage (and emitted as FAQPage
// structured data). Page-specific FAQs live in services.js / locations.js.
export const generalFaqs = [
  {
    q: 'What areas do you serve?',
    a: 'FixAir serves homeowners across the Niagara region, including Welland, St. Catharines, Niagara Falls, Thorold, Fonthill (Pelham) and Port Colborne, plus surrounding areas. Not sure if you\'re in range? Call Tom at 905-732-2791 and he\'ll let you know right away.',
  },
  {
    q: 'Do you only work on homes?',
    a: 'Yes. FixAir is a residential-only HVAC company. Focusing solely on homes means deeper expertise and better results for your family, with no commercial jobs pulling us away.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. FixAir is fully licensed and insured in Ontario, with 25+ years of residential heating and cooling experience.',
  },
  {
    q: 'Who will actually do the work?',
    a: 'Tom Guitard, the owner and lead technician, does the work himself. You get the same experienced person for the quote, the install and any follow-up, not a rotating crew.',
  },
  {
    q: 'Do you offer emergency service?',
    a: "Yes. Heating and cooling problems don't wait for business hours. Regular hours are Monday to Friday, 8:00 AM to 5:00 PM, with 24/7 emergency service available. Just call 905-732-2791.",
  },
  {
    q: 'Is financing available?',
    a: 'Yes, financing is available on new system installations. Ask Tom about your options when you get your quote.',
  },
  {
    q: 'How much does a new furnace or AC cost?',
    a: "It depends on your home's size, the equipment you choose and the complexity of the install. Tom provides honest, up-front quotes with no pressure and no upselling, so you know exactly what you're paying for before any work begins.",
  },
  {
    q: 'How do I get a quote?',
    a: 'Call or text Tom at 905-732-2791, or fill out the contact form on this page. He\'ll get back to you promptly, usually the same day, to talk through what your home needs.',
  },
]

// Grouped, in-depth HVAC FAQ that powers the dedicated /faq/ page. Organized
// by topic for readability and SEO. The page flattens every answer into a
// single FAQPage schema block. Kept broader than generalFaqs so the page earns
// its own place rather than duplicating the homepage.
export const faqGroups = [
  {
    title: 'Heating: furnaces & boilers',
    faqs: [
      {
        q: 'How long does a furnace last?',
        a: 'A well-maintained gas furnace typically lasts 15 to 20 years. If yours is in that range and needing frequent repairs, or your heating bills keep climbing, it is usually worth planning a replacement before it fails on the coldest night of the year.',
      },
      {
        q: 'Should I repair or replace my furnace?',
        a: 'It comes down to age, repair cost and efficiency. As a rule of thumb, if a repair costs more than a third of a new unit and the furnace is over 15 years old, replacement is usually the better value. Tom will give you an honest assessment either way and never pushes a replacement you do not need.',
      },
      {
        q: 'What size furnace or boiler does my home need?',
        a: 'Proper sizing depends on your home\'s square footage, insulation, windows and layout, not just a rule of thumb. An oversized system short-cycles and wears out faster, while an undersized one struggles in a cold snap. Tom sizes every system to your specific home so it runs efficiently and evenly.',
      },
      {
        q: 'What is the benefit of a high-efficiency furnace?',
        a: 'High-efficiency furnaces convert more of the fuel you pay for into actual heat, which lowers your monthly bills and reduces waste. Over the life of the unit, the savings often offset a good part of the upfront cost.',
      },
      {
        q: 'Do you install and repair boilers and radiant heat?',
        a: 'Yes. Tom installs, replaces and repairs residential boilers and hydronic systems. Hot-water and radiant heat deliver steady, even warmth, and they need someone who understands these systems rather than a generalist learning on the job.',
      },
    ],
  },
  {
    title: 'Cooling & air quality',
    faqs: [
      {
        q: 'How long does a new air conditioner installation take?',
        a: 'Most residential central AC installations are completed in a single day. Tom confirms the timeline when he quotes the job so you know what to expect.',
      },
      {
        q: 'Why is my AC blowing warm air?',
        a: 'Warm air often comes from low refrigerant, a failing compressor, a dirty coil or an electrical fault. Some causes are quick fixes and others point to a bigger issue, so it is worth having it diagnosed promptly. Call Tom at 905-732-2791 and he will pinpoint the problem.',
      },
      {
        q: 'Can a ductless mini-split heat my home in winter?',
        a: 'Yes. Modern cold-climate mini-split heat pumps are designed to heat efficiently through Niagara winters and cool just as well in summer. They are ideal for homes without ductwork, additions, basements and rooms that are always too hot or too cold.',
      },
      {
        q: 'How often should I have my ducts cleaned?',
        a: 'For most homes, every few years is plenty, or sooner if you have had renovations, pets, or noticeable dust. Clean ductwork helps your system run efficiently and keeps the air in your home fresher.',
      },
    ],
  },
  {
    title: 'Maintenance & repairs',
    faqs: [
      {
        q: 'How often should I service my heating and cooling system?',
        a: 'A yearly tune-up is the best way to keep your system efficient and catch small problems before they become expensive breakdowns. Many homeowners have the furnace checked in the fall and the AC in the spring.',
      },
      {
        q: 'Do you offer emergency service?',
        a: 'Yes. Heating and cooling problems do not wait for business hours. Regular hours are Monday to Friday, 8:00 AM to 5:00 PM, with 24/7 emergency service available. Just call 905-732-2791.',
      },
      {
        q: 'How can I keep my system running well between visits?',
        a: 'Change or clean your filter regularly, keep the outdoor unit clear of leaves and debris, and keep supply and return vents unblocked. Simple habits like these go a long way toward efficiency and system life.',
      },
    ],
  },
  {
    title: 'Pricing, quotes & financing',
    faqs: [
      {
        q: 'How much does a new furnace or AC cost?',
        a: 'It depends on your home\'s size, the equipment you choose and the complexity of the install. Tom provides honest, up-front quotes with no pressure and no upselling, so you know exactly what you are paying for before any work begins.',
      },
      {
        q: 'Are your quotes really free?',
        a: 'Yes. Tom gives free, up-front quotes and will tell you honestly whether a repair or a replacement makes more sense for your situation.',
      },
      {
        q: 'Is financing available?',
        a: 'Yes, financing is available on new system installations through Financeit. You can apply for up to $100,000 and pre-qualify in seconds with no obligation. Ask Tom about your options when you get your quote.',
      },
    ],
  },
  {
    title: 'About FixAir & service area',
    faqs: [
      {
        q: 'Who will actually do the work?',
        a: 'Tom Guitard, the owner and lead technician, does the work himself. You get the same experienced person for the quote, the install and any follow-up, not a rotating crew.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. FixAir is fully licensed and insured in Ontario, with 25+ years of residential heating and cooling experience.',
      },
      {
        q: 'Do you only work on homes?',
        a: 'Yes. FixAir is a residential-only HVAC company. Focusing solely on homes means deeper expertise and better results for your family, with no commercial jobs pulling us away.',
      },
      {
        q: 'What areas do you serve?',
        a: 'FixAir serves homeowners across the Niagara region, including Welland, St. Catharines, Niagara Falls, Thorold, Fonthill (Pelham) and Port Colborne, plus surrounding areas. Not sure if you are in range? Call Tom at 905-732-2791 and he will let you know right away.',
      },
    ],
  },
]

// Every FAQ on the /faq/ page, flattened for the FAQPage structured data.
export const allFaqs = faqGroups.flatMap(g => g.faqs)
