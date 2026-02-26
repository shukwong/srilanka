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
        Over 500 satisfied tourists from around the world. Here are some of their stories.
      </p>
    </div>

    <!-- Rating summary -->
    <div class="rating-summary" aria-label="Overall rating summary">
      <div class="rating-score">
        <span class="score-number">5.0</span>
        <div class="score-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <span class="score-label">Overall Rating</span>
      </div>
      <div class="rating-breakdown">
        <div class="rating-row">
          <span>Service</span>
          <div class="rating-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div style="width:100%"></div></div>
          <span>5.0</span>
        </div>
        <div class="rating-row">
          <span>Value</span>
          <div class="rating-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div style="width:100%"></div></div>
          <span>5.0</span>
        </div>
        <div class="rating-row">
          <span>Communication</span>
          <div class="rating-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div style="width:100%"></div></div>
          <span>5.0</span>
        </div>
        <div class="rating-row">
          <span>Reliability</span>
          <div class="rating-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div style="width:100%"></div></div>
          <span>5.0</span>
        </div>
      </div>
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
            <span class="author-meta">{{ review.country }} · {{ review.date }}</span>
          </div>
        </div>
        {% if review.tour %}
        <div class="testimonial-tour">Tour: <span>{{ review.tour }}</span></div>
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
.rating-summary {
  display: grid;
  gap: 2rem;
  align-items: center;
  background: #f8f7f4;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .rating-summary {
    grid-template-columns: auto 1fr;
  }
}

.rating-score {
  text-align: center;
}

.score-number {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a6b7a;
  line-height: 1;
}

.score-stars {
  color: #f4a621;
  font-size: 1.5rem;
  margin: 0.25rem 0;
}

.score-label {
  font-size: 0.82rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.rating-row {
  display: grid;
  grid-template-columns: 120px 1fr 36px;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.rating-bar {
  height: 8px;
  background: #e8e4de;
  border-radius: 999px;
  overflow: hidden;
}

.rating-bar div {
  height: 100%;
  background: #f4a621;
  border-radius: 999px;
}
</style>
