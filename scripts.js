/**
 * OLD GENERATION - Official Portal Logic
 * Version: 2.1.0 (Synchronised for TR, EN, IT)
 * Author: NeutralizeR
 */

// Comprehensive Linguistic Data
const translations = {
    en: {
        title: "OLD GENERATION – VESTIGES OF VALOUR",
        meta_description: "OLD GENERATION: A premier Lords Mobile guild, forging legends since 2016.",
        header_subtitle: "PRESERVING THE ANCIENT LEGACY, COMMANDING DESTINY",
        nav_stats: "Intelligence",
        nav_profiles: "Legion",
        nav_terminology: "Archives",
        nav_contact: "Enlistment",
        stats_title: "Strategic Metrics",
        members_label: "Elite Combatants",
        might_label: "Collective Potency",
        level_label: "Sovereign Level",
        profiles_title: "High Council",
        member1_name: "Supreme Leader",
        member1_role: "GRAND MARSHAL",
        member2_name: "War General",
        member2_role: "BATTLE COMMANDER",
        member3_name: "Shield Master",
        member3_role: "DEFENCE STRATEGIST",
        terminology_title: "Tactical Compendium",
        term1_title: "Martial Stature",
        term1_desc: "A comprehensive evaluation of one's sovereignty, encompassing military assets, structural progress, and arcane research.",
        term2_title: "Coordinated Rally",
        term2_desc: "A masterfully synchronised offensive where legionnaires unite under a singular command to overwhelm the opposition.",
        contact_title: "The Inquisitorial Protocol",
        label_name: "In-Game Name",
        input_name_placeholder: "Reveal your identity",
        label_iggid: "Unique IGG ID",
        label_might: "Current Might Stature",
        label_specialisation: "Specialisation",
        label_message: "Statement of Intent",
        input_message_placeholder: "Articulate your purpose for joining our banner...",
        form_disclaimer: "Submission constitutes a formal pledge of loyalty to the Old Generation Council.",
        prev_btn: "Back",
        next_btn: "Proceed",
        submit_btn: "Formalise Enlistment",
        footer1: "OLD GENERATION: Cultivating martial excellence and strategic dominance since 2016.",
        copy_title: "SOVEREIGN PROTECTION",
        copy_message: "This intellectual property is the exclusive domain of OLD GENERATION."
    },
    tr: {
        title: "OLD GENERATION – ASLA PES ETME",
        meta_description: "OLD GENERATION: Lords Mobile'da 2016'dan beri efsaneler yaratan üst düzey bir lonca.",
        header_subtitle: "MİRASI KORUYOR, KADERİ YENİYORUZ",
        nav_stats: "İstihbarat",
        nav_profiles: "Lejyon",
        nav_terminology: "Arşivler",
        nav_contact: "Başvuru",
        stats_title: "Stratejik Veriler",
        members_label: "Seçkin Savaşçılar",
        might_label: "Toplam Kudret",
        level_label: "Lonca Kademesi",
        profiles_title: "Yüksek Konsey",
        member1_name: "Yüce Lider",
        member1_role: "BAŞ MARŞAL",
        member2_name: "Savaş Generali",
        member2_role: "MUHAREBE KOMUTANI",
        member3_name: "Kalkan Ustası",
        member3_role: "SAVUNMA STRATEJİSTİ",
        terminology_title: "Taktik Rehber",
        term1_title: "Askeri Kudret",
        term1_desc: "Askeri varlıkları, yapısal ilerlemeyi ve gizemli araştırmaları kapsayan, kişinin egemenliğinin kapsamlı bir değerlendirmesi.",
        term2_title: "Koordineli Miting",
        term2_desc: "Lejyonerlerin muhalefeti ezmek için tek bir komuta altında birleştiği, ustaca senkronize edilmiş bir saldırı.",
        contact_title: "Üyelik Sorgulama Protokolü",
        label_name: "Oyun İçi İsim",
        input_name_placeholder: "Kimliğinizi açıklayın",
        label_iggid: "Benzersiz IGG ID",
        label_might: "Mevcut Kudret Seviyesi",
        label_specialisation: "Uzmanlık Alanı",
        label_message: "Niyet Beyanı",
        input_message_placeholder: "Sancağımıza katılma amacınızı belirtin...",
        form_disclaimer: "Gönderim, Old Generation Konseyi'ne resmi bir sadakat yemini teşkil eder.",
        prev_btn: "Geri",
        next_btn: "Devam Et",
        submit_btn: "Kaydı Resmileştir",
        footer1: "OLD GENERATION: 2016'dan beri askeri mükemmellik ve stratejik hakimiyet inşa ediyoruz.",
        copy_title: "İÇERİK KORUMASI",
        copy_message: "Bu fikri mülkiyet OLD GENERATION loncasının münhasır alanıdır."
    },
    it: {
        title: "OLD GENERATION – VESTIGIA DI VALORE",
        meta_description: "OLD GENERATION: Una gilda di Lords Mobile di primo livello, che crea leggende dal 2016.",
        header_subtitle: "PRESERVARE L'EREDITÀ, COMANDARE IL DESTINO",
        nav_stats: "Intelligence",
        nav_profiles: "Legione",
        nav_terminology: "Archivi",
        nav_contact: "Arruolamento",
        stats_title: "Metriche Strategiche",
        members_label: "Combattenti d'Elite",
        might_label: "Potenza Collettiva",
        level_label: "Livello Sovrano",
        profiles_title: "Alto Consiglio",
        member1_name: "Capo Supremo",
        member1_role: "GRAN MARESCIALLO",
        member2_name: "Generale di Guerra",
        member2_role: "COMANDANTE DI BATTAGLIA",
        member3_name: "Maestro dello Scudo",
        member3_role: "STRATEGA DELLA DIFESA",
        terminology_title: "Compendio Tattico",
        term1_title: "Statura Marziale",
        term1_desc: "Una valutazione completa della propria sovranità, che comprende risorse militari, progressi strutturali e ricerca arcana.",
        term2_title: "Adunata Coordinata",
        term2_desc: "Un'offensiva magistralmente sincronizzata in cui i legionari si uniscono sotto un unico comando per travolgere l'opposizione.",
        contact_title: "Il Protocollo Inquisitorio",
        label_name: "Nome In-Game",
        input_name_placeholder: "Rivela la tua identità",
        label_iggid: "ID IGG Univoco",
        label_might: "Statura di Potenza Attuale",
        label_specialisation: "Specializzazione",
        label_message: "Dichiarazione d'Intenti",
        input_message_placeholder: "Articola il tuo scopo per unirti al nostro vessillo...",
        form_disclaimer: "L'invio costituisce un impegno formale di lealtà al Consiglio di Old Generation.",
        prev_btn: "Indietro",
        next_btn: "Procedi",
        submit_btn: "Formalizza l'Arruolamento",
        footer1: "OLD GENERATION: Coltiviamo l'eccellenza marziale e il dominio strategico dal 2016.",
        copy_title: "PROTEZIONE SOVRANA",
        copy_message: "Questa proprietà intellettuale è dominio esclusivo di OLD GENERATION."
    }
};

/**
 * Universal Language Dispatcher
 * @param {string} lang - Selected language code (tr, en, it)
 */
function setLang(lang) {
    const t = translations[lang] || translations.tr;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    // Global Metadata
    document.title = t.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

    // Navigation & Header
    const elements = {
        'nav-stats': t.nav_stats,
        'nav-profiles': t.nav_profiles,
        'nav-terminology': t.nav_terminology,
        'nav-contact': t.nav_contact,
        'header-subtitle': t.header_subtitle,
        'stats-title': t.stats_title,
        'members-label': t.members_label,
        'might-label': t.might_label,
        'level-label': t.level_label,
        'profiles-title': t.profiles_title,
        'member1-name': t.member1_name,
        'member1-role': t.member1_role,
        'member2-name': t.member2_name,
        'member2-role': t.member2_role,
        'member3-name': t.member3_name,
        'member3-role': t.member3_role,
        'terminology-title': t.terminology_title,
        'term1-title': t.term1_title,
        'term1-desc': t.term1_desc,
        'term2-title': t.term2_title,
        'term2-desc': t.term2_desc,
        'contact-title': t.contact_title,
        'label-name': t.label_name,
        'label-iggid': t.label_iggid,
        'label-might': t.label_might,
        'label-specialisation': t.label_specialisation,
        'label-message': t.label_message,
        'form-disclaimer': t.form_disclaimer,
        'prevBtn': t.prev_btn,
        'nextBtn': t.next_btn,
        'submitBtn': t.submit_btn,
        'footer-text1': t.footer1
    };

    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    // Placeholders
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = t.input_name_placeholder;
    const msgInput = document.getElementById('message');
    if (msgInput) msgInput.placeholder = t.input_message_placeholder;
}

// Global Event Listeners & Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Apply Language Configuration
    const savedLang = localStorage.getItem('lang') || 'tr';
    setLang(savedLang);

    // Multi-Step Recruitment Logic
    let currentStep = 1;
    const steps = document.querySelectorAll('.form-step');
    const progressBar = document.getElementById('p-bar');

    const updateUI = () => {
        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx + 1 === currentStep);
            step.style.display = idx + 1 === currentStep ? 'block' : 'none';
        });

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
        if (nextBtn) nextBtn.style.display = currentStep === 3 ? 'none' : 'block';
        if (submitBtn) submitBtn.style.display = currentStep === 3 ? 'block' : 'none';
        
        if (progressBar) progressBar.style.width = (currentStep / 3 * 100) + '%';
    };

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep < 3) {
                currentStep++;
                updateUI();
            }
        });
    }

    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateUI();
            }
        });
    }
});

// Security & Content Protection Protocol
['contextmenu', 'selectstart', 'copy', 'dragstart'].forEach(event => 
    document.addEventListener(event, e => e.preventDefault())
);

document.addEventListener('keydown', e => {
    if ((e.ctrlKey && ['u', 'c', 's', 'a', 'p'].includes(e.key.toLowerCase())) || e.key === 'F12' || e.key === 'PrintScreen') {
        e.preventDefault();
        const overlay = document.getElementById('copy-protection');
        if (overlay) {
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'all';
            setTimeout(() => {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }, 2500);
        }
    }
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Sovereign Guardian Active (SW Registered)'))
            .catch(err => console.error('Guardian Deployment Failed:', err));
    });
}
