// Translations
const translations = {
  en: {
    title: "OLD GENERATION – NEVER GIVE UP",
    meta_description: "OLD GENERATION: A top‑tier guild in Lords Mobile, forging legends since 2016.",
    header_subtitle: "PRESERVING LEGACY, DEFYING FATE",
    nav_stats: "Stats",
    nav_profiles: "Profiles",
    nav_terminology: "Terminology", 
    nav_news: "News",
    nav_shortfilm: "Short Film",  
    nav_contact: "Contact",
    stats_title: "Live Guild Statistics", 
    stats_text: "Real‑time game data integration coming soon.",
    profiles_title: "Member Spotlight",      
    profiles_text: "Showcase of elite guild members under development.",
    terminology_title: "Game Terminology",      
    terminology_text: "Glossary of key Lords Mobile terms will be added here.",
    news_title: "Announcements & Updates",
    news_recruitment: "<strong>Recruitment:</strong> Skilled and active players are welcome. Contact us via Telegram or Line.",
    news_tournament: "<strong>Next Tournament:</strong> Gear up for the upcoming guild war.",
    shortfilm_title: "Guild Short Film",
    contact_title: "Get in Touch",
    label_name: "Name",   
    label_email: "Email",
    label_message: "Message", 
    contact_button: "Send Message",
    footer1: "OLD GENERATION is a distinguished guild in Lords Mobile since 2016.",
    footer2: "© 2016–2025 OLD GENERATION. Designed by NeutralizeR"
  },
  tr: {
    title: "OLD GENERATION – ASLA PES ETME",
    meta_description: "OLD GENERATION: Lords Mobile'da 2016'dan beri efsaneler yaratan üst düzey bir lonca.",
    header_subtitle: "MİRASI KORUYOR, KADERİ YENİYORUZ",
    nav_stats: "İstatistikler", 
    nav_profiles: "Üyeler",
    nav_terminology: "Terimler",      
    nav_news: "Duyurular",
    nav_shortfilm: "Kısa Film",     
    nav_contact: "İletişim",
    stats_title: "Canlı Lonca İstatistikleri", 
    stats_text: "Gerçek zamanlı oyun verisi entegrasyonu yakında geliyor.",
    profiles_title: "Üye Tanıtımı",               
    profiles_text: "Seçkin lonca üyelerinin tanıtımı geliştirme aşamasında.",
    terminology_title: "Oyun Terimleri",              
    terminology_text: "Lords Mobile için temel terimlerin sözlüğü buraya eklenecek.",
    news_title: "Duyurular & Güncellemeler",
    news_recruitment: "<strong>Üye Alımı:</strong> Yetkin ve aktif oyuncular arıyoruz. Telegram veya Line üzerinden iletişime geçin.",
    news_tournament: "<strong>Sonraki Turnuva:</strong> Yaklaşan lonca savaşına hazırlanın.",
    shortfilm_title: "Lonca Kısa Filmi",
    contact_title: "Bizimle İletişime Geçin",
    label_name: "İsim",       
    label_email: "E‑posta",
    label_message: "Mesaj",      
    contact_button: "Mesaj Gönder",
    footer1: "OLD GENERATION, Lords Mobile'da 2016'dan beri şampiyonları bir araya getiren seçkin bir loncadır.",
    footer2: "© 2016–2025 OLD GENERATION. NeutralizeR tarafından tasarlandı."
  }
};

// Set language
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = translations[lang];
  
  // Update meta tags
  document.getElementById('meta-title').textContent = t.title;
  document.getElementById('meta-desc').setAttribute('content', t.meta_description);
  
  // Update header
  document.getElementById('header-subtitle').textContent = t.header_subtitle;
  
  // Update navigation
  document.getElementById('nav-stats').textContent = t.nav_stats;
  document.getElementById('nav-profiles').textContent = t.nav_profiles;
  document.getElementById('nav-terminology').textContent = t.nav_terminology;
  document.getElementById('nav-news').textContent = t.nav_news;
  document.getElementById('nav-shortfilm').textContent = t.nav_shortfilm;
  document.getElementById('nav-contact').textContent = t.nav_contact;
  
  // Update section titles and text
  document.getElementById('stats-title').textContent = t.stats_title;
  document.getElementById('stats-text').textContent = t.stats_text;
  document.getElementById('profiles-title').textContent = t.profiles_title;
  document.getElementById('profiles-text').textContent = t.profiles_text;
  document.getElementById('terminology-title').textContent = t.terminology_title;
  document.getElementById('terminology-text').textContent = t.terminology_text;
  document.getElementById('news-title').textContent = t.news_title;
  document.getElementById('news-recruitment').innerHTML = t.news_recruitment;
  document.getElementById('news-tournament').innerHTML = t.news_tournament;
  document.getElementById('shortfilm-title').textContent = t.shortfilm_title;
  
  // Update contact form
  document.getElementById('contact-title').textContent = t.contact_title;
  document.getElementById('label-name').textContent = t.label_name;
  document.getElementById('label-email').textContent = t.label_email;
  document.getElementById('label-message').textContent = t.label_message;
  document.getElementById('contact-button').textContent = t.contact_button;
  
  // Update footer
  document.getElementById('footer-text1').textContent = t.footer1;
  document.getElementById('footer-text2').textContent = t.footer2;
}

// Toggle theme
function toggleTheme() {
  const light = document.body.classList.toggle('light');
  localStorage.setItem('theme', light ? 'light' : 'dark');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  document.body.classList.toggle('light', localStorage.getItem('theme') === 'light');
  
  // Apply saved language or default to English
  setLang(localStorage.getItem('lang') || 'en');
  
  // Fetch stats data
  try {
    fetch('https://api.example.com/guild/stats')
      .then(r => r.json())
      .then(data => { 
        document.getElementById('stats-data').textContent = `Members: ${data.members} | Might: ${data.might}`; 
      })
      .catch(err => { 
        console.error('API Error:', err); 
        document.getElementById('stats-data').textContent = 'Veri yüklenemedi'; 
      });
  } catch (error) {
    console.error('Fetch error:', error);
  }
});

// Security measures
document.addEventListener('keydown', e => {
  if ((e.ctrlKey && ['u', 'c', 's', 'a', 'p'].includes(e.key.toLowerCase())) || e.key === 'F12' || e.key === 'PrintScreen') {
    e.preventDefault();
    alert('Action disabled.');
  }
});

// Prevent context menu, selection and copying
['contextmenu', 'selectstart', 'copy'].forEach(ev => 
  document.addEventListener(ev, e => e.preventDefault())
);

// Service Worker Registration
if ('serviceWorker' in navigator) {
  fetch('/sw.js', { method: 'HEAD' })
    .then(res => res.ok

          nav {
  display: flex;
  justify-content: center;
  background-color: #111;
  padding: 15px 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  padding: 8px 15px;
  transition: all 0.3s ease;
  text-shadow: 0 0 0 transparent;
}

nav a:hover {
  color: #ff3333;
  text-shadow: 0 0 10px rgba(255, 51, 51, 0.8),
               0 0 20px rgba(255, 51, 51, 0.5),
               0 0 30px rgba(255, 51, 51, 0.3);
}

nav a.active {
  color: #ff3333;
  text-shadow: 0 0 10px rgba(255, 51, 51, 0.8),
               0 0 20px rgba(255, 51, 51, 0.5),
               0 0 30px rgba(255, 51, 51, 0.3);
}
