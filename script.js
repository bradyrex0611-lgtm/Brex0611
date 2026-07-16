// script.js — minimal interactions: smooth scroll, mobile nav toggle, simple form handling

document.addEventListener('DOMContentLoaded', function () {
  const bookBtn = document.getElementById('bookBtn');
  const booking = document.getElementById('booking');
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primary-nav');
  const bookingForm = document.getElementById('bookingForm');
  const formMessage = document.getElementById('formMessage');

  window.scrollBook = function () {
    booking.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // focus first input for accessibility
    setTimeout(() => document.getElementById('name')?.focus(), 400);
  };

  bookBtn?.addEventListener('click', scrollBook);

  navToggle?.addEventListener('click', function () {
    const open = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close nav when clicking a link (mobile)
  primaryNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Simple client-side validation and feedback
  bookingForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.classList.add('hidden');
    const form = e.target;

    // Use browser validity where possible
    if (!form.checkValidity()) {
      form.querySelectorAll('input,select,textarea').forEach(el => {
        if (!el.checkValidity()) {
          el.focus();
          return;
        }
      });
      formMessage.textContent = 'Please complete the required fields.';
      formMessage.classList.remove('hidden');
      formMessage.style.background = 'rgba(245,94,94,0.06)';
      formMessage.style.color = '#ff6b6b';
      return;
    }

    // Mock submit (replace with real endpoint or Netlify Forms / Formspree)
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      trip: form.trip.value,
      message: form.message.value
    };

    // Simulate network delay
    formMessage.textContent = 'Sending request...';
    formMessage.classList.remove('hidden');
    formMessage.style.background = 'rgba(255,255,255,0.03)';
    formMessage.style.color = '#fff';

    setTimeout(() => {
      formMessage.textContent = 'Thanks! Your booking request has been sent. We will contact you shortly.';
      formMessage.style.background = 'rgba(22,163,74,0.08)';
      formMessage.style.color = '';
      form.reset();
    }, 900);
  });
});
