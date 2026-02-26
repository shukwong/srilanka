(function () {
  'use strict';

  // ============================================================
  // MOBILE NAVIGATION TOGGLE
  // ============================================================
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.classList.toggle('is-active', isOpen);
    });

    // Close menu when a nav link is clicked
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-active');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-active');
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

  // ============================================================
  // WHATSAPP FLOAT — hide on contact page
  // ============================================================
  var whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat && window.location.pathname.replace(/\/$/, '') === '/contact') {
    whatsappFloat.style.display = 'none';
  }

})();
