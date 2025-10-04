/* Basic UI behavior: theme toggle, smooth scroll, contact form dummy handler */

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // theme toggle (light/dark simple)
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀' : '☾';
  });

  // contact form handler (simple client-side feedback)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    // simple validation
    if(!name){
      msg.textContent = 'Please enter your name.';
      return;
    }
    // show success message (replace with real backend/email endpoint if available)
    msg.textContent = 'Thanks! Your message was "sent" (demo). I will reply to ' + data.get('email');
    form.reset();
    setTimeout(()=> msg.textContent = '', 6000);
  });

  // progressive load bars (animate widths)
  requestAnimationFrame(() => {
    document.querySelectorAll('.bar > div').forEach(div => {
      const w = div.style.width;
      div.style.width = '0%';
      setTimeout(() => div.style.width = w, 120);
    });
  });
});
