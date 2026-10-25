---
layout: page
title: Colombo Airport Transfer — Private Driver from CMB
heading: Colombo Airport Transfers
description: >
  Private airport transfers at Colombo Bandaranaike International Airport (CMB)
  and Mattala Rajapaksa Airport (HRI) — 24/7 pick-up with flight tracking,
  meet & greet, and a fixed price agreed upfront.
permalink: /airport-transfers/
---

<section class="section" aria-labelledby="transfer-heading">
  <div class="container" style="max-width: 820px;">
    <span class="section-label">Start Your Trip Right</span>
    <h2 id="transfer-heading">Landing at Colombo Airport?</h2>
    <p>
      I provide private airport transfers at <strong>Bandaranaike International Airport (CMB)</strong>
      near Colombo and <strong>Mattala Rajapaksa Airport (HRI)</strong>, available 24/7.
      Send me your flight number when you book and I'll track your flight in real time —
      if it's delayed, I adjust the pick-up time at no extra charge.
    </p>
    <ul class="service-highlights">
      <li><strong>Meet &amp; greet</strong> — I'll be waiting at arrivals with a name board</li>
      <li><strong>Flight tracking</strong> — never worry about delays or early landings</li>
      <li><strong>Luggage assistance</strong> — from the terminal to the van</li>
      <li><strong>{{ site.driver.vehicle }}</strong> — clean, comfortable, and insured</li>
      <li><strong>Fixed price agreed upfront</strong> — no hidden fees, no meter surprises</li>
    </ul>
  </div>
</section>

<section class="section section--light" aria-labelledby="transfer-destinations-heading">
  <div class="container" style="max-width: 820px;">
    <h2 id="transfer-destinations-heading">Where Can I Take You From the Airport?</h2>
    <p>
      Anywhere in Sri Lanka. Common first stops include Negombo and Colombo hotels,
      Kandy, Sigiriya and the Cultural Triangle, and Galle and the south coast.
      An airport pick-up can also roll straight into a
      <a href="{{ '/itinerary/' | relative_url }}">multi-day tour</a> or a
      <a href="{{ '/services/' | relative_url }}#day-trips">day trip</a> — many guests
      combine their transfer with the first day of a tour.
    </p>
    <p>
      See <a href="{{ '/destinations/' | relative_url }}">where I can take you</a>, or check the
      <a href="{{ '/faq/' | relative_url }}">FAQ</a> for booking questions.
    </p>
  </div>
</section>

<section class="cta-banner" aria-label="Book your airport transfer">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Book Your Airport Pick-Up</h2>
      <p>Send me your flight number and arrival date on WhatsApp — I'll confirm your transfer with a fixed price.</p>
      <div class="cta-banner__actions">
        <a href="{{ '/contact/' | relative_url }}?service=airport-transfer" class="btn btn--outline-white btn--lg">Prepare Transfer Details</a>
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20book%20an%20airport%20transfer"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 Book on WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.service-highlights {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.5rem;
}

.service-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #4a4a4a;
  margin-bottom: 0;
}

.service-highlights li::before {
  content: "✓";
  color: #1a6b7a;
  font-weight: 700;
  flex-shrink: 0;
}
</style>
