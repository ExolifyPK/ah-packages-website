const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const yearEl = document.getElementById('year');
const form = document.getElementById('quoteForm');
const formMsg = document.getElementById('formMsg');

yearEl.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Email submit via default mail app
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const company = (data.get('company') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const details = (data.get('details') || '').toString().trim();

  const to = 'AHPACKAGES3042@GMAIL.COM';
  const subject = encodeURIComponent(`Quote request — ${company || 'New inquiry'}`);
  const body = encodeURIComponent(
    `Company: ${company}\nEmail: ${email}\n\nProject Details:\n${details}\n`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  formMsg.textContent = 'Opening your email app… If nothing happens, email AHPACKAGES3042@GMAIL.COM.';
});