---
layout: page
title: Sri Lanka Travel Blog
description: >
  Insider tips, destination guides, and travel inspiration from Mifras —
  your trusted local private driver and guide in Sri Lanka.
permalink: /blog/
---

<section class="section" aria-labelledby="blog-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Local Insights</span>
      <h2 id="blog-heading">Sri Lanka Travel Tips &amp; Guides</h2>
      <p class="section-subtitle">
        Insider knowledge from a local guide — everything you need to make the most of your Sri Lanka adventure.
      </p>
    </div>

    {% if site.posts.size > 0 %}
      <div class="blog-grid">
        {% for post in site.posts %}
          <article class="blog-card">
            <div class="blog-card__body">
              {% if post.category %}
                <span class="blog-card__category">{{ post.category }}</span>
              {% endif %}
              <h3 class="blog-card__title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
              <p class="blog-card__excerpt">
                {{ post.excerpt | strip_html | truncatewords: 30 }}
              </p>
              <div class="blog-card__footer">
                <time class="blog-card__date" datetime="{{ post.date | date_to_xmlschema }}">
                  {{ post.date | date: "%B %-d, %Y" }}
                </time>
                {% if post.read_time %}
                  <span class="blog-card__read-time">{{ post.read_time }} min read</span>
                {% endif %}
              </div>
              <a href="{{ post.url | relative_url }}" class="blog-card__link btn btn--outline btn--sm">
                Read Article →
              </a>
            </div>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <p class="blog-empty">Articles coming soon — check back shortly for local travel tips and destination guides.</p>
    {% endif %}
  </div>
</section>

<section class="cta-banner" aria-label="Contact call to action">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Have a Question About Sri Lanka?</h2>
      <p>Ask Mifras directly on WhatsApp — he's happy to share local advice even before you book.</p>
      <div class="cta-banner__actions">
        <a href="https://wa.me/{{ site.driver.whatsapp }}?text=Hello%20Mifras%2C%20I%20have%20a%20question%20about%20travelling%20in%20Sri%20Lanka"
           class="btn btn--white btn--lg"
           target="_blank"
           rel="noopener">
          💬 Ask Mifras on WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
