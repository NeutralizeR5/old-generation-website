// Tema değiştir
const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  localStorage.setItem('theme', light ? 'light' : 'dark');
});
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }
});

// Dil değiştirme
const texts = {/* … yukarıdaki çeviri objesi (translations) … */};
document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
document.getElementById('btn-tr').addEventListener('click', () => setLang('tr'));
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = texts[lang];
  document.getElementById('meta-title').textContent = t.title;
  document.getElementById('meta-desc').content    = t.meta_description;
  document.getElementById('header-subtitle').textContent = t.header_subtitle;
  // … diğer alanları da güncelle …
}

// Service Worker kaydı
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(console.error);
}

// Canlı istatistikler (CSP’ye uygun)
fetch('https://api.example.com/guild/stats', {mode:'cors'})
  .then(r=>r.json())
  .then(data=>{
    document.getElementById('stats-data').textContent =
      `Members: ${data.members} | Might: ${data.might}`;
  })
  .catch(_=>{
    document.getElementById('stats-data').textContent = 'Veri yüklenemedi';
  });

// Kopya & DevTools engelleme
document.addEventListener('keydown', e=>{
  if ((e.ctrlKey && ['u','c','a','s','p'].includes(e.key.toLowerCase())) ||
      e.key==='F12' || e.key==='PrintScreen') {
    e.preventDefault();
  }
});
['contextmenu','selectstart','copy'].forEach(ev=>
  document.addEventListener(ev, e=>e.preventDefault())
);
