(() => {
  const translations = {
    en: {
      title: "OLD GENERATION – NEVER GIVE UP",
      meta_description: "OLD GENERATION: A top‑tier guild in Lords Mobile, forging legends since 2016.",
      header_subtitle: "PRESERVING LEGACY, DEFYING FATE",
      nav_stats: "Stats", nav_profiles: "Profiles", nav_terminology: "Terminology",
      nav_news: "News", nav_shortfilm: "Short Film", nav_contact: "Contact",
      stats_title: "Live Guild Statistics", stats_text: "Real‑time game data integration coming soon.",
      profiles_title: "Member Spotlight", profiles_text: "Showcase of elite guild members under development.",
      terminology_title: "Game Terminology", terminology_text: "Glossary of key Lords Mobile terms will be added here.",
      news_title: "Announcements & Updates",
      news_recruitment: "Recruitment: Skilled and active players are welcome. Contact us via Telegram or Line.",
      news_tournament: "Next Tournament: Gear up for the upcoming guild war.",
      shortfilm_title: "Guild Short Film",
      contact_title: "Get in Touch", label_name: "Name", label_email: "Email",
      label_message: "Message", contact_button: "Send Message",
      footer1: "OLD GENERATION is a distinguished guild in Lords Mobile since 2016.",
      footer2: "© 2016–2025 OLD GENERATION. Designed by NeutralizeR",
      error_stats: "Data failed to load."
    },
    tr: {
      title: "OLD GENERATION – ASLA PES ETME",
      meta_description: "OLD GENERATION: Lords Mobile’da 2016’dan beri efsaneler yaratan üst düzey bir lonca.",
      header_subtitle: "MİRASI KORUYOR, KADERİ YENİYORUZ",
      nav_stats: "İstatistikler", nav_profiles: "Üyeler", nav_terminology: "Terimler",
      nav_news: "Duyurular", nav_shortfilm: "Kısa Film", nav_contact: "İletişim",
      stats_title: "Canlı Lonca İstatistikleri", stats_text: "Gerçek zamanlı oyun verisi entegrasyonu yakında geliyor.",
      profiles_title: "Üye Tanıtımı", profiles_text: "Seçkin lonca üyelerinin tanıtımı geliştirme aşamasında.",
      terminology_title: "Oyun Terimleri", terminology_text: "Lords Mobile için temel terimlerin sözlüğü buraya eklenecek.",
      news_title: "Duyurular & Güncellemeler",
      news_recruitment: "Üye Alımı: Yetkin ve aktif oyuncular arıyoruz. Telegram veya Line üzerinden iletişime geçin.",
      news_tournament: "Sonraki Turnuva: Yaklaşan lonca savaşına hazırlanın.",
      shortfilm_title: "Lonca Kısa Filmi",
      contact_title: "Bizimle İletişime Geçin", label_name: "İsim", label_email: "E‑posta",
      label_message: "Mesaj", contact_button: "Mesaj Gönder",
      footer1: "OLD GENERATION, Lords Mobile’da 2016’dan beri şampiyonları bir araya getiren seçkin bir loncadır.",
      footer2: "© 2016–2025 OLD GENERATION. NeutralizeR tarafından tasarlandı.",
      error_stats: "Veri yüklenemedi."
    }
  };

  let lang = localStorage.getItem('lang') || 'en';

  function setLang(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
    const t = translations[l];

    document.title = t.title;
    document.getElementById('meta-title').textContent = t.title;
    document.getElementById('meta-desc').setAttribute('content', t.meta_description);
    document.getElementById('header-subtitle').textContent = t.header_subtitle;

    ['stats','profiles','terminology','news','shortfilm','contact'].forEach(id => {
      document.getElementById('nav-'+id).textContent = t['nav_'+id];
      const h = document.getElementById(id+'-title'); if(h) h.textContent = t[id+'_title'];
      const p = document.getElementById(id+'-text');  if(p) p.textContent = t[id+'_text'];
    });

    document.getElementById('news-recruitment').textContent = t.news_recruitment;
    document.getElementById('news-tournament').textContent = t.news_tournament;
    document.getElementById('label-name').textContent    = t.label_name;
    document.getElementById('label-email').textContent   = t.label_email;
    document.getElementById('label-message').textContent = t.label_message;
    document.getElementById('contact-button').textContent= t.contact_button;
    document.getElementById('footer-text1').textContent  = t.footer1;
    document.getElementById('footer-text2').textContent  = t.footer2;
  }

  function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  function fetchStats() {
    fetch('https://api.example.com/guild/stats')
      .then(r => { if(!r.ok) throw Error(); return r.json(); })
      .then(data => {
        document.getElementById('stats-data').textContent =
          lang==='tr'
            ? `Üye: ${data.members} | Güç: ${data.might}`
            : `Members: ${data.members} | Might: ${data.might}`;
      })
      .catch(() => {
        document.getElementById('stats-data').textContent =
          translations[lang].error_stats;
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.toggle('light', localStorage.getItem('theme')==='light');

    document.getElementById('btn-en').addEventListener('click', ()=> setLang('en'));
    document.getElementById('btn-tr').addEventListener('click', ()=> setLang('tr'));
    document.getElementById('btn-theme').addEventListener('click', toggleTheme);

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(l=>l.removeAttribute('aria-current'));
        link.setAttribute('aria-current','page');
      });
    });

    setLang(lang);
    fetchStats();

    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(()=>{});
    }

    document.addEventListener('keydown', e => {
      if((e.ctrlKey&&['u','c','s','a','p'].includes(e.key.toLowerCase()))||e.key==='F12'||e.key==='PrintScreen'){
        e.preventDefault();
      }
    });
    ['contextmenu','selectstart','copy'].forEach(ev => {
      document.addEventListener(ev, e => e.preventDefault());
    });
  });
})();
