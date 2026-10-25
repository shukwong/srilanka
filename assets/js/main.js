(function () {
  'use strict';

  // Contact events contain only channel and placement, never enquiry details.
  function trackContact(channel, location) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_click', {
        contact_channel: channel,
        contact_location: location,
        page_path: window.location.pathname
      });
    }
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, window.location.href);
    var channel = url.hostname === 'wa.me' ? 'whatsapp' :
      url.protocol === 'tel:' ? 'phone' : null;
    if (!channel) return;
    var location = link.getAttribute('data-contact-location') ||
      (link.closest('header') ? 'header' : link.closest('footer') ? 'footer' :
        link.classList.contains('whatsapp-float') ? 'floating-button' :
          link.closest('.hero') ? 'hero' : 'page-content');
    trackContact(channel, location);
  });

  // Build a message locally; WhatsApp remains the explicit send step.
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    if (new URLSearchParams(window.location.search).get('service') === 'airport-transfer') {
      quoteForm.elements.service.value = 'Airport transfer';
    }
    quoteForm.hidden = false;
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;
      var fields = new FormData(quoteForm);
      function value(name, fallback) {
        return String(fields.get(name) || '').trim() || fallback;
      }
      var message = [
        'Hello Mifras! I\'d like to check availability and get a quote.',
        'Service: ' + value('service', 'Not sure yet'),
        'Travel dates: ' + value('dates', 'Not sure yet'),
        'Adults: ' + value('adults', '2'),
        'Children: ' + value('children', '0'),
        'Pickup: ' + value('pickup', 'To discuss'),
        'Destinations / trip length / interests: ' + value('plans', 'To discuss'),
        'Flight details: ' + value('flight', 'Not provided'),
        'Luggage / other requests: ' + value('needs', 'None specified')
      ].join('\n');
      trackContact('whatsapp', 'quote-form');
      window.location.assign('https://wa.me/' + quoteForm.dataset.whatsapp + '?text=' + encodeURIComponent(message));
    });
  }

  // ============================================================
  // MOBILE NAVIGATION TOGGLE
  // ============================================================
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.classList.toggle('is-open', isOpen);
    });

    // Close menu when a nav link is clicked
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-open');
      }
    });
  }

  // ============================================================
  // STICKY HEADER — add shadow on scroll
  // ============================================================
  var siteHeader = document.querySelector('.site-header');

  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ============================================================
  // FAQ ACCORDION
  // ============================================================
  var faqButtons = document.querySelectorAll('.faq-item__question');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answerId = btn.getAttribute('aria-controls');
      var answer = document.getElementById(answerId);
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other open answers
      faqButtons.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          var otherId = otherBtn.getAttribute('aria-controls');
          var otherAnswer = document.getElementById(otherId);
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) {
            otherAnswer.classList.remove('is-open');
            otherAnswer.setAttribute('aria-hidden', 'true');
          }
        }
      });

      // Toggle current answer
      btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      if (answer) {
        answer.classList.toggle('is-open', !isExpanded);
        answer.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
      }
    });
  });

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
        var targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

})();
