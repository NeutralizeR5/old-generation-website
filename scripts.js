// Tüm JavaScript kodlarınızı buraya taşıyın
const translations = {
  en: {
    title: "OLD GENERATION – NEVER GIVE UP",
    // Diğer çeviriler...
  },
  tr: {
    title: "OLD GENERATION – ASLA PES ETME",
    // Diğer çeviriler...
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = translations[lang];
  document.getElementById('meta-title').textContent = t.title;
  // Diğer kodlar...
}

// Diğer fonksiyonlar...
