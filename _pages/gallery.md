---
layout: page
title: Gallery
description: >
  Photos from across Sri Lanka — ancient temples, lush tea plantations, golden beaches,
  and incredible wildlife. These are the places you'll visit on your private tour.
permalink: /gallery/
---

<section class="section" aria-labelledby="gallery-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Sri Lanka in Photos</span>
      <h2 id="gallery-heading">Places You'll Visit</h2>
      <p class="section-subtitle">
        From ancient UNESCO World Heritage Sites to pristine beaches and misty highlands —
        Sri Lanka has an extraordinary variety of landscapes and experiences packed into
        one small island.
      </p>
    </div>

    <div class="gallery-grid gallery-grid--full">
      {% for photo in site.data.gallery %}
      <figure class="gallery-item" aria-label="{{ photo.caption }}">
        {% if photo.url %}
          <img src="{{ photo.url }}"
               alt="{{ photo.alt }}"
               loading="lazy"
               width="800"
               height="600">
        {% else %}
          <div class="gallery-placeholder">
            <span class="placeholder-icon">🏔️</span>
            <span>{{ photo.alt }}</span>
          </div>
        {% endif %}
        <div class="gallery-overlay">
          <figcaption class="gallery-caption">
            <strong>{{ photo.caption }}</strong>
            <span class="gallery-location">📍 {{ photo.location }}</span>
          </figcaption>
        </div>
      </figure>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--light" aria-labelledby="destinations-heading">
  <div class="container" style="max-width: 800px; margin: 0 auto;">
    <span class="section-label">Popular Destinations</span>
    <h2 id="destinations-heading" style="margin-bottom: 1.5rem;">25+ Destinations Across Sri Lanka</h2>
    <div class="destinations-grid">
      <div class="destination-region">
        <h3>🏛️ Cultural Triangle</h3>
        <ul>
          <li>Sigiriya Rock Fortress</li>
          <li>Dambulla Cave Temple</li>
          <li>Polonnaruwa Ancient City</li>
          <li>Anuradhapura Sacred City</li>
          <li>Minneriya Elephant Gathering</li>
        </ul>
      </div>
      <div class="destination-region">
        <h3>🏔️ Hill Country</h3>
        <ul>
          <li>Kandy &amp; Temple of the Tooth</li>
          <li>Nuwara Eliya Tea Country</li>
          <li>Ella Nine Arch Bridge</li>
          <li>Horton Plains / World's End</li>
          <li>Adam's Peak (Seasonal)</li>
        </ul>
      </div>
      <div class="destination-region">
        <h3>🌊 South &amp; West Coast</h3>
        <ul>
          <li>Galle Dutch Fort (UNESCO)</li>
          <li>Mirissa Beach &amp; Whale Watching</li>
          <li>Unawatuna Beach</li>
          <li>Hikkaduwa Coral Reef</li>
          <li>Bentota Watersports</li>
        </ul>
      </div>
      <div class="destination-region">
        <h3>🐆 Wildlife &amp; Nature</h3>
        <ul>
          <li>Yala National Park</li>
          <li>Udawalawe Elephants</li>
          <li>Pinnawala Elephant Orphanage</li>
          <li>Sinharaja Forest Reserve</li>
          <li>Bundala Bird Sanctuary</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="cta-banner" aria-label="Plan your tour">
  <div class="container">
    <div class="cta-banner__content">
      <h2>See These Places in Person</h2>
      <p>Any of these destinations can be included in your personalised tour. Just tell me what captures your imagination.</p>
      <div class="cta-banner__actions">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20love%20to%20visit%20these%20places%20in%20Sri%20Lanka"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 Plan Your Tour
        </a>
        <a href="{{ '/itinerary/' | relative_url }}" class="btn btn--outline-white btn--lg">
          View Itineraries
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.gallery-grid--full {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.gallery-location {
  display: block;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  opacity: 0.85;
}

.destinations-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.destination-region h3 {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #1a6b7a;
}

.destination-region ul {
  list-style: none;
  padding: 0;
}

.destination-region li {
  padding: 0.3rem 0;
  font-size: 0.9rem;
  color: #4a4a4a;
  border-bottom: 1px solid #e8e4de;
  margin-bottom: 0;
}

.destination-region li:last-child {
  border-bottom: none;
}
</style>
