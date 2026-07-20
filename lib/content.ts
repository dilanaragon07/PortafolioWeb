export type Lang = "en" | "es";

export const ROLES: Record<Lang, string[]> = {
  en: ["AI Engineer", "Full Stack Developer", "Flutter Developer", "Automation Engineer", "Cloud Engineer"],
  es: [
    "Ingeniero de IA",
    "Desarrollador Full Stack",
    "Desarrollador Flutter",
    "Ingeniero de Automatización",
    "Ingeniero Cloud",
  ],
};

export const I18N: Record<string, Record<Lang, string>> = {
  "nav.about": { en: "About", es: "Sobre mí" },
  "nav.skills": { en: "Skills", es: "Habilidades" },
  "nav.work": { en: "Work", es: "Proyectos" },
  "nav.github": { en: "GitHub", es: "GitHub" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.cta": { en: "Let's talk", es: "Hablemos" },
  "hero.badge": { en: "AVAILABLE FOR PROJECTS — 2026", es: "DISPONIBLE PARA PROYECTOS — 2026" },
  "hero.name": { en: "Dilan Aragón", es: "Dilan Aragón" },
  "hero.tagline": { en: "builds intelligent software.", es: "construye software inteligente." },
  "hero.cta1": { en: "Explore my work", es: "Explora mi trabajo" },
  "hero.cta2": { en: "Get in touch", es: "Contáctame" },
  "hero.scroll": { en: "SCROLL", es: "DESLIZA" },
  "about.label": { en: "01 — ABOUT", es: "01 — SOBRE MÍ" },
  "about.h2": {
    en: "Independent full-stack developer with an AI-native workflow.",
    es: "Desarrollador full-stack independiente con un flujo de trabajo nativo en IA.",
  },
  "about.p1": {
    en: "I'm Dilan Smith Aragón Ortiz — a developer who ships end-to-end products: from data models and APIs to polished cross-platform interfaces. I work AI-first, pairing tools like Claude with a deep stack of React, Flutter, Node and Supabase to move from idea to production fast.",
    es: "Soy Dilan Smith Aragón Ortiz — un desarrollador que entrega productos de principio a fin: desde modelos de datos y APIs hasta interfaces multiplataforma pulidas. Trabajo AI-first, combinando herramientas como Claude con un stack profundo de React, Flutter, Node y Supabase para pasar de la idea a producción rápido.",
  },
  "about.p2a": {
    en: "My focus: business software that feels effortless — like ",
    es: "Mi enfoque: software empresarial que se siente sin esfuerzo — como ",
  },
  "about.p2b": {
    en: ", a lightweight ERP for managing accounts payable and receivable.",
    es: ", un ERP ligero para gestionar cuentas por pagar y por cobrar.",
  },
  "about.badge": { en: "● building right now", es: "● construyendo ahora" },
  "stat.years": { en: "Years coding", es: "Años programando" },
  "stat.projects": { en: "Projects built", es: "Proyectos creados" },
  "stat.tech": { en: "Technologies", es: "Tecnologías" },
  "stat.ai": { en: "AI Native workflow", es: "Flujo nativo en IA" },
  "skills.label": { en: "02 — STACK", es: "02 — STACK" },
  "skills.h2": { en: "Technologies I work with", es: "Tecnologías con las que trabajo" },
  "skills.p": {
    en: "A full-spectrum stack — mobile, web, backend, data and AI.",
    es: "Un stack de espectro completo — móvil, web, backend, datos e IA.",
  },
  "work.label": { en: "03 — SELECTED WORK", es: "03 — TRABAJO SELECCIONADO" },
  "work.h2": { en: "Featured project", es: "Proyecto destacado" },
  "proj.kicker": { en: "ERP · FINTECH · 2025", es: "ERP · FINTECH · 2025" },
  "proj.video": { en: "▶ VIDEO PREVIEW", es: "▶ VISTA PREVIA" },
  "proj.desc": {
    en: "A lightweight ERP focused on accounts payable and receivable — giving businesses a clear, real-time picture of what's owed and what's due, without heavyweight enterprise complexity.",
    es: "Un ERP ligero enfocado en cuentas por pagar y por cobrar — que da a las empresas una visión clara y en tiempo real de lo que se debe y lo que vence, sin la complejidad del software empresarial pesado.",
  },
  "proj.github": { en: "GitHub ↗", es: "GitHub ↗" },
  "proj.demo": { en: "Request a demo", es: "Solicitar demo" },
  "more.h": { en: "More projects in progress", es: "Más proyectos en camino" },
  "more.p": {
    en: "New AI and automation work will land here soon.",
    es: "Nuevo trabajo de IA y automatización llegará pronto.",
  },
  "more.cta": { en: "Follow on GitHub →", es: "Sígueme en GitHub →" },
  "certs.label": { en: "04 — CERTIFICATIONS", es: "04 — CERTIFICACIONES" },
  "certs.h2": { en: "Verified credentials", es: "Credenciales verificadas" },
  "certs.credly": { en: "View all on Credly ↗", es: "Ver todo en Credly ↗" },
  "certs.pdf": { en: "Academic transcript (PDF)", es: "Certificado académico (PDF)" },
  "cert.title": { en: "Certification badge", es: "Insignia de certificación" },
  "cert.issuer": { en: "DROP BADGE IMAGE — SEE CREDLY", es: "ARRASTRA LA INSIGNIA — VER CREDLY" },
  "gh.label": { en: "05 — GITHUB", es: "05 — GITHUB" },
  "gh.h2": { en: "Open-source activity", es: "Actividad open-source" },
  "gh.sub": { en: "CONTRIBUTIONS — LAST 12 MONTHS", es: "CONTRIBUCIONES — ÚLTIMOS 12 MESES" },
  "gh.open": { en: "Open profile ↗", es: "Ver perfil ↗" },
  "ghs.contrib": { en: "Contributions", es: "Contribuciones" },
  "ghs.repos": { en: "Repositories", es: "Repositorios" },
  "ghs.stars": { en: "Stars earned", es: "Estrellas" },
  "ghs.streak": { en: "Commit streak", es: "Racha de commits" },
  "gh.langs": { en: "TOP LANGUAGES", es: "LENGUAJES PRINCIPALES" },
  "exp.label": { en: "06 — EXPERIENCE", es: "06 — EXPERIENCIA" },
  "exp.h2": { en: "The journey so far", es: "El camino hasta ahora" },
  "tl1.period": { en: "2024 — PRESENT", es: "2024 — PRESENTE" },
  "tl1.role": { en: "Independent Full-Stack Developer", es: "Desarrollador Full-Stack Independiente" },
  "tl1.org": { en: "Freelance", es: "Freelance" },
  "tl1.desc": {
    en: "Designing and shipping complete products for clients and my own ventures — web apps in React/Next.js, mobile apps in Flutter, backends on Node, Supabase and Firebase.",
    es: "Diseño y entrego productos completos para clientes y proyectos propios — apps web en React/Next.js, apps móviles en Flutter y backends en Node, Supabase y Firebase.",
  },
  "tl2.period": { en: "2025", es: "2025" },
  "tl2.role": { en: "Creator — BilleteraGestia", es: "Creador — BilleteraGestia" },
  "tl2.org": { en: "Personal product", es: "Producto personal" },
  "tl2.desc": {
    en: "Built a lightweight ERP for accounts payable and receivable from zero to working product: data model, API, and a clean finance-focused interface.",
    es: "Construí un ERP ligero de cuentas por pagar y por cobrar desde cero hasta producto funcional: modelo de datos, API y una interfaz financiera limpia.",
  },
  "tl3.period": { en: "ONGOING", es: "EN CURSO" },
  "tl3.role": { en: "AI Engineering & Certifications", es: "Ingeniería de IA y Certificaciones" },
  "tl3.org": { en: "Continuous learning", es: "Aprendizaje continuo" },
  "tl3.desc": {
    en: "Deepening AI-assisted development with Claude and modern tooling; verified credentials published on Credly.",
    es: "Profundizando en el desarrollo asistido por IA con Claude y herramientas modernas; credenciales verificadas publicadas en Credly.",
  },
  "contact.label": { en: "07 — CONTACT", es: "07 — CONTACTO" },
  "contact.h1a": { en: "Let's build something", es: "Construyamos algo" },
  "contact.h1b": { en: "worth talking about.", es: "que valga la pena." },
  "contact.p": {
    en: "Open to freelance projects, product collaborations and full-time opportunities.",
    es: "Abierto a proyectos freelance, colaboraciones de producto y oportunidades de tiempo completo.",
  },
  "ct.linkedin": { en: "LinkedIn", es: "LinkedIn" },
  "ct.github": { en: "GitHub", es: "GitHub" },
  "ct.email": { en: "Email", es: "Correo" },
  "ct.resume": { en: "Download resume", es: "Descargar CV" },
  "ct.call": { en: "Book a call", es: "Agenda una llamada" },
  "footer.rights": { en: "© 2026 DILAN SMITH ARAGÓN ORTIZ", es: "© 2026 DILAN SMITH ARAGÓN ORTIZ" },
  "footer.right": {
    en: "DESIGNED & BUILT WITH AI-NATIVE TOOLING",
    es: "DISEÑADO Y CONSTRUIDO CON HERRAMIENTAS DE IA",
  },
};

export function translate(lang: Lang, key: string): string {
  const entry = I18N[key];
  return entry ? entry[lang] : key;
}

export const NAV_LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#work", key: "nav.work" },
  { href: "#github", key: "nav.github" },
  { href: "#contact", key: "nav.contact" },
] as const;

// `color` is each brand's official simple-icons hex. A few brand marks are
// pure black/near-black (Next.js, Vercel, GitHub, OpenJDK, Anthropic) and
// would be invisible as a glow on our #050505 background, so those use the
// brand's own recognized light/dark-mode variant instead (documented inline).
export const SKILLS = [
  { name: "Python", slug: "python", glyph: "Py", color: "#3776AB" },
  { name: "Flutter", slug: "flutter", glyph: "Fl", color: "#02569B" },
  { name: "React", slug: "react", glyph: "Re", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", glyph: "Ne", color: "#FFFFFF" }, // brand mark is black; Next.js renders white-on-dark
  { name: "TypeScript", slug: "typescript", glyph: "Ts", color: "#3178C6" },
  { name: "Node.js", slug: "nodedotjs", glyph: "No", color: "#5FA04E" },
  { name: "Supabase", slug: "supabase", glyph: "Su", color: "#3FCF8E" },
  { name: "Firebase", slug: "firebase", glyph: "Fi", color: "#DD2C00" },
  { name: "PostgreSQL", slug: "postgresql", glyph: "Pg", color: "#4169E1" },
  { name: "C#", slug: "dotnet", glyph: "C#", color: "#512BD4" },
  { name: "C++", slug: "cplusplus", glyph: "C+", color: "#00599C" },
  { name: "Java", slug: "openjdk", glyph: "Ja", color: "#007396" }, // OpenJDK mark is black; using Java's blue
  { name: "Tailwind", slug: "tailwindcss", glyph: "Tw", color: "#06B6D4" },
  { name: "Claude", slug: "anthropic", glyph: "Cl", color: "#D97757" }, // Anthropic mark is near-black; using Claude's coral accent
  { name: "Vercel", slug: "vercel", glyph: "Ve", color: "#FFFFFF" }, // brand mark is black; Vercel renders white-on-dark
  { name: "Git & GitHub", slug: "github", glyph: "Gh", color: "#FFFFFF" }, // brand mark is near-black; GitHub renders white-on-dark
  { name: "Docker", slug: "docker", glyph: "Do", color: "#2496ED" },
  { name: "Linux", slug: "linux", glyph: "Li", color: "#FCC624" },
].map((s) => ({ ...s, iconUrl: `https://cdn.simpleicons.org/${s.slug}/ece0cb` })) as {
  name: string;
  slug: string;
  glyph: string;
  color: string;
  iconUrl: string;
}[];

export const STAT_KEYS = ["stat.years", "stat.projects", "stat.tech", "stat.ai"] as const;
export const STAT_VALUES = ["3+", "10+", "18+", "AI"] as const;

export const PROJECT_TAGS = ["React", "Supabase", "Node.js", "TypeScript", "PostgreSQL"];

export type Certification = { file: string; title: string; issuer: string };

// Real Credly badges from /public/badges — titles/issuers read directly off each badge image.
export const CERTIFICATIONS: Certification[] = [
  { file: "aws-academy-graduate-cloud-foundations-training-bad.png", title: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy" },
  { file: "ccna-switching-routing-and-wireless-essentials.1.png", title: "CCNA: Switching, Routing & Wireless Essentials", issuer: "Cisco Networking Academy" },
  { file: "python-essentials-1.1.png", title: "Python Essentials 1", issuer: "Cisco Networking Academy" },
  { file: "javascript-essentials-1.png", title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy" },
  { file: "introduction-to-cybersecurity.png", title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
  { file: "introduction-to-data-science.png", title: "Introduction to Data Science", issuer: "Cisco Networking Academy" },
  { file: "english-for-it-1.png", title: "English for IT 1", issuer: "Cisco Networking Academy" },
  { file: "networking-academy-learn-a-thon-2023.png", title: "Learn-A-Thon 2023 — Participant", issuer: "Cisco Networking Academy" },
  { file: "crud-operations-in-mongodb.1.png", title: "CRUD Operations", issuer: "MongoDB" },
  { file: "from-relational-model-sql-to-mongodb-s-document-mod.png", title: "Relational to Document Model", issuer: "MongoDB" },
  { file: "mongodb-aggregation-fundamentals.png", title: "Fundamentals of Data Transformation", issuer: "MongoDB" },
  { file: "mongodb-schema-design-optimization-skill-badge.png", title: "Schema Design Optimization", issuer: "MongoDB" },
  { file: "mongodb-schema-design-patterns-and-anti-patterns-sk.png", title: "Schema Patterns and Anti-patterns", issuer: "MongoDB" },
  { file: "mongodb-advanced-schema-design-patterns-and-anti-pa.png", title: "Advanced Schema Patterns and Anti-patterns", issuer: "MongoDB" },
];

export const GH_STAT_KEYS = ["ghs.contrib", "ghs.repos", "ghs.stars", "ghs.streak"] as const;
export const GH_STAT_VALUES = ["620+", "24", "12", "98%"] as const;

// Static fallback (used only if the live GitHub fetch fails at build time).
// `brandColor` lights up on hover; `color` is the beige-scale bar fill.
export const GH_LANGUAGES = [
  { name: "TypeScript", pct: 34, color: "#ece0cb", brandColor: "#3178C6" },
  { name: "Dart", pct: 26, color: "#b8ab93", brandColor: "#0175C2" },
  { name: "Python", pct: 20, color: "#8a8172", brandColor: "#3776AB" },
  { name: "C#", pct: 12, color: "#5c574d", brandColor: "#512BD4" },
  { name: "Other", pct: 8, color: "#38352f", brandColor: "#7d786e" },
];

export const TIMELINE = [
  { period: "tl1.period", role: "tl1.role", org: "tl1.org", desc: "tl1.desc" },
  { period: "tl2.period", role: "tl2.role", org: "tl2.org", desc: "tl2.desc" },
  { period: "tl3.period", role: "tl3.role", org: "tl3.org", desc: "tl3.desc" },
];

export const CONTACTS = [
  { labelKey: "ct.linkedin", glyph: "in", href: "https://www.linkedin.com/in/dilan7/" },
  { labelKey: "ct.github", glyph: "gh", href: "https://github.com/dilanaragon07" },
  { labelKey: "ct.email", glyph: "@", href: "mailto:dilanaragon07@gmail.com" },
  { labelKey: "ct.resume", glyph: "↓", href: "#" },
  { labelKey: "ct.call", glyph: "◷", href: "#" },
];

export const LINKS = {
  github: "https://github.com/dilanaragon07",
  githubRepo: "https://github.com/dilanaragon07/BilleteraGestia",
  linkedin: "https://www.linkedin.com/in/dilan7/",
  credly: "https://www.credly.com/users/dilan-aragon-ortiz",
  email: "mailto:dilanaragon07@gmail.com",
};
