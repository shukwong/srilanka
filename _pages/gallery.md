---
layout: page
title: Photo Gallery — Sri Lanka Private Driver Mifras
description: >
  Photos of Mifras with happy travellers at Sri Lanka's top tourist spots.
  Real moments from private tours — Sigiriya, Kandy, Ella and beyond.
permalink: /gallery/
---

<section class="section" aria-labelledby="gallery-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">On the Road</span>
      <h2 id="gallery-heading">Moments From Our Tours</h2>
      <p class="section-subtitle">
        Real memories from travellers exploring Sri Lanka with Mifras as their private driver.
      </p>
    </div>

    {% assign photos = site.data.gallery.photos %}
    {% if photos.size > 0 %}
    <div class="photo-grid">
      {% for photo in photos %}
      <button class="photo-tile"
              aria-label="View photo{% if photo.caption %}: {{ photo.caption }}{% endif %}"
              data-src="{{ photo.file | prepend: '/assets/images/gallery/' | relative_url }}"
              data-caption="{{ photo.caption | default: '' }}">
        <img src="{{ photo.file | prepend: '/assets/images/gallery/' | relative_url }}"
             alt="{{ photo.caption | default: 'Mifras with clients on tour in Sri Lanka' }}"
             loading="lazy">
        {% if photo.caption %}
        <span class="photo-caption" aria-hidden="true">{{ photo.caption }}</span>
        {% endif %}
      </button>
      {% endfor %}
    </div>
    {% else %}
    <p style="text-align:center; color:#777; padding:3rem 0;">Photos coming soon.</p>
    {% endif %}
  </div>
</section>

{% assign videos = site.data.gallery.videos %}
{% if videos.size > 0 %}
<section class="section section--light" aria-labelledby="videos-heading">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Watch & Explore</span>
      <h2 id="videos-heading">Tour Videos</h2>
      <p class="section-subtitle">A taste of what awaits on a private tour with Mifras.</p>
    </div>

    <div class="video-grid">
      {% for video in videos %}
      {% if video.youtube_id != "" %}
      <div class="video-embed">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/{{ video.youtube_id }}"
            title="{{ video.title | default: 'Sri Lanka tour video' }}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        {% if video.title %}
        <p class="video-title">{{ video.title }}</p>
        {% endif %}
      </div>
      {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
  <button class="lightbox__close" aria-label="Close">&times;</button>
  <button class="lightbox__prev" aria-label="Previous photo">&#8592;</button>
  <button class="lightbox__next" aria-label="Next photo">&#8594;</button>
  <div class="lightbox__content">
    <img src="" alt="" class="lightbox__img">
    <p class="lightbox__caption"></p>
  </div>
</div>

<section class="cta-banner" aria-label="Book your tour">
  <div class="container">
    <div class="cta-banner__content">
      <h2>Ready to Make Your Own Memories?</h2>
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
/* ── Photo grid ───────────────────────────────────────── */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .photo-grid { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
}

.photo-tile {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  border: none;
  background: #e8e4de;
  aspect-ratio: 4 / 3;
  display: block;
  width: 100%;
}

.photo-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.photo-tile:hover img,
.photo-tile:focus img {
  transform: scale(1.05);
}

.photo-tile:focus {
  outline: 3px solid #f4a621;
  outline-offset: 2px;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.6rem 0.75rem;
  background: linear-gradient(transparent, rgba(28,28,30,0.75));
  color: #fff;
  font-size: 0.78rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.photo-tile:hover .photo-caption,
.photo-tile:focus .photo-caption {
  opacity: 1;
}

/* ── Video grid ───────────────────────────────────────── */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .video-grid { grid-template-columns: 1fr; }
}

.video-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #1c1c1e;
}

.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-title {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a4a4a;
  text-align: center;
}

/* ── Lightbox ─────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox[hidden] { display: none; }

.lightbox__content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox__img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 6px;
  display: block;
}

.lightbox__caption {
  color: rgba(255,255,255,0.75);
  font-size: 0.85rem;
  margin-top: 0.75rem;
  text-align: center;
  min-height: 1.2em;
}

.lightbox__close {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.lightbox__close:hover { background: rgba(255,255,255,0.1); }

.lightbox__prev,
.lightbox__next {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.lightbox__prev { left: 1rem; }
.lightbox__next { right: 1rem; }

.lightbox__prev:hover,
.lightbox__next:hover { background: rgba(255,255,255,0.25); }

@media (max-width: 480px) {
  .lightbox__prev { left: 0.25rem; padding: 0.5rem 0.75rem; }
  .lightbox__next { right: 0.25rem; padding: 0.5rem 0.75rem; }
}
</style>

<script>
(function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var lbImg     = lightbox.querySelector('.lightbox__img');
  var lbCaption = lightbox.querySelector('.lightbox__caption');
  var tiles     = Array.from(document.querySelectorAll('.photo-tile'));
  var current   = 0;

  if (tiles.length === 0) return;

  function show(index) {
    current = (index + tiles.length) % tiles.length;
    var tile = tiles[current];
    lbImg.src = tile.dataset.src;
    lbImg.alt = tile.querySelector('img').alt;
    lbCaption.textContent = tile.dataset.caption || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox__close').focus();
  }

  function hide() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  tiles.forEach(function (tile, i) {
    tile.addEventListener('click', function () { show(i); });
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', hide);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', function () { show(current - 1); });
  lightbox.querySelector('.lightbox__next').addEventListener('click', function () { show(current + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) hide();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')    hide();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
</script>
