const translations = {
  en: {
    title: "OLD GENERATION – VESTIGES OF VALOUR",
    header_subtitle: "PRESERVING LEGACY, COMMANDING DESTINY",
    nav_stats: "Intelligence", nav_profiles: "Legion", nav_terminology: "Archives", nav_contact: "Enlistment",
    stats_title: "Strategic Metrics", members_label: "Elite Combatants", might_label: "Collective Potency", level_label: "Sovereign Level",
    profiles_title: "High Council", member1_name: "Supreme Leader", member1_role: "GRAND MARSHAL",
    member2_name: "War General", member2_role: "BATTLE COMMANDER", member3_name: "Shield Master", member3_role: "DEFENCE STRATEGIST",
    terminology_title: "Tactical Compendium", term1_title: "Martial Stature", term1_desc: "A comprehensive evaluation of one's sovereignty.",
    term2_title: "Coordinated Rally", term2_desc: "Synchronised offensive under singular command.",
    contact_title: "The Inquisitorial Protocol", label_name: "In-Game Name", label_iggid: "Unique IGG ID", label_might: "Might Stature",
    label_role: "Specialisation", label_message: "Statement of Intent", form_disclaimer: "* Submission is a formal pledge of loyalty.",
    prev_btn: "Back", next_btn: "Proceed", submit_btn: "Formalise Enlistment",
    footer1: "OLD GENERATION: Cultivating martial excellence since 2016.",
    copy_title: "SOVEREIGN PROTECTION", copy_message: "This property belongs to OLD GENERATION.",
    ph_name: "Reveal your moniker", ph_iggid: "Numeric Identity", ph_might: "e.g., 2.5bn", ph_message: "Detail your purpose for joining our ranks..."
  },
  tr: {
    title: "OLD GENERATION – ASLA PES ETME",
    header_subtitle: "MİRASI KORUYOR, KADERİ YENİYORUZ",
    nav_stats: "İstihbarat", nav_profiles: "Lejyon", nav_terminology: "Arşivler", nav_contact: "Başvuru",
    stats_title: "Stratejik Veriler", members_label: "Seçkin Savaşçılar", might_label: "Toplam Kudret", level_label: "Lonca Kademesi",
    profiles_title: "Yüksek Konsey", member1_name: "Yüce Lider", member1_role: "BAŞ MARŞAL",
    member2_name: "Savaş Generali", member2_role: "MUHAREBE KOMUTANI", member3_name: "Kalkan Ustası", member3_role: "SAVUNMA STRATEJİSTİ",
    terminology_title: "Taktik Rehber", term1_title: "Askeri Kudret", term1_desc: "Egemenliğin kapsamlı bir değerlendirmesi.",
    term2_title: "Koordineli Miting", term2_desc: "Tek bir komuta altında senkronize saldırı.",
    contact_title: "Üyelik Sorgulama Protokolü", label_name: "Oyun İçi İsim", label_iggid: "Benzersiz IGG ID", label_might: "Kudret Seviyesi",
    label_role: "Uzmanlık Alanı", label_message: "Niyet Beyanı", form_disclaimer: "* Gönderim, resmi bir sadakat yemini teşkil eder.",
    prev_btn: "Geri", next_btn: "Devam Et", submit_btn: "Kaydı Resmileştir",
    footer1: "OLD GENERATION: 2016'dan beri askeri mükemmellik inşa ediyoruz.",
    copy_title: "İÇERİK KORUMASI", copy_message: "Bu mülkiyet OLD GENERATION'a aittir.",
    ph_name: "Oyun içi adınızı yazın", ph_iggid: "Sayısal Kimliğiniz", ph_might: "Örn. 2.5mr", ph_message: "Saflarımıza katılma amacınızı detaylandırın..."
  },
  it: {
    title: "OLD GENERATION – VESTIGIA DI VALORE",
    header_subtitle: "PRESERVARE L'EREDITÀ, COMANDARE IL DESTINO",
    nav_stats: "Intelligence", nav_profiles: "Legione", nav_terminology: "Archivi", nav_contact: "Arruolamento",
    stats_title: "Metriche Strategiche", members_label: "Combattenti d'Elite", might_label: "Potenza Collettiva", level_label: "Livello Sovrano",
    profiles_title: "Alto Consiglio", member1_name: "Capo Supremo", member1_role: "GRAN MARESCIALLO",
    member2_name: "Generale di Guerra", member2_role: "COMANDANTE DI BATTAGLIA", member3_name: "Maestro dello Scudo", member3_role: "STRATEGA DELLA DIFESA",
    terminology_title: "Compendio Tattico", term1_title: "Statura Marziale", term1_desc: "Valutazione completa della propria sovranità.",
    term2_title: "Adunata Coordinata", term2_desc: "Offensiva sincronizzata sotto un unico comando.",
    contact_title: "Il Protocollo Inquisitorio", label_name: "Nome In-Game", label_iggid: "ID IGG Univoco", label_might: "Potenza Attuale",
    label_role: "Specializzazione", label_message: "Dichiarazione d'Intenti", form_disclaimer: "* L'invio costituisce un impegno di lealtà.",
    prev_btn: "Indietro", next_btn: "Procedi", submit_btn: "Formalizza l'Arruolamento",
    footer1: "OLD GENERATION: Coltiviamo l'eccellenza marziale dal 2016.",
    copy_title: "PROTEZIONE SOVRANA", copy_message: "Questa proprietà appartiene a OLD GENERATION.",
    ph_name: "Rivela il tuo nome", ph_iggid: "Identità Numerica", ph_might: "es. 2.5mld", ph_message: "Dettaglia il tuo scopo per unirti ai nostri ranghi..."
  }
};

function setLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.title = t.title;

  const elements = {
    'nav-stats': t.nav_stats, 'nav-profiles': t.nav_profiles, 'nav-terminology': t.nav_terminology, 'nav-contact': t.nav_contact,
    'header-subtitle': t.header_subtitle, 'stats-title': t.stats_title, 'members-label': t.members_label, 'might-label': t.might_label, 'level-label': t.level_label,
    'profiles-title': t.profiles_title, 'member1-name': t.member1_name, 'member1-role': t.member1_role, 'member2-name': t.member2_name, 'member2-role': t.member2_role, 'member3-name': t.member3_name, 'member3-role': t.member3_role,
    'terminology-title': t.terminology_title, 'term1-title': t.term1_title, 'term1-desc': t.term1_desc, 'term2-title': t.term2_title, 'term2-desc': t.term2_desc,
    'contact-title': t.contact_title, 'label-name': t.label_name, 'label-iggid': t.label_iggid, 'label-might': t.label_might, 'label-role': t.label_role, 'label-message': t.label_message, 'form-disclaimer': t.form_disclaimer,
    'prevBtn': t.prev_btn, 'nextBtn': t.next_btn, 'submitBtn': t.submit_btn, 'footer-text1': t.footer1, 'copy-title': t.copy_title, 'copy-message': t.copy_message
  };

  for (let id in elements) {
    let el = document.getElementById(id);
    if (el) el.textContent = elements[id];
  }

  // Placeholder Text Translations
  const placeholders = {
    'name': t.ph_name,
    'iggid': t.ph_iggid,
    'might': t.ph_might,
    'message': t.ph_message
  };

  for (let id in placeholders) {
    let el = document.getElementById(id);
    if (el) el.placeholder = placeholders[id];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Default to 'en' (English) if no language is selected yet
  setLang(localStorage.getItem('lang') || 'en');

  let currentStep = 1;
  const steps = document.querySelectorAll('.form-step');
  const progressBar = document.getElementById('p-bar');

  const updateUI = () => {
    steps.forEach((s, i) => s.style.display = (i + 1 === currentStep) ? 'block' : 'none');
    document.getElementById('prevBtn').style.visibility = (currentStep === 1) ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.display = (currentStep === 3) ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = (currentStep === 3) ? 'block' : 'none';
    progressBar.style.width = (currentStep / 3 * 100) + '%';
  };

  document.getElementById('nextBtn').addEventListener('click', () => { if (currentStep < 3) { currentStep++; updateUI(); } });
  document.getElementById('prevBtn').addEventListener('click', () => { if (currentStep > 1) { currentStep--; updateUI(); } });

  ['contextmenu', 'selectstart', 'copy'].forEach(ev => document.addEventListener(ev, e => {
    e.preventDefault();
    let ov = document.getElementById('copy-protection');
    ov.style.opacity = '1'; ov.style.pointerEvents = 'all';
    setTimeout(() => { ov.style.opacity = '0'; ov.style.pointerEvents = 'none'; }, 2000);
  }));
});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');
