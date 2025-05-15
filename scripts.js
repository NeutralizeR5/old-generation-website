const translations = {
  en: {
    title: "OLD GENERATION – NEVER GIVE UP",
    meta_description: "OLD GENERATION: A top-tier guild in Lords Mobile, forging legends since 2016.",
    header_subtitle: "PRESERVING LEGACY, DEFYING FATE",
    nav_stats: "Stats",
    nav_profiles: "Profiles",
    nav_terminology: "Terminology",
    nav_news: "News",
    nav_shortfilm: "Short Film",
    nav_contact: "Contact",
    stats_title: "Live Guild Statistics",
    stats_text: "Real-time game data integration coming soon.",
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
    label_email: "E-posta",
    label_message: "Mesaj",
    contact_button: "Mesaj Gönder",
    footer1: "OLD GENERATION, Lords Mobile'da 2016'dan beri şampiyonları bir araya getiren seçkin bir loncadır.",
    footer2: "© 2016–2025 OLD GENERATION. NeutralizeR tarafından tasarlandı."
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = translations[lang] || translations.en;

  document.title = t.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

  document.getElementById('header-subtitle').textContent = t.header_subtitle;
  document.getElementById('nav-stats').textContent = t.nav_stats;
  document.getElementById('nav-profiles').textContent = t.nav_profiles;
  document.getElementById('nav-terminology').textContent = t.nav_terminology;
  document.getElementById('nav-news').textContent = t.nav_news;
  document.getElementById('nav-shortfilm').textContent = t.nav_shortfilm;
  document.getElementById('nav-contact').textContent = t.nav_contact;

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

  document.getElementById('contact-title').textContent = t.contact_title;
  document.getElementById('label-name').textContent = t.label_name;
  document.getElementById('label-email').textContent = t.label_email;
  document.getElementById('label-message').textContent = t.label_message;
  document.getElementById('contact-button').textContent = t.contact_button;

  document.getElementById('footer-text1').textContent = t.footer1;
  document.getElementById('footer-text2').textContent = t.footer2;
}

function toggleTheme() {
  const light = document.body.classList.toggle('light');
  localStorage.setItem('theme', light ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('light', localStorage.getItem('theme') === 'light');
  setLang(localStorage.getItem('lang') || 'en');

  fetch('/api/guild/stats')
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      document.getElementById('stats-data').textContent = `Members: ${data.members} | Might: ${data.might}`;
    })
    .catch(() => {
      document.getElementById('stats-data').textContent = (translations[localStorage.getItem('lang') || 'en']).data_error || 'Data could not be loaded';
    });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(err => console.error('SW registration failed:', err));
  });
}
