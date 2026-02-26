---
layout: page
title: Contact Mifras
description: >
  Get in touch with Mifras to plan your Sri Lanka private driver tour. WhatsApp,
  phone, or email — I'll get back to you quickly with a personalised itinerary.
permalink: /contact/
---

<section class="section" aria-labelledby="contact-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Get in Touch</span>
      <h2 id="contact-heading">Contact Mifras</h2>
      <p class="section-subtitle">
        Ready to plan your Sri Lanka adventure? Reach out via WhatsApp for the
        fastest response, or use the form below and I'll reply within 24 hours.
      </p>
    </div>

    <div class="contact-layout">
      <!-- Contact methods -->
      <div class="contact-info">
        <h3>Contact Details</h3>

        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20enquire%20about%20a%20Sri%20Lanka%20tour"
           class="contact-method contact-method--whatsapp"
           target="_blank"
           rel="noopener"
           aria-label="Chat on WhatsApp">
          <span class="contact-method__icon" aria-hidden="true">💬</span>
          <div class="contact-method__details">
            <span class="contact-method__label">WhatsApp (Fastest)</span>
            <span class="contact-method__value">{{ site.driver.whatsapp_display }}</span>
            <span class="contact-method__note">Typically replies within 2 hours</span>
          </div>
        </a>

        <a href="tel:{{ site.driver.phone | remove: ' ' }}"
           class="contact-method"
           aria-label="Call Mifras">
          <span class="contact-method__icon" aria-hidden="true">📞</span>
          <div class="contact-method__details">
            <span class="contact-method__label">Phone / Call</span>
            <span class="contact-method__value">{{ site.driver.phone }}</span>
          </div>
        </a>

        <a href="mailto:{{ site.driver.email }}"
           class="contact-method"
           aria-label="Email Mifras">
          <span class="contact-method__icon" aria-hidden="true">✉️</span>
          <div class="contact-method__details">
            <span class="contact-method__label">Email</span>
            <span class="contact-method__value">{{ site.driver.email }}</span>
          </div>
        </a>

        <div class="contact-method" aria-label="Location">
          <span class="contact-method__icon" aria-hidden="true">📍</span>
          <div class="contact-method__details">
            <span class="contact-method__label">Based In</span>
            <span class="contact-method__value">{{ site.driver.location }}</span>
          </div>
        </div>

        <div class="contact-tip">
          <strong>💡 Tip:</strong> WhatsApp is the best way to reach me quickly.
          Send me your travel dates, number of people, and the places you'd love to see —
          I'll come back to you with a personalised itinerary and quote.
        </div>
      </div>

      <!-- Contact form (Formspree or similar) -->
      <div class="contact-form-wrapper">
        <h3>Send a Message</h3>
        <form class="contact-form"
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              novalidate
              aria-label="Contact form">

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="name">Your Name *</label>
              <input class="form-input"
                     type="text"
                     id="name"
                     name="name"
                     required
                     autocomplete="name"
                     placeholder="Jane Smith">
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email Address *</label>
              <input class="form-input"
                     type="email"
                     id="email"
                     name="email"
                     required
                     autocomplete="email"
                     placeholder="jane@example.com">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="travel-dates">Travel Dates</label>
              <input class="form-input"
                     type="text"
                     id="travel-dates"
                     name="travel-dates"
                     placeholder="e.g. 15–22 April 2025">
            </div>
            <div class="form-group">
              <label class="form-label" for="group-size">Group Size</label>
              <input class="form-input"
                     type="text"
                     id="group-size"
                     name="group-size"
                     placeholder="e.g. 2 adults">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="service">Service Interested In</label>
            <select class="form-input" id="service" name="service">
              <option value="">— Please select —</option>
              <option value="airport-transfer">Airport Transfer</option>
              <option value="day-trip">Day Trip</option>
              <option value="3-day-tour">3-Day Cultural Triangle Tour</option>
              <option value="5-day-tour">5-Day Highlights Tour</option>
              <option value="7-day-tour">7-Day Island Explorer</option>
              <option value="custom">Custom / Not Sure Yet</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Your Message *</label>
            <textarea class="form-input form-textarea"
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your trip — where you'd like to go, what you'd like to see, any special requirements..."></textarea>
          </div>

          <button class="btn btn--primary btn--lg" type="submit">
            Send Message
          </button>

          <p class="form-note">
            * Required fields. I'll reply within 24 hours, usually much sooner.
            For urgent enquiries, please WhatsApp me directly.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
.contact-layout {
  display: grid;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr 1.4fr;
    align-items: start;
  }
}

.contact-info h3,
.contact-form-wrapper h3 {
  margin-bottom: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e8e4de;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

a.contact-method:hover {
  border-color: #1a6b7a;
  box-shadow: 0 2px 12px rgba(26,107,122,0.12);
}

.contact-method--whatsapp {
  border-color: #25d366;
  background: #f0fdf4;
}

.contact-method--whatsapp:hover {
  border-color: #1da851 !important;
}

.contact-method__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-method__details {
  display: flex;
  flex-direction: column;
}

.contact-method__label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #777;
  margin-bottom: 0.15rem;
}

.contact-method__value {
  font-weight: 600;
  color: #1c1c1e;
  font-size: 1rem;
}

.contact-method__note {
  font-size: 0.8rem;
  color: #1da851;
  margin-top: 0.15rem;
}

.contact-tip {
  background: #fef3e2;
  border: 1px solid #f4d9a8;
  border-radius: 10px;
  padding: 1rem;
  font-size: 0.88rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-top: 1rem;
}

.form-row {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 480px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.form-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #1c1c1e;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #e8e4de;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #1c1c1e;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

.form-input:focus {
  outline: none;
  border-color: #1a6b7a;
  box-shadow: 0 0 0 3px rgba(26,107,122,0.15);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
}

.form-note {
  font-size: 0.82rem;
  color: #777;
  margin-top: 1rem;
  margin-bottom: 0;
}
</style>
