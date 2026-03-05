---
layout: page
title: Testimonials
description: >
  Real reviews from real travellers who explored Sri Lanka with Mifras as their
  private driver and guide. Read what they have to say about their experiences.
permalink: /testimonials/
---

<section class="section" aria-labelledby="reviews-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Real Reviews</span>
      <h2 id="reviews-heading">What Travellers Say</h2>
      <p class="section-subtitle">
        Satisfied tourists from around the world.
      </p>
    </div>

    <div class="grid-3">
      {% for review in site.data.testimonials %}
      <article class="testimonial-card" aria-label="Review by {{ review.name }}">
        <div class="testimonial-stars" aria-label="{{ review.rating }} out of 5 stars">
          {% assign stars = review.rating | times: 1 %}
          {% for i in (1..stars) %}★{% endfor %}
        </div>
        <p class="testimonial-text">"{{ review.text }}"</p>
        <div class="testimonial-author">
          <div class="author-avatar" aria-hidden="true">{{ review.name | slice: 0 }}</div>
          <div class="author-info">
            <span class="author-name">{{ review.name }}</span>
            <span class="author-meta">{% if review.country %}{{ review.country }} · {% endif %}{{ review.date }}</span>
          </div>
        </div>
        {% if review.tour %}
        <div class="testimonial-tour">Tour: <span>{{ review.tour }}</span></div>
        {% endif %}
        {% if review.source == "tripadvisor" %}
        <div class="testimonial-source">
          {% if review.url %}
          <a href="{{ review.url }}" target="_blank" rel="noopener" aria-label="View this review on TripAdvisor">
          {% endif %}
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#34E0A1"/>
            <circle cx="16" cy="16" r="8" fill="white"/>
            <circle cx="16" cy="16" r="4" fill="#34E0A1"/>
          </svg>
          <span>View on TripAdvisor</span>
          {% if review.url %}</a>{% endif %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--light" aria-labelledby="write-review-heading">
  <div class="container" style="max-width: 640px; margin: 0 auto; text-align: center;">
    <span class="section-label">Travelled With Mifras?</span>
    <h2 id="write-review-heading" style="margin-bottom: 1rem;">Share Your Experience</h2>
    <p>
      If you've travelled with Mifras and enjoyed your tour, we'd love to hear about it!
      Your review helps other travellers plan their Sri Lanka adventure with confidence.
    </p>
    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20leave%20a%20review"
         class="btn btn--primary btn--lg"
         target="_blank"
         rel="noopener">
        💬 Share on WhatsApp
      </a>
    </div>
  </div>
</section>

<section class="cta-banner" aria-label="Book your tour">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Ready to Create Your Own Story?</h2>
      <p>Join hundreds of happy travellers. Book your private Sri Lanka tour today.</p>
      <div class="cta-banner__actions">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20book%20a%20tour%20in%20Sri%20Lanka"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 Book Your Tour
        </a>
        <a href="{{ '/itinerary/' | relative_url }}" class="btn btn--outline-white btn--lg">
          View Itineraries
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.testimonial-source {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  font-size: 0.78rem;
  color: #777;
  font-weight: 500;
}
</style>
