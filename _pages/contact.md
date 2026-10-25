---
layout: page
title: Contact Mifras — Sri Lanka Private Driver Quote
heading: Check Availability & Get a Quote
description: >
  Plan a Sri Lanka private tour or airport transfer with Mifras. Prepare your
  trip details for WhatsApp or call +94 74 043 0425 to discuss your plans.
permalink: /contact/
---

<section class="section" aria-labelledby="contact-heading">
  <div class="container contact-layout">
    <div>
      <span class="section-label">Talk Directly With Your Driver</span>
      <h2 id="contact-heading">Tell Me About Your Trip</h2>
      <p>A rough plan is enough to start. Share your dates, group size, and the places you'd love to see, and we can work out a route and price together.</p>
      <div class="contact-actions">
        <a class="btn btn--primary" href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20Sri%20Lanka%20trip" target="_blank" rel="noopener" data-contact-location="contact-direct">Chat on WhatsApp</a>
        <a class="btn btn--outline-dark" href="tel:{{ site.driver.phone | remove: ' ' }}" data-contact-location="contact-direct">Call {{ site.driver.phone }}</a>
      </div>
      <p>Local time zone: Sri Lanka (UTC+5:30). If I'm driving or with guests, I may reply later.</p>
      <h3>What Happens Next?</h3>
      <ol class="contact-steps">
        <li>Send your trip details to ask about availability.</li>
        <li>Discuss the route, vehicle needs, total price, and what's included.</li>
        <li>Agree payment and cancellation terms and receive confirmation directly from Mifras before treating the trip as booked.</li>
      </ol>
      <p>Need ideas first? Browse <a href="{{ '/itinerary/' | relative_url }}">3, 5, and 7-day itineraries</a>, <a href="{{ '/airport-transfers/' | relative_url }}">airport transfers</a>, or <a href="{{ '/destinations/' | relative_url }}">destinations</a>.</p>
    </div>
    <div class="quote-panel">
      <h2>Prepare Your WhatsApp Enquiry</h2>
      <p>Fill in what you know. You'll review the message in WhatsApp and press send there. This is an enquiry, not a confirmed reservation.</p>
      <noscript><p>Use the WhatsApp or call buttons above to contact Mifras. Include your travel dates, passengers, pickup location, and destinations.</p></noscript>
      <form id="quote-form" data-whatsapp="{{ site.driver.whatsapp }}" hidden>
        <label for="quote-service">What are you planning?</label>
        <select id="quote-service" name="service">
          <option value="Private tour">Private tour</option>
          <option value="Airport transfer">Airport transfer</option>
          <option value="Day trip">Day trip</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
        <label for="quote-dates">Travel dates or approximate month</label>
        <input id="quote-dates" name="dates" type="text" maxlength="120" placeholder="e.g. 10–17 January, or not sure yet">
        <div class="quote-grid">
          <div><label for="quote-adults">Adults</label><input id="quote-adults" name="adults" type="number" min="1" max="99" step="1" inputmode="numeric" value="2" required></div>
          <div><label for="quote-children">Children</label><input id="quote-children" name="children" type="number" min="0" max="99" step="1" inputmode="numeric" value="0" required></div>
        </div>
        <label for="quote-pickup">Pickup location</label>
        <input id="quote-pickup" name="pickup" type="text" maxlength="200" placeholder="e.g. Colombo airport or your hotel">
        <label for="quote-plans">Destinations, trip length, or interests</label>
        <textarea id="quote-plans" name="plans" rows="4" maxlength="1200" placeholder="e.g. 7 days with Sigiriya, Kandy, Ella, and time for local food"></textarea>
        <label for="quote-flight">Flight details (for airport transfers)</label>
        <input id="quote-flight" name="flight" type="text" maxlength="200" placeholder="Flight number, arrival date and time, if known">
        <label for="quote-needs">Luggage and other requests</label>
        <textarea id="quote-needs" name="needs" rows="3" maxlength="600" placeholder="e.g. 2 suitcases, children's ages, child-seat or mobility requests"></textarea>
        <p class="quote-note">Details are added to a WhatsApp link when you continue. Please leave out passport and payment details. Passenger numbers and requests are subject to confirmation.</p>
        <button class="btn btn--primary" type="submit">Continue to WhatsApp</button>
      </form>
    </div>
  </div>
</section>
