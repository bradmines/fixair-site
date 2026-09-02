# FixAir — indexation & conversion work

Branch `seo/index-recovery`, deployed to **https://fixair-site-staging.up.railway.app**.
Production is untouched: `origin/main` is still at `43af9ee`.

Everything below was measured, not assumed. Two scripts were added and are
re-runnable:

```bash
node scripts/crawl.js [origin]   # status, redirect chain, title, canonical, word count
node scripts/linkgraph.js        # inbound internal links per sitemap URL
```

---

## Read this first: three premises in the brief were wrong

**1. There is no 5xx in the sitemap, and no sitemap URL redirects.**
All 47 URLs returned a clean 200 in zero hops with matching canonicals before I
changed anything. GSC's counts cover every URL it has *discovered*, not just
sitemap entries, which is why they disagreed.

The real 5xx is the legacy host:

| URL | Result |
|---|---|
| `http://fixairheatandcool.ca/` | **530 — Cloudflare error 1016 (Origin DNS error)** |
| `http://www.fixairheatandcool.ca/` | 301 → https://www ✅ |
| `https://fixairheatandcool.ca/` | 301 → https://www ✅ |
| `https://www.fixairheatandcool.ca/` | 200 ✅ |

**This is the single highest-value item on the list and I could not fix it.**
The URL Google ranks at position 5.0 is serving a 5xx. Header forensics show
`http://www` and `https://apex` are answered by the **Cloudflare edge** (no
`x-powered-by: Express`), while `https://www` is answered by **Railway origin**.
The failing request never reaches `server.js`, so no code change can fix it.
See "What still needs you" below.

**2. The 12 city+service pages were not orphaned in the way assumed.**
They had 3 inbound links each. But they were the only page type with **zero
sitewide links** — every other page type had 46. The pages genuinely starving
were the blog posts, on 1–2 links each.

**3. The city+service pages were never templated.**
3-gram Jaccard similarity across the 12 peaked at **0.030**; a template scores
above 0.30. The copy was genuinely per-city. The problem was that it was
**thin** — 271–326 words of body prose. So they were expanded, not rewritten.

---

## Crawl status

| | Before | After |
|---|---|---|
| URLs in sitemap | 47 | **49** |
| Clean 200, zero hops | 47 | **49** |
| Broken / redirecting / thin | 0 / 0 / 0 | **0 / 0 / 0** |
| Duplicate `/index.html` URLs returning 200 | every page | **0** |

Two pages added for queries we rank on with nothing to land on:
`/service-areas/wainfleet/furnace-repair/` and
`/service-areas/haldimand-county/ac-repair/`.

## Internal links (unique linking pages per URL)

| Page group | Before | After |
|---|---|---|
| 14 × city+service pages | **3** | **48** |
| 5 worst blog posts | **1** | 5–8 |
| 7 next blog posts | **2** | 7–12 |
| Services / service-areas | 46 | 48 |
| **URLs under 3 inbound links** | **12** | **0** |
| Lowest inbound count on the site | **1** | **5** |

Root cause of the blog starvation was a real bug: `BlogPostPage` selected
"More Articles" with `slice(0, 3)`, so posts 1–3 collected every sibling link
on the site and posts 4–17 collected none.

## Lighthouse — mobile homepage

Before = production (unchanged code). After = staging. Same flags, same run.

| Metric | Before | After |
|---|---|---|
| **Performance** | **42** | **79** |
| Accessibility | 96 | 96 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First contentful paint | 2.4 s | 2.4 s |
| **Largest contentful paint** | **8.9 s** | **3.1 s** |
| Total blocking time | 880 ms | 480 ms |
| **Speed index** | **12.6 s** | **2.4 s** |
| Cumulative layout shift | 0 | 0 |
| Page weight | 3,216 KB | 2,300 KB |

---

## What changed and why

### 1. Redirects and duplicate URLs (`server.js`)
Host, scheme and path normalisation folded into a **single 301** with an
absolute `Location`; `express.static`'s own redirect disabled so it cannot add
a second hop. Previously apex + missing-slash took two hops.
`/index.html` and `/*/index.html` returned **200**, making every page reachable
at two URLs; both now 301 to the directory form. Trailing-slash handling was
already correct and was left alone.

### 2. Internal linking
- All 14 city+service pages linked **sitewide from the footer**, grouped by city.
- Each city+service page cross-links **the same service in neighbouring cities** —
  the missing link that left the pages in isolated per-city clusters.
- Sibling-article selection now **rotates cyclically** instead of `slice(0, 3)`.
- Related-article padding rotates by a deterministic per-key offset.
- **28 real in-body contextual links** from blog posts to matching service and
  city pages, via a `linkify` pass. Each target is linked once at its first
  mention. Every anchor phrase is verified to exist in the prose it links from.

### 3. Content depth
All 14 city+service pages expanded from **271–326** to **719–920** body words,
keeping the existing local detail. New material is housing-stock specific and
carries the HVAC consequence, e.g. post-war bungalows sized for oversized
furnaces in Welland; orphaned water heaters on masonry chimneys in
St. Catharines; duplex condensers ingesting each other's discharge air in
Niagara Falls; brick thermal mass misread as a failing AC in Port Colborne;
tight new builds with unchanged latent load in Fonthill; propane vapour
pressure mimicking a failed gas valve in Wainfleet.

Peak cross-page similarity after expansion: **0.062** — still far below the
templating threshold. **No reviews, testimonials, job counts, certifications,
awards or customer names were invented.**

### 4. Titles and descriptions
Titles now lead with the phrasing people actually search — "Air Conditioner
Repair Welland", not "AC Repair in Welland" — carry a reason to click, and fit
under 60 characters.

| Before | After |
|---|---|
| 10 titles over 60 chars | **0** |
| 18 descriptions over 155 chars | **0** |
| 18 descriptions with no phone number | **0** |

All 17 blog posts were rewritten too, despite ranking lower on the brief: they
carry nearly all current impressions, so their CTR is worth more today than any
money page's, and not one description contained the phone number.

**Homepage brand**, so `fixair` resolves to us: title leads with the exact brand
name; the H1 **contained no brand token at all** and now does; brand spelling
normalised (17 × `FixAIR` → `FixAir`) to match the logo alt text, `BUSINESS.name`
and the schema.

### 5. Geographic signal
Coordinates for the Welland base plus a **50 km GeoCircle** `areaServed`
alongside the existing named region. 50 km reaches every city actually served
(St. Catharines ~25 km, Niagara Falls ~25 km, Dunnville ~35 km, Caledonia
~50 km) and stops short of the towns we were wrongly surfaced for —
Campbellville and Lowville sit ~65–75 km out; Alliston, Stayner, Inverary,
Rockland, Casselman and Noelville far beyond.

Verified **all 49 pages already name Niagara in body copy**, so no copy changes
were needed. No pages or copy were added for towns we do not serve.

> Honest caveat: I do not expect this to fix the junk impressions on its own.
> `areaServed` is a weak relevance input and Google largely ignores it for local
> ranking. Those impressions are more likely a symptom of thin pages and low
> authority producing loose matches — which sections 2 and 3 address directly.
> Expect them to fade as relevance improves, not because of this schema.

### 6. Schema
- Business node typed `['HVACBusiness', 'Organization']` with an `@id`, so one
  node fills both roles rather than describing the company twice. `WebSite`
  references it by `@id` instead of restating it.
- `sameAs` (Facebook, Instagram, Google Maps) and `openingHours` were already
  present and correct.
- **Removed `aggregateRating` (5.0 / 28) and six `Review` objects** from the
  homepage — see below.
- Verified **all 130 FAQPage entries across the site render as visible text** on
  their own page. No invisible FAQ markup.

### 7. Mobile
The click-to-call bar and poster preloads already existed. What was actually
costing conversions:

- **Form inputs were 14px**, so iOS Safari zoomed the page on focus on every
  field of the quote form. Now 16px on mobile, which also takes controls to
  ~48px, clearing the tap-target minimum.
- **The 1.6 MB hero video defeated `preload="none"`** because the hero is above
  the fold and intersected immediately. Loading deferred to after load + idle.
- **Both video posters downloaded on every device**, since both `<video>`
  elements are always in the DOM. Poster moved to a breakpoint-scoped CSS
  background so only the matching file is fetched.
- **784 KB of oversized images**: `redleaf.png` was a 980×980, 268 KB PNG
  rendered at 20 px; the header logo was 2064 px wide at 360 KB rendered at
  ~166 px.
- Body padding now tracks `safe-area-inset-bottom` so the footer is not left
  under the call bar on notched phones.

Phone number is selectable text everywhere and appears in no image.

---

## What still needs you

### Blocking, and worth more than everything above combined

**The Cloudflare 530.** `http://fixairheatandcool.ca` returns error 1016
(Origin DNS error). This is the URL Google ranks at **position 5.0** while the
canonical sits at 48.3. It is a dashboard change (nameservers `joan` /
`mark.ns.cloudflare.com`):

1. Point the apex `fixairheatandcool.ca` record at the same origin as `www` —
   1016 means its current target does not resolve.
2. Turn on **Always Use HTTPS** zone-wide so `http://apex` is 301'd at the edge
   and never reaches origin.
3. Make the apex redirect rule scheme-agnostic — it currently fires on HTTPS
   but not HTTP.

I could not do this: the Chrome extension was not connected, and I cannot enter
credentials.

### Decision needed

**Visible review claims.** I removed the review *schema* per your instruction.
Still present as **visible copy**, which I did not touch:
- `"5.0★ on Google"` trust badge in `ServicePage`, `LocationPage`, `CityServicePage`
- `"5.0 ★ · 28 reviews"` in `LocationPage.jsx`
- The six named testimonials in `Testimonials.jsx`

If the live Google profile supports 5.0 / 28, these are fine as-is. If not, they
should change — same reasoning that removed the schema.

### Facts I could not verify — marked `TODO` in code

`grep -rn TODO src/`

| Where | Question |
|---|---|
| `cityServices.js:631` | **Does Tom service oil-fired equipment, or refer it out?** This is a service claim on the Wainfleet page — the most important of these. |
| `cityServices.js:685` | How far into Haldimand County will he travel, and what response window? Dunnville and Caledonia are very different distances. |
| `cityServices.js:131` | "Roughly a half-hour" drive to St. Catharines is my estimate, not verified. |
| `cityServices.js:80` | Does he want an explicit same-day commitment stated for Welland AC? |
| `cityServices.js:231` | Does he want an explicit drive-time figure for Niagara Falls? |
| `cityServices.js:433` | Worth mentioning propane delivery scheduling in Fenwick / North Pelham? |
| `business.js:31` | Confirm the Welland coordinates against the GBP listing. |

**Street names** used in the new copy (Niagara St, Lincoln St, Ontario St,
St. Paul St, Portage Rd, Drummond Rd, Rice Rd, West St, Sugarloaf St, Ormond St,
Front St) are real arterials, but **Tom should skim them** — he will spot
instantly if any reference does not match how locals describe an area.

### Not done

Nothing else in the brief was skipped. Task 6 was completed as specified, with
the effectiveness caveat noted above rather than left implied.
