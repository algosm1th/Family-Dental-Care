const consultBtn = document.querySelector("#consult");
const whatsapp = document.querySelector("#wa-logo");

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    document.getElementById(targetId).scrollIntoView({behavior:'smooth'});
  });
});

consultBtn.addEventListener('click', () => {
  const phoneNumber = '923020760355';
  const message = "Hello! I want an online consultation";

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappURL, '_blank', 'noopener,noreferrer');
});

whatsapp.addEventListener('click', () => {
  const phoneNumber = '923025333071';
  const message = "Hello, I have a query regarding clinic.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappURL, '_blank','noopener,noreferrer');
});
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) console.log(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button.span');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Keep the URL hash in sync, like the old <a href="#..."> did
        history.pushState(null, '', `#${targetId}`);
      } else {
        console.warn(`No element found with id "${targetId}"`);
      }
    });
  });
});
