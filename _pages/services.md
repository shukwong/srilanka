---
layout: page
title: Services
description: >
  Private driver services across Sri Lanka — airport transfers, day trips,
  and multi-day tour packages tailored to your budget and interests.
permalink: /services/
---

<section class="section" aria-labelledby="services-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">What I Offer</span>
      <h2 id="services-heading">Tour &amp; Driver Services</h2>
      <p class="section-subtitle">
        All services include a clean, air-conditioned vehicle and an English-speaking
        driver with deep local knowledge. WhatsApp me for a personalised quote.
      </p>
    </div>

    {% for service in site.data.services %}
    <article class="service-detail" id="{{ service.id }}" aria-labelledby="service-{{ service.id }}">
      <div class="service-detail__header">
        <span class="service-icon-lg" aria-hidden="true">{{ service.icon }}</span>
        <div>
          <h2 id="service-{{ service.id }}">{{ service.title }}</h2>
        </div>
      </div>
      <p class="service-detail__description">{{ service.description }}</p>
      {% if service.highlights %}
      <ul class="service-highlights">
        {% for item in service.highlights %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      {% endif %}
      <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27m%20interested%20in%20your%20{{ service.title | uri_escape }}%20service"
         class="btn btn--primary"
         target="_blank"
         rel="noopener">
        💬 Enquire on WhatsApp
      </a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section section--light" aria-labelledby="whats-included-heading">
  <div class="container" style="max-width: 800px; margin: 0 auto;">
    <span class="section-label">All Services Include</span>
    <h2 id="whats-included-heading" style="margin-bottom: 1.5rem;">What's Always Included</h2>
    <div class="grid-2">
      <div>
        <h3 style="margin-bottom: 0.75rem;">✅ Always Included</h3>
        <ul>
          <li>Air-conditioned vehicle</li>
          <li>English-speaking driver/guide</li>
          <li>Fuel costs</li>
          <li>Parking fees</li>
          <li>Driver's meals and accommodation (on multi-day tours)</li>
          <li>24/7 WhatsApp support during your trip</li>
          <li>Flight tracking for airport transfers</li>
        </ul>
      </div>
      <div>
        <h3 style="margin-bottom: 0.75rem;">❌ Not Included</h3>
        <ul>
          <li>National park / site entry fees (paid at gate)</li>
          <li>Your meals and accommodation</li>
          <li>Jeep fees for national park safaris</li>
          <li>Optional activity costs (boat rides, cooking classes, etc.)</li>
          <li>Tipping (appreciated but never obligatory)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="cta-banner" aria-label="Book now call to action">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Get Your Personalised Quote</h2>
      <p>Every trip is different. Message me with your dates and ideas and I'll send you a tailored itinerary and price within hours.</p>
      <div class="cta-banner__actions">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20a%20quote%20for%20a%20Sri%20Lanka%20tour"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 Get a Quote on WhatsApp
        </a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn--outline-white btn--lg">
          Use the Contact Form
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.service-detail {
  border: 1px solid var(--color-border, #e8e4de);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
}

.service-detail__header {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.service-icon-lg {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.service-detail__description {
  color: #4a4a4a;
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.service-highlights {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

.grid-2 {
  display: grid;
  gap: 2rem;
}

@media (min-width: 640px) {
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
