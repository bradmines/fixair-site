// City + service landing pages, e.g. /service-areas/welland/furnace-repair/.
//
// These target the way people actually search locally ("furnace repair
// Welland") rather than the broad regional terms the /services/ pages cover.
// Deliberately a curated set, not a generated city x service matrix: every
// page below is written around something specific and true about that city's
// housing stock, so none of them is a thin rewrite of a sibling. Adding a new
// entry means writing real local copy for it, not filling a template.
const _cityServices = [
  // ---------------------------------------------------------------- Welland
  {
    citySlug: "welland",
    city: "Welland",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-wont-start.jpg",
    metaTitle: "Furnace Repair in Welland | Same-Day No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair in Welland from Tom at FixAir, based right here in the city. No-heat diagnostics, igniter and sensor failures, 24/7 emergency line. Call 905-732-2791.",
    h1: "Furnace Repair in Welland",
    intro:
      "Welland is home base for FixAir, so a no-heat call here usually means the shortest drive Tom makes all day. He repairs residential gas furnaces across the city, from the century homes along the canal to the newer subdivisions in the north end.",
    body: [
      "Being Welland-based changes what a furnace repair actually looks like. Tom is minutes away rather than an hour out, which matters most on the coldest nights of the year when a failed furnace can take a house down toward freezing before anyone arrives. He answers the phone himself, walks you through the quick checks, and comes out with the parts that fail most often already on the truck.",
      "Welland's older housing stock has its own pattern of problems. Homes around Chippawa Park and the old canal often had their original gravity systems converted decades ago, which leaves undersized return air and long duct runs that make a modern furnace work harder than it should. When one of those systems starts short-cycling or tripping on a limit switch, the furnace is usually fine and the airflow is the real fault. Tom looks for that before he sells you a part.",
      "The other half of the city tells a different story. The subdivisions out toward Dain City, Cooks Mills and North Welland were largely built with mid-efficiency furnaces in the 1990s and early 2000s, and that equipment is now well past its design life. Those calls tend to be failed inducer motors, cracked heat exchangers and control boards, and they come with a real decision about whether repair still makes sense.",
      "Either way you get a straight answer. If your furnace has years left, Tom fixes it and says so. If you are about to spend fifteen hundred dollars on a unit that will fail again next winter, he tells you that too, with an honest quote for replacement and no pressure to take it.",
    ],
    highlights: [
      "Home-base response times across Welland",
      "No-heat diagnostics and emergency repair",
      "Igniters, flame sensors, pressure switches, control boards",
      "Airflow and ductwork faults found, not just parts swapped",
      "Honest repair-vs-replace advice",
      "24/7 emergency line answered by Tom",
    ],
    faqs: [
      {
        q: "How fast can you get to a no-heat call in Welland?",
        a: "Welland is home base, so it is the fastest response area FixAir has. Tom will give you a real window on the phone rather than a vague promise, and on winter no-heat calls he prioritizes homes that are already getting cold.",
      },
      {
        q: "My furnace keeps shutting off after a few minutes. What is that?",
        a: "That is short-cycling, and in older Welland homes with converted ductwork it is very often an airflow problem rather than a furnace problem — a blocked filter, closed registers or undersized return air causing the furnace to overheat and trip its limit switch. It can also be a failing flame sensor or a blocked flue. Shut it off and call rather than repeatedly resetting it.",
      },
      {
        q: "Is it worth repairing a 20-year-old furnace?",
        a: "Sometimes. A cheap igniter or sensor on an otherwise sound unit is worth doing. A cracked heat exchanger, a failed control board or a second major repair in two winters usually is not. Tom gives you the actual numbers for both options and lets you decide.",
      },
      {
        q: "Do you repair furnaces you did not install?",
        a: "Yes. Tom services all the major residential brands regardless of who installed the system originally.",
      },
    ],
  },
  {
    citySlug: "welland",
    city: "Welland",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-not-cooling.jpg",
    metaTitle: "AC Repair in Welland | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in Welland from a local, residential-only HVAC specialist. Not-cooling diagnostics, capacitor and refrigerant faults. Call Tom at 905-732-2791.",
    h1: "Air Conditioner Repair in Welland",
    intro:
      "When the AC quits during a humid Welland July, you want someone close. Tom lives and works in the city, and he repairs residential central air and ductless systems for homeowners from downtown out to Dain City and Cooks Mills.",
    body: [
      "Welland summers are humid as well as hot, and that changes what a struggling air conditioner feels like. Plenty of the calls Tom gets are not really about temperature — the thermostat is holding its setpoint but the house feels clammy and heavy. That is usually a system that is oversized or running too short a cycle to pull moisture out of the air, and no amount of turning the dial down will fix it.",
      "The genuine no-cooling calls follow a predictable order. A failed run capacitor is the single most common fault and one of the cheapest to fix. After that come contactors, condenser fan motors, and a frozen indoor coil caused by a filthy filter choking the airflow. Low refrigerant is further down the list than most homeowners expect, and it is never the whole story — refrigerant does not get used up, so if a system is low there is a leak that needs finding rather than topping up every summer.",
      "Older Welland homes that had central air retrofitted onto converted gravity ductwork bring their own issue: the equipment is fine, but the duct system was never designed to move cooled air, so the upstairs bakes while the basement freezes. Tom will tell you honestly when the fix is a duct or airflow correction rather than a new condenser, and when a ductless head in the problem room is the cheaper and better answer.",
      "Being local means he can often get to a no-cooling call the same day, which matters when there is an infant, an older adult, or someone with a respiratory condition in the house.",
    ],
    highlights: [
      "Same-city response for no-cooling calls",
      "Capacitors, contactors, fan motors, control faults",
      "Proper leak diagnosis instead of annual refrigerant top-ups",
      "Humidity and short-cycling problems addressed",
      "Frozen coil and airflow troubleshooting",
      "Central air and ductless mini-splits",
    ],
    faqs: [
      {
        q: "My AC runs constantly but the house is still humid. Why?",
        a: "In Welland's humid summers this is usually a sizing or cycle-length problem rather than a broken part. An oversized unit cools the air to the thermostat setpoint fast and shuts off before it has run long enough to condense much moisture out. Tom can confirm whether that is what is happening and what the practical fix is.",
      },
      {
        q: "The outdoor unit is running but no cold air is coming in. What is wrong?",
        a: "Most often a failed run capacitor, a seized condenser fan motor, or an indoor coil that has frozen solid because of a blocked filter or a failing blower. Turn the system off, set the fan to on so the coil can thaw, and call — running it frozen risks the compressor.",
      },
      {
        q: "Do I just need more refrigerant?",
        a: "Refrigerant is not consumed, so a system that is low has a leak. Topping it up without finding the leak means paying for the same repair every summer and venting refrigerant in between. Tom finds and fixes the leak, or tells you plainly when the unit is not worth it.",
      },
      {
        q: "Can you work on ductless mini-splits too?",
        a: "Yes. Ductless systems are one of Tom's specialties, and he services and repairs them alongside conventional central air.",
      },
    ],
  },
  // -------------------------------------------------------- St. Catharines
  {
    citySlug: "st-catharines",
    city: "St. Catharines",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-replacing.jpg",
    metaTitle: "Furnace Repair in St. Catharines | No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair for St. Catharines homes, from century houses in Port Dalhousie to newer builds near Brock. Licensed tech, 25+ years. Call 905-732-2791.",
    h1: "Furnace Repair in St. Catharines",
    intro:
      "St. Catharines has the widest range of housing in Niagara, and furnace faults here vary just as much. Tom repairs residential gas furnaces across the city, from heritage homes in Port Dalhousie to the newer subdivisions around Brock.",
    body: [
      "A furnace repair in a 1910 house in Port Dalhousie and a furnace repair in a 2015 build in Glenridge are barely the same job. The heritage and post-war stock through Port Dalhousie, Merritton and the Facer district tends to have had heating systems layered in over a century — gravity ducts converted to forced air, chimneys relined or abandoned, returns that were never sized for the airflow a modern furnace expects. Those homes throw limit-switch trips, short-cycling and overheating complaints that look like furnace failures and are really airflow failures.",
      "Newer high-efficiency condensing furnaces in Grantham, Glenridge and the north end fail differently. They are sealed, they vent through PVC out a sidewall, and they produce acidic condensate that has to drain. A large share of the no-heat calls Tom gets from these homes come down to a blocked condensate drain or trap backing up into a pressure switch, or an intake and exhaust termination that has drifted shut with snow and ice. Those are inexpensive fixes when correctly diagnosed and expensive ones when a homeowner is sold a control board they did not need.",
      "St. Catharines also has a lot of homes with no usable ductwork at all, which is why Tom's ductless work matters here. When a furnace in a no-duct or partially-ducted house finally dies, the repair conversation often turns into a genuinely better option than replacing like for like, and he will lay out both honestly rather than quoting only the thing he would rather sell.",
      "St. Catharines is a longer drive from Welland than Tom's closest service areas, so he gives you a realistic arrival window on the phone instead of an optimistic one. Emergency no-heat calls still get treated as emergencies.",
    ],
    highlights: [
      "Heritage, post-war and new-build furnace experience",
      "Condensate drain and pressure switch diagnostics",
      "Airflow and converted-ductwork faults identified",
      "Sidewall vent and intake blockage checks",
      "Honest repair-vs-replace and ductless options",
      "24/7 emergency no-heat line",
    ],
    faqs: [
      {
        q: "My newer furnace shuts down and shows an error, then restarts later. Why?",
        a: "On high-efficiency condensing furnaces common in Grantham and Glenridge, that pattern very often means a blocked condensate drain or trap. Water backs up, a pressure switch opens, the furnace locks out, then resets once it drains enough. It is usually a straightforward fix, but it will keep recurring until the drain is properly cleared.",
      },
      {
        q: "Why does my old Port Dalhousie house have cold rooms even when the furnace runs?",
        a: "Century homes here often run a modern furnace through ductwork that was converted from a gravity system, with long runs and undersized returns. The furnace can be working perfectly while the distribution is the real problem. Tom looks at the whole system so you are not replacing equipment that was never at fault.",
      },
      {
        q: "Do you service St. Catharines even though you are based in Welland?",
        a: "Yes, St. Catharines is a core service area. The drive is longer than Welland or Thorold, so Tom gives you an honest arrival window rather than a promise he cannot keep.",
      },
      {
        q: "My house has no ductwork. What are my options if the heating fails?",
        a: "Quite a few older St. Catharines homes are in exactly this position, and they are strong candidates for ductless heating and cooling. Tom specializes in those systems and will compare them against conventional options with real numbers for your home.",
      },
    ],
  },
  {
    citySlug: "st-catharines",
    city: "St. Catharines",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-replacing.jpg",
    metaTitle: "AC Repair in St. Catharines | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in St. Catharines, including no-duct heritage homes that suit ductless systems. Residential-only specialist. Call Tom at 905-732-2791.",
    h1: "Air Conditioner Repair in St. Catharines",
    intro:
      "St. Catharines cooling problems split cleanly between two kinds of house: newer builds with central air that has failed, and older homes that never had proper ductwork to begin with. Tom handles both, across Port Dalhousie, Merritton, Grantham and Glenridge.",
    body: [
      "If you have conventional central air in Grantham, Glenridge or the north end and it has stopped cooling, the diagnosis usually runs through a short list: a failed run capacitor, a stuck contactor, a dead condenser fan motor, or an indoor coil frozen because the filter was left too long. Tom carries those parts, so most of these calls are finished in one visit.",
      "The older parts of the city are a different conversation. A lot of the heritage stock in Port Dalhousie and the post-war housing through Merritton and the Facer district has no ductwork suited to cooling, or none at all. Over the years many of these homes ended up with window units, or with central air forced through converted gravity ducts that were never designed to carry cooled air. The result is the familiar St. Catharines complaint: a main floor that is fine and second-floor bedrooms nobody can sleep in.",
      "In those houses, repeatedly repairing a struggling central system is often throwing money at the wrong problem. Ductless mini-splits are genuinely the right answer for a lot of this housing stock, and they are one of Tom's specialties — a head in the two bedrooms that never cool usually solves more than another repair to the central unit would. He will still fix what you have if fixing it makes sense, and he will say so if it does not.",
      "Lake-influenced humidity near the north end and Port Dalhousie also means a system that holds temperature can still leave a house feeling damp. That is a cycle-length and sizing issue rather than a broken part, and it is worth diagnosing properly instead of buying a bigger unit that will make it worse.",
    ],
    highlights: [
      "Central air and ductless repair across the city",
      "Capacitors, contactors, fan motors, frozen coils",
      "Second-floor and no-duct cooling problems solved",
      "Ductless mini-split specialist",
      "Humidity and short-cycling diagnosis",
      "Straight answers on repair versus replace",
    ],
    faqs: [
      {
        q: "My upstairs bedrooms never cool down. Is my AC broken?",
        a: "Often not. In older St. Catharines homes with converted or partial ductwork, the equipment can be working correctly while the duct system simply cannot move cooled air to the second floor. Tom diagnoses which it is, and in many of these houses a ductless head in the problem rooms is cheaper and far more effective than upsizing the central system.",
      },
      {
        q: "Would a bigger air conditioner fix a house that feels humid?",
        a: "Usually the opposite. A larger unit reaches the thermostat setpoint faster and runs shorter cycles, which removes less moisture and leaves the house feeling clammier. Correct sizing and cycle length matter more than raw capacity, especially near the lake.",
      },
      {
        q: "Are ductless systems worth it in a century home?",
        a: "For a lot of the older housing in Port Dalhousie and Merritton, yes. They avoid tearing up a heritage home to add ductwork, they cool room by room, and they provide efficient heating as well. Tom will give you real numbers before you commit.",
      },
      {
        q: "How quickly can you get to St. Catharines?",
        a: "It is a core service area, though a longer drive than Welland or Thorold. Tom gives you an honest window on the phone, and urgent no-cooling calls involving infants, older adults or anyone with a respiratory condition get priority.",
      },
    ],
  },
  // ----------------------------------------------------------- Niagara Falls
  {
    citySlug: "niagara-falls",
    city: "Niagara Falls",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-wont-start.jpg",
    metaTitle: "Furnace Repair in Niagara Falls | No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair for Niagara Falls homes in Stamford, Drummondville, Chippawa and Mount Carmel. Licensed residential tech, 24/7 emergency. Call 905-732-2791.",
    h1: "Furnace Repair in Niagara Falls",
    intro:
      "Most of the residential housing in Niagara Falls sits well away from the tourist strip, in established neighbourhoods where the furnaces are getting old. Tom repairs residential gas furnaces across Stamford, Drummondville, Chippawa, Mount Carmel and the Lundy's Lane area.",
    body: [
      "The bulk of Niagara Falls housing went up between the 1950s and the 1970s, and that shapes almost every furnace call Tom takes here. Many of these homes are on their second furnace, installed sometime in the 1990s or early 2000s, running through original ductwork that was sized for a very different appliance. When a mid-efficiency unit of that vintage fails, it fails in familiar ways: inducer motors, roll-out and limit switches, gas valves, and eventually a cracked heat exchanger that ends the conversation.",
      "A cracked heat exchanger is the one repair Tom will not talk you into working around. It is a combustion safety issue, not an efficiency inconvenience, and the honest answer is replacement. He will show you what he found rather than just telling you, because that is a large amount of money to spend on someone's word.",
      "Riverside Chippawa has its own quirk. Homes closer to the river run damper, and damp basements are hard on furnaces — corroded burners and heat exchangers, rust at the base of the cabinet, and condensate that never quite drains right. Those systems age faster than their years suggest, and it is worth knowing that before you sink a major repair into one.",
      "Niagara Falls is a longer run from Welland than Tom's closest areas, so he gives you a realistic window. No-heat calls in a cold snap still get treated as urgent, and the 24/7 line is answered by Tom rather than a dispatcher.",
    ],
    highlights: [
      "Experience with 1950s-70s Falls housing stock",
      "Mid-efficiency furnace diagnostics and repair",
      "Heat exchanger inspection shown, not just reported",
      "Damp-basement corrosion assessment in Chippawa",
      "Original-ductwork airflow problems identified",
      "24/7 emergency no-heat line",
    ],
    faqs: [
      {
        q: "How do I know if my heat exchanger is cracked?",
        a: "Warning signs include a furnace that trips its roll-out switch, soot or scorching around the burners, an unusual smell when it runs, or a flame that shifts when the blower kicks in. It needs to be inspected properly rather than guessed at, and if Tom finds a crack he will show you the evidence before recommending replacement.",
      },
      {
        q: "My furnace is from the late 1990s. Should I repair or replace it?",
        a: "A lot of Falls homes are in exactly this spot. A single inexpensive part on an otherwise sound unit is usually worth doing. A major component failure, or a second significant repair in a couple of winters, generally is not. Tom quotes both honestly so the choice is yours.",
      },
      {
        q: "Does a damp basement really affect my furnace?",
        a: "Yes, particularly in riverside areas like Chippawa. Persistent damp accelerates corrosion of burners, the heat exchanger and the cabinet itself, so a furnace in a wet basement often reaches the end of its usable life earlier than the same unit would elsewhere.",
      },
      {
        q: "Do you cover Niagara Falls for emergency calls?",
        a: "Yes, 24/7. It is a longer drive than Welland or Thorold, so Tom gives you an honest arrival window on the phone rather than an optimistic one.",
      },
    ],
  },
  {
    citySlug: "niagara-falls",
    city: "Niagara Falls",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-repair-niagara-falls.jpg",
    metaTitle: "AC Repair in Niagara Falls | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in Niagara Falls — Stamford, Drummondville, Chippawa and Lundy's Lane. Residential-only specialist, 25+ years. Call 905-732-2791.",
    h1: "Air Conditioner Repair in Niagara Falls",
    intro:
      "A lot of Niagara Falls homes had central air added years after they were built, and that history is behind most of the cooling complaints Tom sees here. He repairs central air and ductless systems across Stamford, Drummondville, Chippawa and the Lundy's Lane area.",
    body: [
      "When central air gets retrofitted into a 1960s house, the condenser outside is new but the ductwork inside is not. Heating ducts are sized and routed for warm air rising; cooling needs more airflow and better returns. The predictable result across the Falls is a cool basement and main floor with second-floor bedrooms that stay uncomfortable through July, and homeowners who assume the air conditioner is failing when the distribution is the actual limit.",
      "The straightforward mechanical failures are the same ones Tom sees everywhere, and he carries the parts for them: run capacitors first by a wide margin, then contactors, condenser fan motors, and indoor coils frozen solid by a neglected filter. Systems that sat unused through a couple of mild summers also tend to fail on start-up in the first real heatwave, which is why the busiest week of the season is always the first hot one.",
      "Older retrofitted condensers in the Falls are frequently at an age where the refrigerant question comes up. Systems still running R-22 cannot simply be topped up — the refrigerant has been phased out, what remains is expensive, and a leaking R-22 unit is usually money better spent on replacement. Tom will tell you which refrigerant your system uses and what that means for the repair before you commit to anything.",
      "Chippawa's proximity to the river adds humidity to the mix, so some homes there hold temperature fine but still feel heavy. That is a cycle-length and sizing issue rather than a fault, and worth diagnosing properly.",
    ],
    highlights: [
      "Retrofitted central air troubleshooting",
      "Second-floor cooling problems diagnosed properly",
      "Capacitors, contactors, fan motors, frozen coils",
      "R-22 systems assessed honestly before you spend",
      "Humidity and short-cycling issues addressed",
      "Central air and ductless mini-splits",
    ],
    faqs: [
      {
        q: "Why is my upstairs so much hotter than the rest of the house?",
        a: "In Falls homes where central air was added to existing heating ductwork, the ducts often cannot move enough cooled air to the second floor no matter how well the equipment works. Tom identifies whether it is an equipment fault or a distribution limit, and in many cases a ductless head in the worst bedroom beats any further central-system spending.",
      },
      {
        q: "My AC uses R-22. Can it still be repaired?",
        a: "Sometimes, but it is worth knowing the facts first. R-22 has been phased out, remaining supply is costly, and a leaking R-22 system is often not economical to keep patching. Tom will confirm what your system uses and give you honest numbers for repair against replacement.",
      },
      {
        q: "The AC worked last summer and now it will not start. What changed?",
        a: "Units that sit idle over winter commonly fail on the first real start-up of the season, most often a run capacitor that lost capacity while sitting. It is one of the cheaper repairs, and it is why the first heatwave of the year is always the busiest stretch.",
      },
      {
        q: "Do you service Niagara Falls?",
        a: "Yes, it is a regular service area. The drive is longer than Welland or Thorold, so Tom gives you a realistic window, and urgent no-cooling calls during a heatwave get prioritized.",
      },
    ],
  },
  // ------------------------------------------------------------------ Thorold
  {
    citySlug: "thorold",
    city: "Thorold",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-replacing.jpg",
    metaTitle: "Furnace Repair in Thorold | Fast No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair in Thorold, Confederation Heights, Port Robinson, Allanburg and Beaverdams. Close to home base, 24/7 emergency. Call Tom at 905-732-2791.",
    h1: "Furnace Repair in Thorold",
    intro:
      "Thorold is one of the closest cities to FixAir's Welland home base, which makes it one of the fastest areas Tom can reach on a winter no-heat call. He repairs residential furnaces across Confederation Heights, downtown Thorold, and out to Port Robinson, Allanburg and Beaverdams.",
    body: [
      "Thorold packs an unusual range of housing into a small area. The downtown core near the canal locks has old, tightly-spaced homes with heating systems that have been modified repeatedly over the decades. Confederation Heights and the newer development along the escarpment are a different era entirely, with high-efficiency condensing furnaces and sidewall venting. Then there are the smaller communities — Port Robinson, Allanburg, Beaverdams — where properties are more spread out and some homes are on propane rather than natural gas.",
      "That last point matters more than people expect. Propane furnaces are not just gas furnaces with a different fuel: the orifices, gas pressure and burner setup are specific, and a unit that was converted improperly runs badly and unsafely. Tom services propane systems as well as natural gas, and part of the diagnosis on rural Thorold calls is confirming the conversion was done correctly in the first place.",
      "The escarpment and canal corridor also mean wind exposure. On the higher, more open properties, sidewall intake and exhaust terminations on high-efficiency furnaces are prone to drifting shut in a blowing snowstorm, which locks the furnace out on a pressure switch. It reads as a serious failure and is often a five-minute clearing job — worth checking yourself before you call, and worth relocating properly if it keeps happening.",
      "Because Thorold is close by, Tom can usually get to urgent no-heat calls here quickly, and the 24/7 emergency line goes to him directly.",
    ],
    highlights: [
      "Fast response — minutes from Welland home base",
      "Natural gas and propane furnace service",
      "High-efficiency vent and intake blockage diagnosis",
      "Older canal-district heating system experience",
      "Improper propane conversions identified",
      "24/7 emergency no-heat line",
    ],
    faqs: [
      {
        q: "My furnace locked out during a snowstorm. Is it broken?",
        a: "On exposed properties near the escarpment this is very often a blown-shut intake or exhaust termination on the outside wall. The furnace detects it cannot vent safely and shuts down on purpose. Clear the snow away from both pipes and it will usually restart. If it keeps happening, the terminations should be relocated or extended.",
      },
      {
        q: "Do you service propane furnaces in Port Robinson and Allanburg?",
        a: "Yes. Propane systems are common on properties outside the gas service area, and Tom services them as well as natural gas. He also checks that any past propane conversion was done correctly, since an improper one runs poorly and unsafely.",
      },
      {
        q: "How fast can you reach Thorold?",
        a: "Thorold is one of Tom's closest service areas, so it gets among the quickest response times, particularly on winter no-heat calls where the house is already losing temperature.",
      },
      {
        q: "Can you work on an old system in a downtown Thorold home?",
        a: "Yes. Homes near the canal locks often have heating systems that have been altered several times over the years. Tom has 25+ years with exactly that kind of layered, non-standard setup, and he diagnoses the whole system rather than guessing at parts.",
      },
    ],
  },
  {
    citySlug: "thorold",
    city: "Thorold",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-not-cooling.jpg",
    metaTitle: "AC Repair in Thorold | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in Thorold, Confederation Heights, Port Robinson and Beaverdams. Local residential-only specialist. Call Tom at 905-732-2791.",
    h1: "Air Conditioner Repair in Thorold",
    intro:
      "Thorold sits close enough to Welland that Tom can often reach a no-cooling call the same day. He repairs central air and ductless systems from Confederation Heights and the downtown core out to Port Robinson, Allanburg and Beaverdams.",
    body: [
      "The newer housing along the escarpment in Confederation Heights generally has properly-sized central air, so faults there tend to be genuine component failures: a run capacitor that has lost capacity, a stuck contactor, a condenser fan motor that has seized, or a coil frozen because the filter went a season too long. Tom carries these parts, and most of these calls finish in one visit.",
      "Downtown Thorold and the older streets near the canal are a harder problem. Homes there are tightly spaced and often have limited or converted ductwork, which means retrofitted central air struggles to reach upper floors. Tight lot lines also create a specific and commonly missed fault: a condenser wedged into a narrow side yard or against a fence cannot reject heat properly, so it runs hot, loses efficiency and eventually fails early. Clearing the airflow around the unit sometimes solves a cooling complaint outright.",
      "Out toward Port Robinson, Allanburg and Beaverdams the properties open up and vegetation becomes the issue instead — condensers packed with grass clippings, cottonwood seed and leaf debris. A blocked outdoor coil looks exactly like a failing system from inside the house, and a proper cleaning restores capacity that homeowners assume is gone for good.",
      "Ductless systems are a strong fit for the older Thorold housing where adding ductwork is impractical, and they are one of Tom's specialties for both repairs and new installs.",
    ],
    highlights: [
      "Quick response from nearby Welland",
      "Capacitors, contactors, fan motors, frozen coils",
      "Condenser airflow and clearance problems found",
      "Blocked outdoor coil cleaning and capacity recovery",
      "Upper-floor cooling issues in older homes",
      "Ductless mini-split repair and installation",
    ],
    faqs: [
      {
        q: "Does it matter that my outdoor unit is in a tight side yard?",
        a: "It matters a lot, and it is one of the most commonly missed causes of poor cooling in older Thorold neighbourhoods. A condenser boxed in by fences or walls recirculates its own hot air, loses capacity and wears out early. It needs clear space around it and above it to work properly.",
      },
      {
        q: "How often does the outdoor unit need cleaning?",
        a: "Once a season is reasonable, and more often on rural properties near Beaverdams or Allanburg where grass clippings and cottonwood seed pack into the coil. A blocked coil feels identical to a dying air conditioner from inside the house, and cleaning it frequently restores most of the lost performance.",
      },
      {
        q: "My AC will not start at all this year. What is the likely cause?",
        a: "The most common single fault by a wide margin is a failed run capacitor, especially on the first hot day after the system has sat idle all winter. It is also one of the least expensive repairs, so it is worth having it diagnosed rather than assuming the worst.",
      },
      {
        q: "Would ductless make sense for my older Thorold home?",
        a: "Often yes, especially where there is no practical route for new ductwork. Ductless heads cool the specific rooms that need it and provide efficient heating too. Tom specializes in these systems and will compare real numbers against your alternatives.",
      },
    ],
  },
  // ----------------------------------------------------------------- Fonthill
  {
    citySlug: "fonthill",
    city: "Fonthill",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-replacing.jpg",
    metaTitle: "Furnace Repair in Fonthill & Pelham | No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair in Fonthill, Fenwick, Ridgeville and North Pelham. Two-stage and zoned system experience, 24/7 emergency. Call Tom at 905-732-2791.",
    h1: "Furnace Repair in Fonthill & Pelham",
    intro:
      "Fonthill has a lot of larger homes with more complicated heating systems than the regional average — two-stage furnaces, zoning, and multiple thermostats. Tom repairs residential furnaces across Fonthill village, Fenwick, Ridgeville and North Pelham.",
    body: [
      "The executive housing on Fonthill's higher ground brings a class of problem that simpler homes do not have. Two-stage and modulating furnaces run variable-speed blowers and communicate with matched thermostats, so a fault can present as a comfort complaint rather than a breakdown — a furnace that never leaves low fire, or a blower that will not ramp up, or one zone that never satisfies while the rest of the house is fine. Diagnosing these means understanding the control logic, not just testing components in isolation.",
      "Zoned systems are the other Fonthill specialty. When a house is split into zones with motorized dampers and a zone panel, a failed damper motor or a dead zone board looks exactly like a furnace problem from inside the affected rooms. Tom checks the zoning before condemning the furnace, which has saved more than one Pelham homeowner from replacing perfectly good equipment.",
      "Elevation and exposure matter here too. Fonthill sits on some of the highest ground in Niagara, and the wind loading on exposed properties is real. High-efficiency furnaces vented out a sidewall on the windward side can be pushed into pressure-switch lockouts in a storm, and terminations drift shut with snow more readily than they would in a sheltered subdivision.",
      "Out in Fenwick, Ridgeville and North Pelham the properties are more rural and some are on propane rather than natural gas. Tom services both, and confirms any past propane conversion was done to spec.",
    ],
    highlights: [
      "Two-stage and modulating furnace diagnostics",
      "Zoned system and damper troubleshooting",
      "Communicating thermostat and control-logic faults",
      "Natural gas and propane service",
      "Wind-exposed venting problems on high ground",
      "24/7 emergency no-heat line",
    ],
    faqs: [
      {
        q: "One zone of my house never gets warm but the furnace runs fine. Why?",
        a: "In zoned Fonthill homes this usually points at the zoning rather than the furnace — a failed damper motor stuck closed, a dead zone panel, or a thermostat that is not calling correctly. Tom checks the zone system before recommending anything to the furnace itself, because replacing good equipment will not fix a stuck damper.",
      },
      {
        q: "My two-stage furnace never seems to run on high. Is that a fault?",
        a: "It can be normal — two-stage furnaces are designed to spend most of their time on low fire, which is more efficient and more comfortable. But if the house genuinely is not keeping up on the coldest days, it can indicate a staging or control-communication fault. It needs proper diagnosis rather than guesswork.",
      },
      {
        q: "Do you service propane furnaces in Fenwick and Ridgeville?",
        a: "Yes. Properties outside the natural gas service area often run propane, and Tom services those systems as well as natural gas, including checking that earlier conversions were carried out correctly.",
      },
      {
        q: "Do you cover the whole Town of Pelham?",
        a: "Yes — Fonthill village, Fenwick, Ridgeville and North Pelham. Pelham is close to Welland home base, so response times here are among the quickest FixAir offers.",
      },
    ],
  },
  {
    citySlug: "fonthill",
    city: "Fonthill",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-replacing.jpg",
    metaTitle: "AC Repair in Fonthill & Pelham | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in Fonthill, Fenwick and Ridgeville. Multi-zone and large-home cooling problems solved by a residential specialist. Call 905-732-2791.",
    h1: "Air Conditioner Repair in Fonthill & Pelham",
    intro:
      "Cooling a large Fonthill home evenly is harder than cooling a small one, and most of the calls Tom takes here are about balance rather than total failure. He repairs central air and ductless systems across Fonthill, Fenwick, Ridgeville and North Pelham.",
    body: [
      "The bigger homes on Fonthill's higher ground share a pattern: a main floor that cools beautifully and a second floor, bonus room or finished attic space that never gets there. In a large house with long duct runs, the rooms furthest from the air handler simply lose the fight, and adding capacity at the condenser does not fix a distribution problem. Tom measures what is actually happening at the registers before recommending anything.",
      "Zoned cooling makes this both better and more complicated. When a zone will not cool, the fault is often in the zoning rather than the air conditioner — a damper motor stuck closed, a failed zone panel, or a thermostat that is not calling. These get misdiagnosed as failing equipment often enough that checking the zoning first is simply good practice.",
      "Large west-facing glazing is common in the newer Pelham builds, and it produces afternoon heat gain that no reasonably-sized system will overcome on its own. That is a real limit rather than a fault, and Tom is straight about it: the honest answer is sometimes shading, or a dedicated ductless head for the worst room, rather than a bigger condenser that will short-cycle and leave the house humid.",
      "The standard mechanical failures still happen too — capacitors, contactors, condenser fan motors and frozen coils — and Tom carries those parts. Multi-zone ductless systems are one of his specialties, which is a good fit for the additions and bonus spaces common in this area.",
    ],
    highlights: [
      "Large-home airflow and balance diagnostics",
      "Zoned cooling and damper fault troubleshooting",
      "Multi-zone ductless specialist",
      "Capacitors, contactors, fan motors, frozen coils",
      "Honest advice on solar heat gain limits",
      "Bonus room and addition cooling solutions",
    ],
    faqs: [
      {
        q: "My bonus room over the garage is unbearable in summer. Can that be fixed?",
        a: "Yes, though usually not by the central system. Rooms over garages have exposure on five sides and sit at the far end of the ductwork, so they rarely cool well no matter how good the equipment is. A dedicated ductless head is generally the effective and economical answer, and it heats the space in winter too.",
      },
      {
        q: "One zone will not cool. Is my air conditioner failing?",
        a: "Probably not. In zoned Fonthill homes a single non-cooling zone usually means a stuck damper motor, a failed zone panel or a thermostat not calling. Tom checks the zone system first so you are not replacing equipment that was working correctly all along.",
      },
      {
        q: "Should I install a bigger air conditioner for a large house?",
        a: "Bigger is not automatically better. An oversized system reaches the setpoint quickly, runs short cycles, removes less humidity and wears itself out faster. If the real problem is distribution or heat gain, more capacity will not solve it. Proper sizing and airflow matter more.",
      },
      {
        q: "Do you service Fenwick and Ridgeville as well as Fonthill?",
        a: "Yes, the whole Town of Pelham including Fenwick, Ridgeville and North Pelham. It is close to Welland home base, so response times are quick.",
      },
    ],
  },
  // ------------------------------------------------------------ Port Colborne
  {
    citySlug: "port-colborne",
    city: "Port Colborne",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-wont-start.jpg",
    metaTitle: "Furnace Repair in Port Colborne | No-Heat Service | FixAir",
    metaDescription:
      "Furnace repair in Port Colborne, Sugarloaf, the West Side and out toward Sherkston. Lakeside wind and cold experience. Call Tom at 905-732-2791.",
    h1: "Furnace Repair in Port Colborne",
    intro:
      "Port Colborne winters are colder than the numbers suggest, because the wind coming off Lake Erie does not stop for anything. Tom repairs residential furnaces across Sugarloaf, the West Side, downtown and out toward Sherkston.",
    body: [
      "Lakeside exposure is the defining fact of furnace work in Port Colborne. Homes near the water take sustained wind loading that inland houses never see, and that has two practical consequences. Furnaces here run longer cycles to hold temperature against constant infiltration, which ages them faster than the same unit would age in a sheltered Welland subdivision. And sidewall venting on high-efficiency furnaces is genuinely vulnerable — a windward termination can drift shut with blowing snow, or the wind can disrupt the pressure the furnace needs to prove a safe vent, locking it out mid-storm.",
      "That lockout is the single most common winter call Tom gets from the lakeside streets, and it is worth knowing about because it usually is not a broken furnace. If your high-efficiency unit shuts down during a blow, check that both the intake and exhaust pipes outside are clear of snow before assuming the worst. If it keeps recurring, the terminations need to be extended or relocated out of the prevailing wind, which is a permanent fix rather than an annual nuisance.",
      "The older housing through the West Side and downtown near West Street brings the usual complications of a century of modifications — converted ductwork, relined or abandoned chimneys, undersized returns. Damp basements are also common close to the lake, and persistent damp corrodes burners and heat exchangers, shortening the practical life of a furnace well below its nominal rating.",
      "Out toward Sherkston and the more rural properties, propane is common instead of natural gas. Tom services both, and checks that earlier conversions were done to spec.",
    ],
    highlights: [
      "Wind-driven vent lockout diagnosis and permanent fixes",
      "Lakeside corrosion and damp-basement assessment",
      "Natural gas and propane furnace service",
      "Converted ductwork and airflow faults",
      "Equipment sized for real lakeside heat loss",
      "24/7 emergency no-heat line",
    ],
    faqs: [
      {
        q: "My furnace keeps shutting down when the wind picks up. Why?",
        a: "This is the classic Port Colborne lakeside fault. High-efficiency furnaces vent out a sidewall and must prove a safe vent to run; sustained wind on a windward termination, or snow drifting into the pipes, will trip that safety and lock the furnace out. Clearing the pipes usually restores it, and if it recurs the terminations should be relocated out of the prevailing wind for good.",
      },
      {
        q: "Why does my furnace seem to run constantly in winter?",
        a: "Homes exposed to steady wind off Lake Erie lose heat faster through infiltration than sheltered inland homes, so the furnace runs longer cycles to hold the same temperature. That is partly normal here, but it can also indicate undersized equipment, air sealing problems or a fault. Tom can tell you which.",
      },
      {
        q: "Does being near the lake shorten a furnace's life?",
        a: "In practice, often yes. Longer run cycles mean more wear, and damp basements common near the water corrode burners, heat exchangers and cabinets. A furnace here can reach the end of its useful life earlier than its nominal rating suggests, which is worth factoring into any major repair decision.",
      },
      {
        q: "Do you service Sherkston and the rural areas?",
        a: "Yes. Many properties out that way run propane rather than natural gas, and Tom services propane systems as well, including verifying that any past conversion was done correctly.",
      },
    ],
  },
  {
    citySlug: "port-colborne",
    city: "Port Colborne",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/ac-welland.jpg",
    metaTitle: "AC Repair in Port Colborne | Air Conditioner Service | FixAir",
    metaDescription:
      "Air conditioner repair in Port Colborne, Sugarloaf and the West Side. Lakeside humidity and coil corrosion specialists. Call Tom at 905-732-2791.",
    h1: "Air Conditioner Repair in Port Colborne",
    intro:
      "In Port Colborne the summer complaint is usually humidity rather than heat. Lake Erie keeps the air heavy, and a system that holds its setpoint can still leave a house feeling damp. Tom repairs central air and ductless systems across Sugarloaf, the West Side and out toward Sherkston.",
    body: [
      "An air conditioner does two jobs: it lowers temperature and it removes moisture. Near the lake, the second one is the harder job and the one homeowners notice when it fails. If your thermostat reads 22 and the house still feels clammy, the system is almost certainly cooling the air quickly and shutting off before it has run long enough to condense meaningful moisture out of it. That is a sizing and cycle-length issue, and the intuitive fix — a bigger unit — makes it distinctly worse.",
      "This is why Tom is cautious about upsizing equipment in Port Colborne. A correctly-sized system that runs longer, steadier cycles will leave a lakeside home far more comfortable than an oversized one that blasts and stops. Variable-speed and inverter-driven ductless equipment does this particularly well, which is one reason it suits the housing here.",
      "The lake affects the outdoor unit too. Condensers on exposed lakeside properties see more moisture and airborne grit, and the fins corrode faster than they would inland. A corroded, partially-blocked coil cannot reject heat properly, so the system loses capacity, runs hotter and shortens the compressor's life. Cleaning and inspecting the outdoor coil is a bigger deal here than it is a few kilometres north, and it recovers real performance.",
      "The usual failures still turn up — run capacitors, contactors, condenser fan motors and frozen indoor coils — and Tom carries those parts. Where a home has no practical ductwork, ductless systems handle both the cooling and the dehumidification well.",
    ],
    highlights: [
      "Humidity and dehumidification problems solved",
      "Correct sizing rather than reflexive upsizing",
      "Lakeside coil corrosion inspection and cleaning",
      "Capacitors, contactors, fan motors, frozen coils",
      "Variable-speed and inverter ductless expertise",
      "Central air and ductless mini-splits",
    ],
    faqs: [
      {
        q: "My house is cool but feels damp. Is my AC broken?",
        a: "Usually not broken, but not matched to the conditions. Near Lake Erie, moisture removal is the harder half of the job. A system that hits its setpoint fast and shuts off has not run long enough to condense much water out of the air. Longer, steadier cycles fix this, which is a sizing and equipment question rather than a repair.",
      },
      {
        q: "Would a bigger air conditioner help with the humidity?",
        a: "No — it makes it worse, which is the most common and most expensive misunderstanding Tom corrects here. A larger unit reaches temperature faster, cycles shorter and removes less moisture. Correct sizing, or variable-speed equipment that can run at low output for long stretches, is what actually addresses lakeside damp.",
      },
      {
        q: "Does lake air damage the outdoor unit?",
        a: "It shortens its life. Exposed lakeside condensers see more moisture and airborne grit, and the coil fins corrode and clog faster than inland units. That costs you capacity and runs the compressor hotter, so regular cleaning and inspection matter more here than in most of Niagara.",
      },
      {
        q: "Do you get out to Sugarloaf and the West Side?",
        a: "Yes, along with downtown, the lakeside streets and out toward Sherkston. Port Colborne is close to Welland home base, so response times are good.",
      },
    ],
  },
]

export const cityServices = _cityServices

// Look up the city+service pages that belong to one city, for cross-linking
// from that city's main service-area page.
export function cityServicesForCity(citySlug) {
  return cityServices.filter(cs => cs.citySlug === citySlug)
}

// Look up the city+service pages that belong to one parent service, for
// cross-linking from that service's regional page.
export function cityServicesForService(parentService) {
  return cityServices.filter(cs => cs.parentService === parentService)
}
