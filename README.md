# Mifras — Sri Lanka Private Driver

Jekyll website with a GitHub Pages deployment workflow in `.github/workflows/deploy.yml` that runs when changes reach `main`. Cloudflare is configured outside this repository; check its dashboard for any additional build or domain settings.

## Run locally

Use Ruby 3.2, matching the deployment workflow:

```sh
bundle install
JEKYLL_ENV=production bundle exec jekyll build
bundle exec jekyll serve
```

## Contact and enquiries

- Update the phone number and WhatsApp number together in `_config.yml`.
- `/contact/` prepares a message locally and opens WhatsApp. The visitor must send the message there; it does not submit a reservation or store a lead on this site.
- Without JavaScript, the page still provides direct WhatsApp and phone links.
- Airport transfer buttons use `/contact/?service=airport-transfer` to select that service.
- There is no email inbox, form backend, payment integration, or live availability system configured.

## Analytics

The production build loads the GA4 measurement ID in `_config.yml`. Verify receipt of events in the property's Realtime/DebugView tools after deployment.

`assets/js/main.js` emits `contact_click` for WhatsApp links, phone links, and the quote form's handoff to WhatsApp. Parameters are `contact_channel`, `contact_location`, and `page_path`. Register the first two as event-scoped custom dimensions in GA4 to use them in reports. These custom events do not contain enquiry text, dates, flight details, or passenger counts. A click is not evidence of a sent message or confirmed booking.

Use tagged inbound website links on social profiles to distinguish traffic sources. Record confirmed bookings separately; this static site cannot observe what happens in WhatsApp.

## Owner details to confirm before publishing them

- Passenger and luggage capacity; child-seat availability.
- Payment methods, deposits, and cancellation terms.
- Quote inclusions, exclusions, and any distance/time limits.
- Preferred public booking email, if email enquiries should be added.
- Current licensing, insurance, response hours, and numerical homepage claims.
- Relationship with the company hosting the existing Tripadvisor reviews.

The unpublished FAQ placeholders are in `_data/faqs.yml`. Replace them with confirmed facts before uncommenting; do not publish bracketed placeholders.

## Profiles and reviews

The Facebook, Instagram, and Tripadvisor URL fields in `_config.yml` remain blank until real profiles are supplied. They control footer links and structured-data profile references. Do not assign another company's listing as Mifras's own profile.

Set up eligible Google Business and Tripadvisor profiles, WhatsApp Business, and consistent Instagram/Facebook accounts. Add direct public review links once the correct profiles exist. Account creation and verification are separate from website changes.
