// Tiny i18n: picks en / pt / fr from the browser and fills [data-i18n] nodes.
const STORE = "https://play.google.com/store/apps/details?id=tk.indiecompany.emenda.app";

const T = {
  en: {
    title: "emenda — plan your time off around holidays",
    nav_privacy: "Privacy",
    h1: "Plan your time off",
    lead: "Tell emenda how many vacation days you have and where you work. It lines them up with weekends and national, state and city holidays and shows the stretches that give you the most days off.",
    get: "Get it on Google Play",
    ios_soon: "iPhone version coming soon",
    f1_t: "Holidays included",
    f1_d: "National, state and city holidays for Brazil, the United States and France, kept up to date.",
    f2_t: "Any schedule",
    f2_d: "Weekly schedules or shift rotations like 12×36, 24×48, 6×1 and 4×4. Banked days and company closures count too.",
    f3_t: "Share a plan",
    f3_d: "Send the best dates to your team or family with one link.",
    f4_t: "Private",
    f4_d: "Your plan stays on your device. No account needed.",
    // /p
    p_title: "A vacation plan from emenda",
    p_one: "Shared plan",
    p_all: "Shared options",
    p_budget: "{n} vacation days",
    p_budget_comp: "{n} vacation + {c} banked days",
    p_off: "days off",
    p_costs: "costs {n} days",
    p_open: "Open in the app",
    p_get: "Don't have emenda? Get it on Google Play",
    p_bad: "This link is incomplete or damaged. Ask for it again, or plan your own time off with emenda.",
  },
  pt: {
    title: "emenda — planeje suas férias em volta dos feriados",
    nav_privacy: "Privacidade",
    h1: "Planeje suas folgas",
    lead: "Diga ao emenda quantos dias de férias você tem e onde trabalha. Ele combina tudo com fins de semana e feriados nacionais, estaduais e municipais e mostra os períodos que rendem mais dias de folga.",
    get: "Baixe no Google Play",
    ios_soon: "Versão para iPhone em breve",
    f1_t: "Feriados incluídos",
    f1_d: "Feriados nacionais, estaduais e municipais do Brasil, dos Estados Unidos e da França, sempre atualizados.",
    f2_t: "Qualquer jornada",
    f2_d: "Semana fixa ou escalas como 12×36, 24×48, 6×1 e 4×4. Banco de horas e recessos da empresa também contam.",
    f3_t: "Compartilhe o plano",
    f3_d: "Mande as melhores datas para a equipe ou a família com um link.",
    f4_t: "Privado",
    f4_d: "Seu plano fica no seu aparelho. Sem cadastro.",
    p_title: "Um plano de férias do emenda",
    p_one: "Plano compartilhado",
    p_all: "Opções compartilhadas",
    p_budget: "{n} dias de férias",
    p_budget_comp: "{n} dias de férias + {c} de banco de horas",
    p_off: "dias de folga",
    p_costs: "usa {n} dias",
    p_open: "Abrir no app",
    p_get: "Não tem o emenda? Baixe no Google Play",
    p_bad: "Este link está incompleto ou corrompido. Peça de novo, ou planeje suas próprias folgas com o emenda.",
  },
  fr: {
    title: "emenda — planifiez vos congés autour des jours fériés",
    nav_privacy: "Confidentialité",
    h1: "Planifiez vos congés",
    lead: "Indiquez à emenda combien de jours de congé vous avez et où vous travaillez. Il les combine avec les week-ends et les jours fériés nationaux, régionaux et municipaux, et montre les périodes qui donnent le plus de jours de repos.",
    get: "Disponible sur Google Play",
    ios_soon: "Version iPhone bientôt disponible",
    f1_t: "Jours fériés inclus",
    f1_d: "Jours fériés nationaux, régionaux et municipaux du Brésil, des États-Unis et de la France, tenus à jour.",
    f2_t: "Tous les horaires",
    f2_d: "Semaine fixe ou roulements comme 12×36, 24×48, 6×1 et 4×4. Les RTT et fermetures d'entreprise comptent aussi.",
    f3_t: "Partagez un plan",
    f3_d: "Envoyez les meilleures dates à votre équipe ou à votre famille avec un seul lien.",
    f4_t: "Privé",
    f4_d: "Votre plan reste sur votre appareil. Aucun compte requis.",
    p_title: "Un plan de congés emenda",
    p_one: "Plan partagé",
    p_all: "Options partagées",
    p_budget: "{n} jours de congé",
    p_budget_comp: "{n} jours de congé + {c} jours de récupération",
    p_off: "jours de repos",
    p_costs: "utilise {n} jours",
    p_open: "Ouvrir dans l'app",
    p_get: "Vous n'avez pas emenda ? Disponible sur Google Play",
    p_bad: "Ce lien est incomplet ou endommagé. Redemandez-le, ou planifiez vos propres congés avec emenda.",
  },
};

const LANG = (() => {
  for (const l of navigator.languages || [navigator.language || "en"]) {
    const k = String(l).slice(0, 2).toLowerCase();
    if (T[k]) return k;
  }
  return "en";
})();

function t(key, vars = {}) {
  const s = T[LANG][key] ?? T.en[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, v) => String(vars[v] ?? ""));
}

function applyI18n() {
  document.documentElement.lang = LANG === "pt" ? "pt-BR" : LANG;
  for (const el of document.querySelectorAll("[data-i18n]")) el.textContent = t(el.dataset.i18n);
  for (const el of document.querySelectorAll("[data-store]")) el.href = STORE;
  const title = document.querySelector("title[data-i18n-title]");
  if (title) document.title = t(title.dataset.i18nTitle);
}
