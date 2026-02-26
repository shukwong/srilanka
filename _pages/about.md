---
layout: page
title: About Mifras
description: >
  Meet Mifras — your trusted Sri Lanka private driver and guide with 10+ years
  of experience showing travellers the very best of this beautiful island.
permalink: /about/
---

<section class="section" aria-labelledby="about-heading">
  <div class="container">
    <div class="about-intro">
      <div class="about-intro__image">
        <div class="photo-placeholder" aria-label="Photo of Mifras, Sri Lanka private driver">
          <span style="font-size: 5rem;" aria-hidden="true">🚗</span>
          <p style="margin-top: 1rem; color: var(--color-text-light, #777);">Mifras — Your Driver</p>
        </div>
      </div>
      <div class="about-intro__content">
        <span class="section-label">Your Driver &amp; Guide</span>
        <h2 id="about-heading">Hello, I'm Mifras</h2>
        <p>
          Born and raised in Sri Lanka, I've spent my entire life exploring every
          corner of this magnificent island — from the ancient ruins of the Cultural
          Triangle to the misty peaks of the central highlands and the sun-kissed
          beaches of the south coast.
        </p>
        <p>
          For over {{ site.driver.experience_years }} years I've had the privilege of
          showing travellers from around the world the real Sri Lanka — not just the
          famous sights, but the hidden temples, the family-run tea shacks, the secret
          viewpoints, and the warmth of the people who make this country so special.
        </p>
        <p>
          I speak fluent English (as well as Sinhala and Tamil), hold a government
          tourist driver licence, and operate a clean, air-conditioned vehicle at all times.
          My goal is simple: to give you the holiday you've dreamed of, with the comfort
          and reliability of having a trusted local by your side.
        </p>
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka"
           class="btn btn--primary"
           target="_blank"
           rel="noopener">
          💬 Say Hello on WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section section--light" aria-labelledby="credentials-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Why Trust Me</span>
      <h2 id="credentials-heading">My Credentials</h2>
    </div>
    <div class="grid-3">
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">📜</span>
        <h3>{{ site.driver.license }}</h3>
        <p>Fully licensed by the Sri Lanka Tourism Development Authority to operate tourist transport services island-wide.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">🗓️</span>
        <h3>{{ site.driver.experience_years }}+ Years Experience</h3>
        <p>Over a decade of professional experience driving tourists safely across every region of Sri Lanka.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">🌐</span>
        <h3>{{ site.driver.languages | join: ", " }}</h3>
        <p>Fluent communication in English ensures you never feel lost or misunderstood throughout your journey.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">🚐</span>
        <h3>Premium Vehicle</h3>
        <p>{{ site.driver.vehicle }} — always clean, serviced, insured, and equipped with chargers and first aid.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">⭐</span>
        <h3>500+ Happy Tourists</h3>
        <p>Hundreds of 5-star reviews from travellers across Europe, USA, Australia, Asia, and beyond.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon" aria-hidden="true">📍</span>
        <h3>Based in {{ site.driver.location }}</h3>
        <p>Centrally located for easy airport transfers and day trips across the entire island.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="values-heading">
  <div class="container" style="max-width: 720px;">
    <span class="section-label">My Promise to You</span>
    <h2 id="values-heading" style="margin-bottom: 1.5rem;">What You Can Always Expect</h2>

- **Punctuality** — I'll be waiting when you arrive, no matter the hour
- **Transparency** — No hidden fees, no commission arrangements with shops or restaurants
- **Flexibility** — Your holiday, your pace; itineraries can change on the fly
- **Safety** — Careful, experienced driving on Sri Lanka's varied road conditions
- **Local knowledge** — The best local food spots, hidden viewpoints, and cultural insights
- **24/7 availability during your trip** — I'm always reachable if you need anything

> "My goal is not just to drive you — it's to make sure Sri Lanka exceeds every expectation you had when you booked your flight."
> — Mifras

  </div>
</section>

<section class="cta-banner" aria-label="Contact call to action">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Ready to Explore Together?</h2>
      <p>Message me on WhatsApp with your travel dates and ideas — I'll respond quickly.</p>
      <div class="cta-banner__actions">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27m%20planning%20a%20trip%20to%20Sri%20Lanka"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 WhatsApp Mifras
        </a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn--outline-white btn--lg">
          Send a Message
        </a>
      </div>
    </div>
  </div>
</section>
