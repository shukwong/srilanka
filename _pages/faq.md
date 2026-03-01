---
layout: page
title: Frequently Asked Questions
description: >
  Answers to common questions about booking my driving service in Sri Lanka — from
  pricing and vehicle types to booking process and travel tips.
permalink: /faq/
---

<section class="section" aria-labelledby="faq-heading">
  <div class="container" style="max-width: 820px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-label">Got Questions?</span>
      <h2 id="faq-heading">Frequently Asked Questions</h2>
      <p class="section-subtitle">
        Everything you need to know before booking your Sri Lanka private driver tour.
        Can't find the answer you're looking for? Just WhatsApp me directly.
      </p>
    </div>

    <div class="faq-list" role="list">
      {% for item in site.data.faqs %}
      <div class="faq-item" role="listitem">
        <button class="faq-item__question"
                aria-expanded="false"
                aria-controls="faq-answer-{{ forloop.index }}"
                id="faq-btn-{{ forloop.index }}">
          {{ item.question }}
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-item__answer"
             id="faq-answer-{{ forloop.index }}"
             aria-hidden="true"
             aria-labelledby="faq-btn-{{ forloop.index }}">
          <p>{{ item.answer }}</p>
        </div>
      </div>
      {% endfor %}
    </div>

    <div class="faq-contact" aria-label="Still have questions?">
      <h3>Still Have Questions?</h3>
      <p>
        I'm happy to answer any question — no matter how small — before you commit to
        booking. The fastest way to get an answer is via WhatsApp.
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%20have%20a%20question%20about%20booking%20a%20tour"
           class="btn btn--primary"
           target="_blank"
           rel="noopener">
          💬 Ask on WhatsApp
        </a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn--outline">
          Send a Message
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.faq-list {
  margin-bottom: 3rem;
}

.faq-item {
  border-bottom: 1px solid #e8e4de;
}

.faq-item__question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1c1c1e;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: inherit;
  transition: color 0.2s;
}

.faq-item__question:hover,
.faq-item__question[aria-expanded="true"] {
  color: #1a6b7a;
}

.faq-icon {
  font-size: 1.4rem;
  font-weight: 300;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  line-height: 1;
}

.faq-item__question[aria-expanded="true"] .faq-icon {
  transform: rotate(45deg);
}

.faq-item__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item__answer.is-open {
  max-height: 500px;
  padding-bottom: 1.25rem;
}

.faq-item__answer p {
  color: #4a4a4a;
  line-height: 1.75;
  margin: 0;
}

.faq-contact {
  background: #f8f7f4;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.faq-contact h3 {
  margin-bottom: 0.75rem;
}

.faq-contact p {
  color: #4a4a4a;
  max-width: 480px;
  margin: 0 auto;
}
</style>
