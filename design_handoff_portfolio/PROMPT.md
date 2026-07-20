# Prompt para Claude Code

Copia y pega esto en Claude Code desde la carpeta del handoff:

---

Construye mi sitio portfolio personal como una app **Next.js 14+ (App Router) + Tailwind CSS + Framer Motion**, lista para deploy en Vercel.

En esta carpeta tienes:
- `README.md` — especificación completa del diseño (tokens, secciones, medidas, animaciones). Síguela al pie de la letra.
- `Dilan Portfolio.dc.html` — el prototipo HTML de referencia. Es la fuente de verdad visual: ábrelo, lee sus estilos inline y su JS (incluye el diccionario de traducciones `Component.I18N` y `Component.ROLES` que debes reutilizar tal cual). NO copies el archivo directamente; recréalo con componentes React + Tailwind.
- `photo-dilan.jpeg` (foto de perfil) y `academic_transcript.pdf` (ponlo en `/public` y enlázalo desde el botón "Academic transcript (PDF)" de la sección Certifications).

Requisitos clave:
1. Dark mode only, paleta exacta del README: negro #050505, grises, blancos y beige (#ece0cb / #d8c4a0). PROHIBIDO usar azules o morados.
2. Fuentes vía next/font: Space Grotesk (títulos), Manrope (cuerpo), JetBrains Mono (labels).
3. Una sola página con secciones: Nav pill fija, Hero (partículas canvas, orbes con deriva, parallax de mouse, rol rotativo con cursor de terminal), About (foto con borde cónico animado + 4 stats), Skills (18 tarjetas con iconos simple-icons tintados #ece0cb y fallback a glifo), Projects (BilleteraGestia), Certifications (botón PDF + link Credly + 3 tarjetas), GitHub (gráfico de contribuciones + stats), Experience (timeline), Contact (pills) y footer.
4. **Switch de idioma EN/ES** en la nav: transición donde cada texto se descompone en 1s y 0s aleatorios (re-aleatorizados cada frame) mientras el texto del otro idioma se revela de izquierda a derecha en ~900ms (easing p²). Implémentalo como un hook `useScrambleText` + contexto de idioma; persiste el idioma en localStorage y actualiza `<html lang>`.
5. Scroll reveal en todas las secciones (IntersectionObserver o Framer Motion `whileInView`, 0.8s cubic-bezier(.2,.7,.2,1), stagger 80ms, una sola vez) y scroll suave.
6. Respeta `prefers-reduced-motion` (desactiva partículas, parallax y scramble → swap con fade).
7. Enlaces reales: GitHub https://github.com/dilanaragon07 · repo https://github.com/dilanaragon07/BilleteraGestia · LinkedIn https://www.linkedin.com/in/dilan7/ · Credly https://www.credly.com/users/dilan-aragon-ortiz · email dilanaragon07@gmail.com. Resume y Calendly quedan como `#` con TODO.
8. Responsive: en <1024px el grid About pasa a 1 columna, Skills a 3–4 columnas, la tarjeta de proyecto a 1 columna; en móvil (<640px) Skills 2 columnas, stats 2×2, nav colapsada a logo + botón idioma + menú; hit targets ≥44px.
9. SEO básico (metadata, OG) y accesibilidad (contraste, focus visible, aria-labels).
10. Código limpio: componentes por sección en `components/`, datos y diccionario i18n en `lib/content.ts`. Sin librerías innecesarias.

Al terminar: `npm run build` debe pasar sin errores y sin warnings de ESLint.

---
