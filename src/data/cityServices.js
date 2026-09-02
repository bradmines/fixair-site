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
      "Either way you get a straight answer. If your furnace has years left, Tom fixes it and says so. If you are about to spend fifteen hundred dollars on a unit that will fail again next winter, he tells you that too, with an honest quote for replacement and no pressure to take it.",,
      "Welland's post-war bungalow belt is the single most common house type Tom works in \u2014 the compact one-storey homes on the streets running off Niagara Street and Lincoln Street, and through the blocks around Chippawa Park. Most are between 900 and 1,200 square feet and were built when a 100,000 BTU furnace was considered normal for a house that size. Equipment has become smaller and far more efficient in the thirty years since, but many of these bungalows are still heated by something dramatically oversized for the actual load. An oversized furnace short-cycles: it satisfies the thermostat within a few minutes, shuts down, and fires again shortly after, and that cycling is hard on igniters, blower motors and heat exchangers. If your furnace runs in short bursts and the house still has cold rooms, the size of the unit is worth talking about before you spend money on the next repair.",
      "Dain City sits low and close to the canal, and the practical consequence is damp. Basements there run more humid than the Welland average, and sustained damp is hard on heating equipment \u2014 burners corrode, heat exchangers rust from the outside in, and the base of the cabinet goes before the rest of the unit does. A furnace in a damp Dain City basement will often reach the end of its usable life several years short of its nominal rating, and that changes the repair-versus-replace maths. Tom looks at the condition of the cabinet and the burner compartment, not just the fault code, before telling you what a repair is really buying you.",
      "Because Welland is home base, there is no drive-time penalty here \u2014 this is the area Tom reaches fastest, and it is the only part of his territory where a no-heat call does not start with a highway run. That matters most in the pattern he sees every winter: no-heat calls cluster hard in the first genuine cold snap of the season, usually the first stretch where overnight temperatures stay below about minus ten. Furnaces that coasted through a mild November fail the week the real cold arrives, because that is the first time all year they have been asked to run long, sustained cycles. If your furnace was noisy, slow to start or short-cycling in the fall, it is worth having looked at before that week rather than during it, when every heating contractor in Niagara is booked."
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
      "Being local means he can often get to a no-cooling call the same day, which matters when there is an infant, an older adult, or someone with a respiratory condition in the house.",,
      "The same post-war bungalows that dominate Welland's furnace work shape its cooling work too. These houses were built without air conditioning, and central air was added later through ductwork that was designed to move warm air upward, not cooled air outward. In a single-storey bungalow that is usually survivable, but the returns are almost always undersized \u2014 often a single central return in a hallway \u2014 and a system starved of return air cannot deliver its rated capacity no matter how healthy the condenser is. Tom checks static pressure and return sizing on these homes as a matter of course, because a homeowner who has been told twice that they need a bigger air conditioner frequently needs a second return instead.",
      "The newer subdivisions out toward Dain City, Cooks Mills and North Welland have properly designed cooling from the start, so the faults there are mechanical rather than architectural. Those are the calls that finish in one visit. The exception is the equipment that came with the late-1990s and early-2000s builds, which is now old enough that refrigerant type matters: systems still running R-22 cannot simply be topped up, because the refrigerant has been phased out and what remains is expensive. Tom will tell you which refrigerant your system uses before you commit to a repair, because on an older leaking unit that single fact often decides the whole decision.",
      "Welland's humidity comes from the canal corridor and the wider lake-effect pattern that covers all of south Niagara, and it produces the complaint Tom hears most often in July: the thermostat is satisfied but the house feels heavy. Being home base means he can usually reach a no-cooling call here the same day, which matters when there is an infant, an older adult or someone with a respiratory condition in the house. TODO: confirm with Tom whether he wants a specific same-day commitment stated here, or whether he prefers to keep it as a general expectation.",
      "There are three checks worth doing before you call anyone about a Welland cooling problem, and between them they account for a large share of the calls Tom takes. Look at the filter first, because a clogged one starves the coil of airflow and freezes it into a block of ice that stops all cooling. Check that the outdoor unit is actually running and that nothing has grown or been stacked against it, since a condenser needs clear air on every side to reject heat. And check the thermostat is calling for cooling rather than sitting in fan-only mode, which sounds obvious but presents identically to a dead system. If all three are fine, the fault is genuinely mechanical and worth a service call."
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
      "St. Catharines is a longer drive from Welland than Tom's closest service areas, so he gives you a realistic arrival window on the phone instead of an optimistic one. Emergency no-heat calls still get treated as emergencies.",,
      "St. Catharines is the largest city in Niagara and its housing runs across more than a century, which is why there is no single answer to what a furnace repair costs or involves here. The heritage stock through Port Dalhousie and the older streets off St. Paul Street and Ontario Street has usually been through two or three heating systems: a coal or oil original, a gravity conversion, then forced air layered on top. Every one of those transitions left something behind \u2014 abandoned chimney flues, ducts sized for gravity flow, returns that were adequate for a system that moved air by temperature difference rather than by fan. Diagnosing a furnace in one of these homes means reading that history, because the fault is frequently a consequence of a decision made forty years ago rather than a component that failed last week.",
      "The post-war housing through Merritton, the Facer district and the streets around Merritt Street is more uniform and more predictable. These are compact homes on small lots, and the furnaces in them are generally on their second or third replacement. The recurring issue is venting: many were originally vented into a masonry chimney shared with a water heater, and when the furnace was upgraded to a high-efficiency unit that vents out a sidewall, the water heater was left orphaned on a chimney now far too large for it. An oversized flue does not draft properly, which causes condensation inside the chimney and, in the worst cases, spillage of combustion products into the house. Tom checks the venting arrangement whenever he finds a high-efficiency furnace in a home of this vintage, because it is a safety issue that is easy to miss and cheap to correct.",
      "St. Catharines is roughly a half-hour run from Welland depending on where in the city you are and what the Glendale Avenue and Highway 406 traffic is doing, so Tom quotes a realistic arrival window on the phone rather than an optimistic one. The winter call pattern here follows the same regional rhythm as the rest of Niagara \u2014 everything happens at once in the first hard freeze \u2014 but St. Catharines adds its own wrinkle in the lake-effect snow that comes off Lake Ontario onto the north end. Sidewall vent terminations on high-efficiency furnaces in Port Dalhousie and the north end can drift shut during those events, locking the furnace out on a pressure switch. It reads as a major failure and is usually a clearing job. TODO: confirm the drive-time figure above with Tom before publishing."
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
      "Lake-influenced humidity near the north end and Port Dalhousie also means a system that holds temperature can still leave a house feeling damp. That is a cycle-length and sizing issue rather than a broken part, and it is worth diagnosing properly instead of buying a bigger unit that will make it worse.",,
      "The variety that makes St. Catharines interesting also makes cooling it inconsistent. A 1910 house in Port Dalhousie, a 1950s home in Merritton, a 1970s build in Grantham and a 2015 house near Brock have almost nothing in common thermally, and the same air conditioner behaves completely differently in each. The one pattern that holds across the older half of the city is that cooling was an afterthought: it was added to a building designed around a heating system, and the distribution reflects that. Second-floor bedrooms are the casualty in nearly every case, and no amount of capacity at the condenser resolves a problem that lives in the ductwork.",
      "Homes near the lake in Port Dalhousie and along Lakeshore Road carry a humidity load the inland parts of the city do not. Lake Ontario keeps the air heavy well into the evening, and a system sized purely on temperature will hold its setpoint while leaving the house feeling damp. The instinct is to buy more capacity, and it is exactly wrong \u2014 a larger unit reaches temperature faster, runs shorter cycles, and condenses less moisture, so the house ends up cooler and clammier at the same time. Correct sizing, or inverter-driven equipment that can run long and low, is what actually fixes lakeside damp, and Tom will explain that trade-off rather than simply quoting the bigger box.",
      "Glenridge and the streets climbing toward the escarpment add elevation and exposure to the mix, which affects the outdoor unit more than most homeowners expect. Condensers on exposed ground foul faster with wind-carried debris, and a blocked outdoor coil cannot reject heat, so the system loses capacity and runs the compressor hot. It presents from inside the house as a failing air conditioner and is often recoverable with a proper coil cleaning. Between Grantham, Glenridge, Western Hill and the Facer district Tom sees all of these variants in a given season, and the diagnosis always starts with what the house is, not just what the equipment is doing. St. Catharines is a longer run from Welland home base than Thorold or Port Colborne, so he gives a realistic window and treats genuine emergencies as emergencies.",
      "Timing matters more in St. Catharines than in the smaller Niagara municipalities, simply because there is more housing competing for the same contractors. The first genuinely hot week of the season generates more cooling calls across the city than any other week of the year, because systems that sat idle through spring are asked to start under load for the first time and the marginal ones fail immediately. Anything you can have checked in April or May is dealt with at a fraction of the urgency and with far better availability than the same fault found in the middle of a July heatwave."
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
      "Niagara Falls is a longer run from Welland than Tom's closest areas, so he gives you a realistic window. No-heat calls in a cold snap still get treated as urgent, and the 24/7 line is answered by Tom rather than a dispatcher.",,
      "Niagara Falls has a larger share of rental and investor-owned housing than anywhere else in Niagara, and that changes furnace work in ways that have nothing to do with the equipment. A rented duplex off Drummond Road or Portage Road, or one of the older converted houses near Lundy's Lane, tends to have had maintenance deferred longer than an owner-occupied home of the same age, because the person paying for repairs is not the person living with the cold. Tom sees the results of that: filters that have not been changed in years, blower wheels packed solid with dust, and furnaces that failed early from running starved of airflow rather than from any manufacturing defect. When he is called to one of these, he will say plainly what the unit's realistic remaining life is, so a landlord can make a decision with actual information rather than repairing the same system every winter.",
      "The older duplexes and converted single-family homes around Drummondville and the Lundy's Lane corridor bring a specific and under-recognised problem. When a house is split into two units, the heating is often split with it \u2014 sometimes properly, with two furnaces and two independent duct systems, and sometimes not, with one furnace serving both units through ductwork that was never rebalanced. In the second case the upstairs unit is typically either roasting or freezing relative to the downstairs, and the tenants blame each other's thermostats. That is a ductwork and zoning problem rather than a furnace fault, and repeatedly servicing the furnace will never resolve it. Tom will tell you when what you actually need is a balancing job or a second system.",
      "Stamford and Mount Carmel are more consistently owner-occupied and follow the standard 1950s-to-1970s Niagara pattern: original ductwork, second-generation furnace, and equipment now at the age where the repair-versus-replace conversation is genuinely close. Niagara Falls is a longer run from Welland home base than Thorold or Port Colborne, so Tom gives a realistic arrival window rather than an optimistic one, and the 24/7 emergency line is answered by him directly rather than by a dispatcher. The winter no-heat pattern here matches the rest of the region \u2014 the calls arrive in a wave during the first sustained cold snap, when furnaces that idled through a mild autumn are asked to run hard for the first time. TODO: confirm with Tom whether he wants an explicit drive-time figure for Niagara Falls stated on the page.",
      "One practical note for the rental and duplex housing that makes up so much of the Falls: whoever is paying for the repair should be on the phone for the diagnosis. Tom is regularly called to a property where the tenant reports the symptom, the landlord authorises the work, and neither of them has heard the same explanation. That is how a system gets three repairs in two winters instead of one honest replacement conversation. He is happy to explain what he found to both parties, and he would rather do that once than return repeatedly to a furnace that was never going to last the season."
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
      "Chippawa's proximity to the river adds humidity to the mix, so some homes there hold temperature fine but still feel heavy. That is a cycle-length and sizing issue rather than a fault, and worth diagnosing properly.",,
      "The rental and duplex housing that shapes furnace work in Niagara Falls shapes the cooling work just as much. In an owner-occupied home a failing air conditioner gets attention early, while the same unit in a rented duplex off Portage Road or near Lundy's Lane usually gets reported only once it has stopped entirely. By that point the compressor has often been running under strain for a full season \u2014 low on refrigerant from an unfixed leak, or fighting a coil packed with dirt \u2014 and what would have been an inexpensive repair in June has become a replacement in August. Tom is straightforward about which of those two situations he is looking at, because the difference is usually several thousand dollars.",
      "Split houses create a cooling problem with no equivalent in single-family homes. Where a duplex conversion left one condenser serving both units, neither tenant can control their own comfort, and the thermostat ends up in whichever unit happened to have it. Where two condensers were added, they are frequently crowded into the same narrow side yard, close enough that each one is ingesting the other's discharge air. A condenser breathing pre-heated air cannot reject heat properly, so both systems run hot, lose capacity and age quickly. It is a common and easily missed fault, and the fix is often relocation and clearance rather than new equipment.",
      "Chippawa's riverside streets carry noticeably more humidity than the rest of the city, and homes there produce the familiar south-Niagara complaint of a house that holds temperature but never feels dry. That is a cycle-length and sizing issue rather than a broken component, and it is worth diagnosing properly instead of buying capacity that will make it worse. Across Stamford, Drummondville, Mount Carmel and the Lundy's Lane area the everyday mechanical failures are the same ones Tom sees region-wide \u2014 run capacitors first by a wide margin, then contactors, condenser fan motors and frozen indoor coils \u2014 and he carries those parts. Because Niagara Falls is a longer drive from Welland than his closest areas, he quotes a realistic window and prioritises households with genuine heat vulnerability.",
      "Before booking a call, it is worth confirming the outdoor unit has power and clear space around it. In the duplex and converted housing common through Drummondville and the Lundy's Lane area, condensers are frequently fed from a disconnect that has been tripped or switched off, sometimes by work done for an unrelated reason, and the system reads as completely dead from inside. Checking the disconnect and the breaker takes a minute and occasionally resolves the whole complaint. If the unit has power, is clear of obstruction and still will not start, the fault is mechanical and Tom will bring the parts most likely to be responsible."
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
      "Because Thorold is close by, Tom can usually get to urgent no-heat calls here quickly, and the 24/7 emergency line goes to him directly.",,
      "Thorold's housing mix is unusually compressed: within a few kilometres you move from tightly-spaced nineteenth-century homes near the canal locks, through post-war housing on the streets off Ormond Street and Pine Street, to the newer development up on Confederation Heights, and then out into genuinely rural property at Port Robinson, Allanburg and Beaverdams. Each of those bands fails differently, and treating them as one service area is how furnaces get misdiagnosed. The downtown core near Front Street has the most layered systems in the city \u2014 homes that have carried three or four generations of heating equipment, with the ductwork, chimney and returns each reflecting a different era's assumptions.",
      "The escarpment is the fact that distinguishes Thorold from the flat parts of Niagara, and it matters mechanically. Confederation Heights and the newer streets along the higher ground sit exposed, and high-efficiency condensing furnaces there vent through a sidewall rather than a chimney. Those sidewall terminations are the most common winter failure point in exposed Thorold housing: blowing snow drifts across them, or sustained wind disrupts the pressure differential the furnace needs to prove a safe vent, and the unit locks out on its pressure switch mid-storm. It presents as a dead furnace on the coldest night of the year and is frequently a five-minute clearing job. Where it recurs every winter, the terminations should be extended or relocated out of the prevailing wind, which ends the problem permanently rather than annually.",
      "Thorold is one of the closest cities to Welland home base \u2014 a short run rather than a highway trip \u2014 which makes it one of the fastest areas Tom reaches on a winter no-heat call. That proximity is most useful in the pattern that repeats every year across the region: no-heat calls arrive in a concentrated wave during the first sustained cold snap, and availability across Niagara collapses for that week. Being nearby means Thorold homeowners are easier to fit into a day that is already full. The rural properties out toward Port Robinson, Allanburg and Beaverdams add the propane dimension covered above, and they are also the homes most likely to lose heat in a power cut, since a furnace with no electricity will not run regardless of how much fuel is in the tank.",
      "Thorold homeowners get more benefit than most from having a furnace looked at in the autumn rather than the winter, for a reason specific to the geography. The two most common local faults are wind-related vent lockouts on the exposed higher ground and airflow problems in the tightly-modified downtown housing, and both are far easier to correct in October than in January. A vent termination can be relocated properly in mild weather at a sensible price; the same job during a February storm is an emergency call to a house with no heat. If your furnace showed any sign of struggling last winter, that is the work worth booking before the cold arrives."
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
      "Ductless systems are a strong fit for the older Thorold housing where adding ductwork is impractical, and they are one of Tom's specialties for both repairs and new installs.",,
      "The escarpment gives Thorold a genuine microclimate difference across a small area. Homes up on Confederation Heights sit higher and more exposed, catching more breeze and cooling down faster in the evening, while the older streets down near the canal locks sit lower, more sheltered and noticeably more humid. The same air conditioner, correctly sized, will behave differently in those two locations, and the complaint Tom hears from the lower streets is far more often about dampness than about temperature. That distinction matters because the fixes are opposite: a temperature problem may genuinely call for more capacity, while a humidity problem gets worse with every additional ton you add.",
      "The tightly-spaced housing near the canal creates the clearance problem described above, and it is worth being specific about how little space a condenser actually needs to fail. A unit boxed in on three sides, or set under a low deck, or pushed against a fence in a narrow side yard, recirculates its own hot discharge air. The system reads as underperforming on the hottest days precisely when it is needed most, and homeowners conclude the equipment is undersized. Before quoting anything larger, Tom checks what the outdoor unit is actually breathing, because restoring clearance sometimes recovers the missing capacity outright at no equipment cost.",
      "Out toward Port Robinson, Allanburg and Beaverdams the properties open up and the problem inverts: there is plenty of clearance and far more vegetation. Condensers in these locations fill with grass clippings, cottonwood seed, and leaf litter, and a fouled outdoor coil looks exactly like a dying system from inside the house. These are also the properties most likely to be on propane for heating, which is irrelevant to the air conditioner itself but relevant to any conversation about replacing a furnace and air conditioner together as a matched system. Thorold's closeness to Welland home base means Tom can often reach a no-cooling call here the same day, which is the practical advantage of being one of the nearest cities to his base.",
      "Because Thorold spans such a range of housing in a small area, the honest answer to what your cooling problem will cost varies more here than the size of the city suggests. A capacitor on a newer system in Confederation Heights is an inexpensive same-visit repair. A downtown home near the canal with converted ductwork and a condenser wedged into a narrow side yard may have a comfort problem that no single part resolves, and pretending otherwise just sells equipment that will disappoint. Tom gives you the real picture, including when the sensible answer is a modest airflow correction rather than anything expensive, and when a ductless head in one problem room does more than a whole new central system would."
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
      "Out in Fenwick, Ridgeville and North Pelham the properties are more rural and some are on propane rather than natural gas. Tom services both, and confirms any past propane conversion was done to spec.",,
      "Fonthill's newer subdivisions are the youngest housing stock FixAir works in regularly, and young housing brings its own category of fault. The builds along Rice Road, off Highway 20 and through the newer streets of Fonthill village generally have correctly-sized, properly-installed high-efficiency equipment, so the failures are rarely about age. They are about complexity. A modern condensing furnace is a networked appliance: it talks to a communicating thermostat, modulates its output, varies its blower speed, and shuts itself down on any one of a dozen safety inputs. When something goes wrong, the symptom is frequently a comfort complaint rather than a breakdown, and the diagnosis is a control and configuration question rather than a parts question.",
      "Condensate is the other signature fault of newer Pelham housing. A high-efficiency furnace extracts so much heat from its exhaust that the water vapour in it condenses, and that condensate is mildly acidic and has to drain somewhere. In a finished basement it typically runs to a condensate pump, and when that pump fails or its line clogs, the furnace backs up and locks out on a pressure switch. Homeowners read a dead furnace on a cold morning and assume the worst; the actual fault is often a twenty-dollar pump or a blocked length of tubing. Tom checks the condensate path early on any high-efficiency no-heat call in this area, because it is both the most common cause and the cheapest to put right.",
      "Out in Fenwick, Ridgeville and North Pelham the picture changes completely. The properties are rural, larger, and often on propane rather than natural gas, and they are more exposed to wind than the sheltered streets in the village. Fonthill sits on some of the highest ground in Niagara \u2014 the top of the escarpment rather than the base of it \u2014 and elevation means wind loading on sidewall vent terminations, drifting snow, and furnaces that run longer cycles against constant infiltration. Pelham is a short run from Welland home base, which helps in the first hard freeze of the season when no-heat calls across the region all arrive in the same week. TODO: confirm with Tom whether propane delivery scheduling in Fenwick and North Pelham is something he wants mentioned, since running a tank dry is a common cause of what looks like a furnace failure.",
      "One thing worth knowing about modern equipment in the newer Pelham builds: the diagnostic information is already in the furnace, and reading it correctly saves money. Condensing furnaces log fault codes, and a homeowner who can report the code and the pattern of the lockout gives Tom a substantial head start before he arrives. If your furnace has stopped, note what the status light is doing and whether the failure follows a storm, a cold snap or nothing in particular. That detail frequently distinguishes a blocked condensate line from a wind-related vent lockout from a genuine component failure, and those three have very different prices attached."
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
      "The standard mechanical failures still happen too — capacitors, contactors, condenser fan motors and frozen coils — and Tom carries those parts. Multi-zone ductless systems are one of his specialties, which is a good fit for the additions and bonus spaces common in this area.",,
      "The newer Pelham subdivisions are built to a standard of insulation and air-sealing that older Niagara housing never approached, and that changes what an air conditioner has to do. A tight, well-insulated house has a much lower sensible cooling load \u2014 it does not gain heat through the walls the way a 1950s bungalow does \u2014 but its latent load, the moisture it needs to remove, does not fall by anything like the same proportion. The consequence is that equipment sized by the old rules of thumb ends up substantially oversized for a modern house. It cools quickly, shuts off, and never runs long enough to dehumidify, so a brand-new home with brand-new equipment can feel clammy in July. That is a sizing error rather than a defect, and it is one of the more common things Tom is called in to explain.",
      "Large west-facing glazing is a defining feature of the newer builds on Fonthill's higher ground, and it produces an afternoon heat gain that arrives late in the day and concentrates in one or two rooms. No reasonably-sized central system overcomes that on its own, because the load is not distributed the way the ductwork is. Adding capacity at the condenser cools the whole house further to fix one room, which is expensive to run and makes the humidity worse everywhere else. A single ductless head serving the affected room is very often the cheaper and better answer, and multi-zone ductless work is one of Tom's specialities.",
      "The rural properties through Fenwick, Ridgeville and North Pelham bring the outdoor unit into play. Open ground means wind-carried debris, and agricultural surroundings mean far more of it \u2014 chaff, seed and dust that pack an outdoor coil far faster than in a suburban yard. A fouled condenser coil cannot reject heat, so capacity falls, the compressor runs hot, and the system's life shortens. From inside the house it presents as an air conditioner that is simply getting tired. Cleaning it properly recovers performance that homeowners often assume is permanently gone. Pelham's elevation also means the evenings cool off more reliably here than in the low-lying parts of Niagara, which is worth knowing when deciding how hard a system really needs to work overnight.",
      "Zoned and multi-stage cooling is more common in Fonthill than anywhere else in the service area, and it is worth understanding what that means for a service call. On a conventional single-stage system there are only so many things that can fail, and diagnosis is quick. On a zoned or communicating system the equipment, the zone panel, the dampers and the thermostats all have to agree with each other, and a fault in any one of them can present as a comfort complaint somewhere else entirely. These calls take longer to diagnose properly and are the ones most often misdiagnosed by someone working quickly, which is exactly why checking the zoning before condemning the equipment is standard practice rather than an extra step."
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
      "Out toward Sherkston and the more rural properties, propane is common instead of natural gas. Tom services both, and checks that earlier conversions were done to spec.",,
      "Port Colborne's older brick housing is the defining stock of the city, and brick behaves differently from frame construction in ways that matter to a heating system. Solid masonry walls have real thermal mass: they take a long time to give up heat and a long time to take it back on, which means a brick house heats slowly and steadily rather than responding quickly to a thermostat. Many of these homes through the West Side and the streets around West Street and Sugarloaf Street have little or no wall insulation behind the masonry, so the heat loss is high and constant. A furnace in one of these houses runs long cycles all winter, and that is normal rather than a fault \u2014 but it also means the equipment accumulates running hours much faster than the same unit would in an insulated suburban home, and it wears out sooner in calendar terms.",
      "The venting history in this housing is the other recurring theme. Homes of this age were built around a masonry chimney, and successive heating upgrades have generally moved away from it \u2014 first to a mid-efficiency furnace still using the chimney, then to a high-efficiency unit venting out a sidewall. Each of those steps leaves the chimney serving less and less, and a flue that is far too large for whatever remains on it will not draft properly. In the older Port Colborne stock the appliance left behind is usually the water heater, and an orphaned water heater on an oversized masonry chimney is a genuine combustion safety concern rather than a theoretical one. Tom checks this arrangement on every older home he works in here.",
      "Everything above is compounded by the lake. Port Colborne is the most exposed part of FixAir's service area, and the wind off Lake Erie drives infiltration through exactly the gaps that old brick construction has plenty of. The city is a short run from Welland home base, which matters in the pattern that repeats every winter: the region's no-heat calls arrive together in the first sustained cold snap, and being close by is what makes it possible to fit lakeside emergencies into that week. Homes out toward Sherkston and the rural edges are more likely to be on propane and more likely to lose heat in a power cut, since no furnace runs without electricity regardless of the fuel supply.",
      "If your furnace locks out during a Lake Erie blow, there is one check worth making before you call. Go outside and look at the intake and exhaust terminations on the wall, usually two white plastic pipes, and confirm both are clear of drifted snow and ice. A blocked termination stops the furnace from proving a safe vent and shuts it down deliberately, which is the system protecting you rather than a component failing. Clearing them often restores heat immediately. If it happens more than once in a season, the terminations are in the wrong place for this exposure and relocating them is a permanent fix rather than something to repeat every winter."
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
      "The usual failures still turn up — run capacitors, contactors, condenser fan motors and frozen indoor coils — and Tom carries those parts. Where a home has no practical ductwork, ductless systems handle both the cooling and the dehumidification well.",,
      "The same solid brick construction that makes Port Colborne homes slow to heat makes them slow to cool, and homeowners frequently misread that as an underperforming air conditioner. A masonry house absorbs heat through the day and releases it into the interior through the evening, so the building keeps warming the rooms long after the outdoor temperature has dropped. The system runs late into the night not because it is failing but because it is still discharging heat the walls stored that afternoon. The upside is that the same thermal mass keeps these houses comfortable through short heatwaves better than a lightly-built home; the downside is that recovery after a hot spell takes longer, and turning the thermostat down further does not speed it up.",
      "Lakeside humidity is the other half of the picture and it is the more important half in this city. Lake Erie keeps the air heavy from June through September, and the moisture load in a Port Colborne home is genuinely higher than it is a few kilometres inland. In older brick housing with basements that were never fully dry, that load compounds \u2014 the basement contributes moisture to the whole house, and the air conditioner is asked to remove water that is being replenished from below. Addressing the basement is frequently a larger comfort improvement than anything done to the cooling equipment, and Tom will say so rather than quoting a system that cannot win against a continuing source.",
      "Homes near the water on the West Side, around Sugarloaf and out along the lakeshore toward Sherkston take a level of exposure the rest of Niagara does not. Salt is not the issue here that it would be on a coast, but constant moisture and wind-carried grit are, and outdoor coils in these locations corrode and foul faster than inland units. Because these homes are exposed, they also tend to have their condensers in open, windward positions where debris accumulates continuously. Port Colborne is close to Welland home base, so no-cooling calls here are among the quicker ones Tom reaches, and where a home has no practical ductwork, ductless equipment handles both the cooling and the dehumidification that this climate demands.",
      "Given how much harder the lake air is on outdoor equipment here, an annual clean and inspection of the condenser returns more in Port Colborne than almost anywhere else in the region. Fins that have corroded and packed with grit reduce capacity gradually enough that homeowners adjust to it without noticing, until a genuinely hot week arrives and the system visibly cannot keep up. At that point the conclusion is usually that the air conditioner is finished. Frequently it is not, and restoring the coil recovers most of the lost performance. It is worth having looked at in spring, before the first heatwave establishes what you think your system is capable of."
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
  // ------------------------------------------------------------- Wainfleet
  {
    citySlug: "wainfleet",
    city: "Wainfleet",
    slug: "furnace-repair",
    service: "Furnace Repair",
    parentService: "furnaces",
    image: "/blog/furnace-wainfleet.jpg",
    metaTitle: "Furnace Repair Wainfleet | Same-Day No-Heat | FixAir",
    metaDescription:
      "Propane, oil and gas furnace repair across Wainfleet, Long Beach and Winger. Rural no-heat calls answered by Tom himself, 24/7. Call 905-732-2791.",
    h1: "Furnace Repair in Wainfleet",
    intro:
      "Wainfleet is rural, and rural heating is its own trade. Much of the township sits outside the natural gas network, so Tom works on propane and oil furnaces here as often as gas ones, from the village out to Long Beach, Winger, Marshville and Chambers Corners.",
    body: [
      "The single biggest difference between a Wainfleet furnace call and a call in Welland or Thorold is the fuel. Large parts of the township have no natural gas service at all, which means the heating equipment runs on propane from an on-site tank or, in the older properties, on oil. Both behave differently from natural gas, and both introduce failure modes that simply do not exist on a gas main. A propane furnace is not a gas furnace with a different label on it: the burner orifices are smaller, the supply pressure is different, and the regulator arrangement is specific to the fuel. A unit converted between fuels without the correct kit runs badly at best and unsafely at worst, and confirming that any past conversion was done to spec is part of the diagnosis on a rural call rather than an optional extra.",
      "Running out of fuel is the most common cause of what looks like a catastrophic furnace failure in Wainfleet, and it is worth ruling out before anything else. A propane tank that has dropped below roughly ten to twenty percent will not maintain the vapour pressure a furnace needs on a genuinely cold night, particularly if the tank is small relative to the house and the weather has been sustained. The furnace lights, runs briefly, and then locks out, which reads exactly like a failing gas valve or pressure switch. Checking the tank gauge before calling anyone can save a service charge, and if the level is low the answer is a delivery rather than a repair.",
      "Oil heating is less common than it once was but has not disappeared from the older Wainfleet farmhouses. Oil systems need genuinely regular attention: nozzles clog, filters load up, and the combustion chamber accumulates soot in a way gas equipment never does, so an oil furnace that has gone several years without service will eventually fail on a cold night. The other consideration with oil is the tank itself. Older tanks, especially unprotected steel ones and anything approaching the end of its service life, are an insurance and environmental issue as much as a heating one, and it is worth knowing the age and condition of yours. TODO: confirm with Tom whether FixAir services oil-fired equipment directly or refers that work out, so this section states the right thing.",
      "Wainfleet properties are also more exposed to power loss than the rest of the service area. Rural distribution lines run long distances across open country, and a winter storm that inconveniences a Welland subdivision can leave a township road without power for considerably longer. Every furnace, regardless of fuel, needs electricity to run its controls, igniter and blower, so a full propane tank buys nothing during an outage. Homeowners on well water lose their pump at the same moment, which turns a heating problem into a whole-house problem. This is the practical argument for a generator on a rural property, and it is worth thinking about before the storm rather than during it.",
      "The housing itself runs from century farmhouses on the concession roads to seasonal and converted cottages along Lakeshore Road and the Long Beach shoreline. The farmhouses tend to have had heating layered in over generations, with ductwork added to buildings never designed for it, long runs to distant rooms, and returns that were never sized properly. Converted cottages bring a different problem: many were built for summer use and insulated accordingly, then winterised later, so they lose heat far faster than their square footage suggests. A furnace sized on floor area alone will be badly matched to a building like that, and the result is either a unit that runs continuously and still cannot hold temperature, or an oversized one that short-cycles itself to an early death.",
      "Lake Erie shapes the winter here as much as it shapes the summer. The Long Beach and Lakeshore Road properties take the wind directly off the water with very little between them and it, which drives infiltration through every gap an older building has. Furnaces in these homes run long, sustained cycles through a cold snap rather than the short bursts an inland house would see, and they accumulate running hours accordingly. Where a high-efficiency unit vents out a sidewall, that same exposure makes the vent terminations vulnerable: blowing snow drifts across them, or sustained wind disrupts the pressure the furnace needs to prove a safe vent, and the unit locks out mid-storm. It is worth checking that both pipes outside are clear before assuming the furnace has failed.",
      "Wainfleet borders Welland directly, so despite being rural it is one of the shorter runs from FixAir home base rather than one of the longer ones. That matters in the pattern that repeats across Niagara every winter, when the region's no-heat calls all arrive in the same week during the first sustained cold snap and contractor availability collapses. Being close by is what makes it possible to fit rural emergencies into that week. Tom answers the emergency line himself rather than routing it through a dispatcher, and on a no-heat call he will walk you through the checks worth doing before he sets off, including the tank gauge, the thermostat batteries and the vent terminations.",
    ],
    highlights: [
      "Propane and natural gas furnace repair",
      "Rural and acreage properties across the township",
      "Fuel supply and tank pressure faults diagnosed",
      "Conversions checked for correct orifices and pressure",
      "Sidewall vent lockouts in lakeside wind",
      "24/7 emergency line answered by Tom",
    ],
    faqs: [
      {
        q: "Do you service propane furnaces in Wainfleet?",
        a: "Yes. Much of Wainfleet has no natural gas service, so propane is normal here rather than unusual. Tom services propane equipment and will also confirm that any earlier fuel conversion was carried out with the correct orifices and supply pressure, which is a common source of poor running and a genuine safety concern when it was done wrong.",
      },
      {
        q: "My furnace starts and then shuts off. Is the propane tank the problem?",
        a: "It is the first thing to check. A tank low on propane cannot maintain the vapour pressure the furnace needs on a cold night, so the unit lights, runs briefly and locks out. That looks identical to a failed gas valve or pressure switch. Read the gauge before booking a service call, because if the level is low you need a delivery rather than a repair.",
      },
      {
        q: "How far out into the township do you come?",
        a: "Across Wainfleet, including the village, Long Beach, Winger, Marshville and Chambers Corners, and out along the concession and side roads. Wainfleet borders Welland, which is FixAir home base, so it is a shorter run than much of the rest of the service area despite being rural.",
      },
      {
        q: "Why does my furnace not work when the power goes out?",
        a: "Every furnace needs electricity for its controls, igniter and blower, regardless of what fuel it burns, so a full propane tank does not help during an outage. Rural Wainfleet properties tend to see longer outages than urban ones because the distribution lines run much further. If you are on a well, the pump stops at the same time, which is why a generator is worth considering on a property like this.",
      },
    ],
  },
  // ------------------------------------------------------ Haldimand County
  {
    citySlug: "haldimand-county",
    city: "Haldimand County",
    slug: "ac-repair",
    service: "Air Conditioner Repair",
    parentService: "air-conditioners",
    image: "/blog/hvac-haldimand.jpg",
    metaTitle: "AC Repair Haldimand County | Same-Day Service | FixAir",
    metaDescription:
      "Air conditioner repair in Dunnville, Cayuga, Caledonia, Hagersville and Jarvis. Residential-only specialist, honest diagnosis. Call Tom at 905-732-2791.",
    h1: "Air Conditioner Repair in Haldimand County",
    intro:
      "Haldimand County is spread out, and homeowners here have fewer residential HVAC specialists to choose from than anyone in Niagara. Tom repairs central air and ductless systems across Dunnville, Cayuga, Caledonia, Hagersville and Jarvis.",
    body: [
      "The defining fact about air conditioning in Haldimand County is distance. The communities are small and separated by farmland, and there are simply fewer residential contractors covering the area than there are in the Niagara cities. The practical consequence is that homeowners here wait longer for service, and often end up with whoever is available rather than whoever is right for the job. That is worth knowing when a system fails in the middle of a July heatwave, because the gap between a same-week appointment and a three-week wait is the difference between a repair and a very uncomfortable month.",
      "It also changes the economics of a diagnosis. When a contractor is making a long trip, there is a real incentive to replace parts speculatively rather than spend time finding the actual fault, because a second visit is expensive for everyone. Tom works the opposite way: he would rather diagnose properly once than come back twice, and on a longer run he will ask enough questions on the phone to arrive with the likely parts already on the truck. Where a fault turns out to be something a homeowner can reasonably check themselves, he will say so on the phone rather than making the trip.",
      "The housing across the county falls into two broad groups that fail differently. The small-town stock in Dunnville, Cayuga, Caledonia, Hagersville and Jarvis is mostly modest detached housing of mid-century vintage or older, on serviced lots with natural gas available in the built-up areas. A good deal of it had central air retrofitted long after construction, onto ductwork that was designed to carry warm air upward rather than cooled air outward. The result is the familiar complaint of a comfortable main floor and upstairs bedrooms that never quite get there, and it is a distribution limit rather than an equipment failure. Adding capacity outside does not fix a bottleneck inside.",
      "The rural half of the county is farm and acreage property along the concession roads and out toward the Lake Erie shoreline, and these homes are frequently outside the natural gas network entirely. That matters less for the air conditioner itself, which runs on electricity regardless, but it matters a great deal for any conversation about replacing heating and cooling together as a matched system. It also means the older farmhouses often have no usable ductwork at all, or ductwork so compromised that forcing cooling through it was never going to work. Those homes are among the best candidates for ductless equipment anywhere in the service area, and ductless work is one of Tom's specialities.",
      "Agricultural surroundings are hard on outdoor units in a way suburban yards are not. Condensers on rural Haldimand properties ingest chaff, seed, dust and grass in volumes that pack a coil within a single season, and a fouled outdoor coil cannot reject heat. The system loses capacity, the compressor runs hotter than it should, and its life shortens measurably. From inside the house this presents as an air conditioner that has simply grown tired and needs replacing. Very often it does not: a proper coil cleaning recovers performance that the homeowner had written off, and it costs a fraction of what they were bracing for.",
      "Humidity is higher across much of the county than the raw temperature suggests, because of the Grand River corridor running through Dunnville, Cayuga and Caledonia and the Lake Erie shoreline to the south. The effect is the same one seen across south Niagara: a house can hold its thermostat setpoint and still feel heavy and damp. That is a cycle-length and sizing problem rather than a broken component, and the intuitive response of fitting a larger unit makes it worse, because a bigger system reaches temperature faster, runs shorter cycles and removes less moisture. Correct sizing, or inverter-driven equipment that can run long and low, is what actually resolves it. Many rural properties are also on well water and have basements that were never fully dry, which adds a moisture source the air conditioner is quietly fighting all summer.",
      "The everyday mechanical failures here are the same ones Tom sees region-wide, and he carries the parts for them: run capacitors first by a wide margin, then contactors, condenser fan motors, and indoor coils frozen solid by a filter left too long. Systems that sat unused through a couple of mild summers also tend to fail on start-up in the first real heatwave, which is why the busiest week of the season is reliably the first hot one. Haldimand County is the furthest part of FixAir's service area from Welland home base, so Tom gives a realistic arrival window on the phone rather than an optimistic one, and he is honest about it. TODO: confirm with Tom how far into Haldimand County he is willing to travel and what response window he wants stated, since the county is large and Dunnville and Caledonia are very different distances from Welland.",
    ],
    highlights: [
      "Central air and ductless repair county-wide",
      "Dunnville, Cayuga, Caledonia, Hagersville, Jarvis",
      "Diagnosis done once, not parts swapped speculatively",
      "Agricultural debris and fouled coil recovery",
      "Humidity and short-cycling problems addressed",
      "Ductless options for farmhouses with no ductwork",
    ],
    faqs: [
      {
        q: "Do you actually come out to Haldimand County?",
        a: "Yes. Haldimand is the furthest part of the service area from Welland home base, so Tom gives you a realistic arrival window on the phone rather than an optimistic one, and he will tell you honestly if a job is better handled by someone closer. He would rather be straight with you than book something he cannot reach in time.",
      },
      {
        q: "My upstairs never cools even though the AC runs constantly. Why?",
        a: "In most of the older small-town housing across Dunnville, Cayuga and Hagersville, central air was retrofitted onto ductwork designed for heating. Heating ducts move warm air upward and cooling needs more airflow and better returns, so the upper floor loses the fight. That is a distribution limit rather than a failing air conditioner, and a larger outdoor unit will not resolve it.",
      },
      {
        q: "My house is cool but it still feels damp. Is the system broken?",
        a: "Probably not. Near the Grand River and the Lake Erie shoreline the moisture load is high, and a system that reaches its setpoint quickly shuts off before it has run long enough to condense much water out of the air. Fitting a bigger unit makes this worse rather than better. Correct sizing, or variable-output equipment that runs long and low, is the real fix.",
      },
      {
        q: "My farmhouse has no ductwork. What are my options?",
        a: "Ductless mini-splits, and they are a genuinely good fit rather than a compromise. A lot of the older rural housing in Haldimand has no usable ductwork at all, and installing it is disruptive and expensive. Ductless equipment cools and dehumidifies well, can be zoned room by room, and is one of Tom's specialities.",
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
