---
layout: page
title: Sample Itineraries
description: >
  Sample tour itineraries for 3, 5, and 7-day private driver tours across Sri Lanka.
  All tours are fully customisable to your dates, interests, and budget.
permalink: /itinerary/
---

<section class="section" aria-labelledby="itineraries-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Tour Plans</span>
      <h2 id="itineraries-heading">Sample Itineraries</h2>
      <p class="section-subtitle">
        These are starting points, not fixed plans. Every itinerary is customised
        to your interests, pace, and budget. See something you like? WhatsApp me
        and we'll tailor it specifically for you.
      </p>
    </div>

    {% for itinerary in site.data.itineraries %}
    <article class="itinerary-card" id="{{ itinerary.id }}" aria-labelledby="itin-{{ itinerary.id }}">
      <div class="itinerary-card__header">
        <span class="itinerary-icon" aria-hidden="true">{{ itinerary.icon }}</span>
        <div class="itinerary-card__meta">
          <h2 id="itin-{{ itinerary.id }}">{{ itinerary.title }}</h2>
          <div class="itinerary-badges">
            <span class="badge badge--duration">🗓️ {{ itinerary.duration }}</span>
            <span class="badge badge--price">From {{ itinerary.price_from }}</span>
          </div>
        </div>
      </div>

      <p class="itinerary-summary">{{ itinerary.summary }}</p>

      <div class="itinerary-days">
        {% for day in itinerary.days %}
        <div class="day-card">
          <div class="day-card__label">Day {{ day.day }}</div>
          <div class="day-card__content">
            <h3>{{ day.title }}</h3>
            <ul class="day-highlights">
              {% for highlight in day.highlights %}
              <li>{{ highlight }}</li>
              {% endfor %}
            </ul>
          </div>
        </div>
        {% endfor %}
      </div>

      <div class="itinerary-card__cta">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27m%20interested%20in%20the%20{{ itinerary.title | uri_escape }}%20itinerary"
           class="btn btn--primary"
           target="_blank"
           rel="noopener">
          💬 Book This Tour
        </a>
        <span class="itinerary-note">Starting from {{ itinerary.price_from }} · Fully customisable</span>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section section--light" aria-labelledby="custom-heading">
  <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
    <span class="section-label">Don't See What You Need?</span>
    <h2 id="custom-heading" style="margin-bottom: 1rem;">Build a Custom Itinerary</h2>
    <p>
      Have a specific bucket list? Want to mix wildlife, history, beaches, and local food?
      I'll design a completely bespoke tour around your interests, travel dates, and budget.
      No request is too unusual — I love a challenge!
    </p>
    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20a%20custom%20Sri%20Lanka%20itinerary"
         class="btn btn--primary btn--lg"
         target="_blank"
         rel="noopener">
        💬 Plan a Custom Tour
      </a>
      <a href="{{ '/contact/' | relative_url }}" class="btn btn--outline btn--lg">
        Send Your Requirements
      </a>
    </div>
  </div>
</section>

<style>
.itinerary-card {
  background: #fff;
  border: 1px solid #e8e4de;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.itinerary-card__header {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.itinerary-icon {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.itinerary-badges {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
}

.badge--duration {
  background: #e8f4f8;
  color: #1a6b7a;
}

.badge--price {
  background: #fef3e2;
  color: #a06020;
}

.itinerary-summary {
  color: #4a4a4a;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.itinerary-days {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.day-card {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1.25rem;
  align-items: start;
  background: #f8f7f4;
  border-radius: 10px;
  padding: 1.25rem;
}

.day-card__label {
  background: #1a6b7a;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.day-card__content h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.day-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.day-highlights li {
  font-size: 0.88rem;
  color: #4a4a4a;
  padding: 0.2rem 0;
  border-bottom: 1px solid #e8e4de;
  margin-bottom: 0;
}

.day-highlights li:last-child {
  border-bottom: none;
}

.itinerary-card__cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid #e8e4de;
}

.itinerary-note {
  font-size: 0.85rem;
  color: #777;
}

@media (max-width: 480px) {
  .day-card {
    grid-template-columns: 1fr;
  }
  .day-card__label {
    display: inline-block;
    width: auto;
    padding: 0.3rem 0.75rem;
  }
}
</style>
