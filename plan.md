# SEO Optimization Plan — Mifras Sri Lanka Private Driver Website

## Current State
The site is a well-structured Jekyll static site with basic SEO fundamentals (meta tags, canonical URLs, OG tags, sitemap, robots.txt, Google Search Console verification). The biggest gaps are **missing structured data (JSON-LD)**, **duplicate meta tags**, **no OG image**, and a **mismatched sitemap URL**.

---

## Implementation Steps (Ordered by Impact)

### Step 1: Fix `robots.txt` — Sitemap URL Mismatch
**File**: `robots.txt`
- Make it a Liquid template so the sitemap URL dynamically matches `_config.yml`
- Currently points to `mifrasdrivesrilanka.com` but site lives at `shukwong.github.io/srilanka`

### Step 2: Add LocalBusiness JSON-LD Schema (site-wide)
**New file**: `_includes/schema-local-business.html`
**Modify**: `_layouts/default.html` (include it before `</body>`)
- `@type: LocalBusiness` with name, phone, URL, image, description, address (country-level), geo coordinates, area served, price range
- Include `aggregateRating` computed from testimonials data (all 5-star reviews)
- This enables Google's local business panel and star ratings in search results

### Step 3: Add FAQPage JSON-LD Schema
**New file**: `_includes/schema-faq.html`
**Modify**: `_pages/faq.md` (include at bottom)
- Iterate over `site.data.faqs` to generate FAQPage schema
- Enables Google's FAQ rich results (expandable Q&A directly in search results)
- High impact: 12 existing Q&A pairs = significant SERP real estate

### Step 4: Add Review/AggregateRating JSON-LD Schema
**New file**: `_includes/schema-reviews.html`
**Modify**: `_pages/testimonials.md` (include at bottom)
- Output individual `Review` objects with author, rating, review text
- Only include reviews that have text content (not screenshot-only)
- Enables star rating snippets in Google search results

### Step 5: Add OG Image + Social Sharing Tags
**File**: `_includes/head.html`
- Add `og:image`, `og:image:alt`, `og:image:width`, `og:image:height`
- Add `twitter:image`
- Use existing `/assets/images/mifras_with_van.jpg`
- Improves appearance when shared on WhatsApp, Facebook, etc.

### Step 6: Clean Up Duplicate Meta Tags in `head.html`
**File**: `_includes/head.html`
- The `{% seo %}` plugin already generates title, description, canonical, OG, and Twitter tags
- Remove manually duplicated tags to avoid confusing search engines
- Keep only supplementary tags (geo, OG image, custom additions)

### Step 7: Enhance `_config.yml` for `jekyll-seo-tag` Plugin
**File**: `_config.yml`
- Add `tagline`, `logo`, `social.name`
- Add `webmaster_verifications.google` (supplements the HTML verification file)
- This lets the plugin auto-generate richer metadata

### Step 8: Optimize Page Titles & Descriptions
**Files**: All pages in `_pages/` + `index.html`
- Current titles are too generic (e.g., "Services", "Testimonials", "FAQ")
- Add keyword-rich titles targeting tourist search queries:
  - Services → "Private Driver Services in Sri Lanka | Tours, Transfers & Day Trips"
  - Itinerary → "Sri Lanka Tour Itineraries | 3, 5 & 7-Day Private Tours"
  - FAQ → "FAQ | Booking a Private Driver in Sri Lanka"
  - Testimonials → "Traveller Reviews | Sri Lanka Private Driver"
  - About → "About Mifras | Sri Lanka Private Driver & Guide"

### Step 9: Add Geo/Location Meta Tags
**File**: `_includes/head.html`
- Add `geo.region`, `geo.placename`, `geo.position`, `ICBM` meta tags
- Reinforces geographic relevance for location-based searches

### Step 10: Add Service Schema to Services Page
**New file**: `_includes/schema-services.html`
**Modify**: `_pages/services.md`
- Output `Service` schema objects from `site.data.services`
- Each service with name, description, provider reference, area served

### Step 11: Add Google Analytics (GA4) Placeholder
**New file**: `_includes/google-analytics.html`
**Modify**: `_layouts/default.html` and `_config.yml`
- Add GA4 gtag.js snippet controlled by a `google_analytics` config key
- User fills in their GA4 measurement ID (G-XXXXXXXXXX)
- Only renders in production (not during local development)

---

## Files Changed Summary
| File | Action |
|------|--------|
| `robots.txt` | Fix sitemap URL (make dynamic) |
| `_includes/head.html` | Add OG image, geo tags, remove duplicate meta tags |
| `_includes/schema-local-business.html` | **New** — LocalBusiness JSON-LD |
| `_includes/schema-faq.html` | **New** — FAQPage JSON-LD |
| `_includes/schema-reviews.html` | **New** — Review/AggregateRating JSON-LD |
| `_includes/schema-services.html` | **New** — Service JSON-LD |
| `_includes/google-analytics.html` | **New** — GA4 tracking snippet |
| `_layouts/default.html` | Include LocalBusiness schema + GA4 |
| `_config.yml` | Add SEO plugin fields, GA4 placeholder |
| `_pages/about.md` | Update title & description |
| `_pages/services.md` | Update title & description, include schema |
| `_pages/itinerary.md` | Update title & description |
| `_pages/faq.md` | Update title & description, include schema |
| `_pages/testimonials.md` | Update title & description, include schema |
| `index.html` | Update description |

## Post-Implementation
- Validate structured data at https://search.google.com/test/rich-results
- Submit sitemap via Google Search Console
- Monitor Search Console for indexing and rich result status
