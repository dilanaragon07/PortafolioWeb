# Handoff: Portfolio personal — Dilan Aragón

## Overview
Sitio portfolio de una sola página para Dilan Smith Aragón Ortiz (AI Engineer / Full Stack Developer). Estética premium dark-mode: negro profundo, grises, blancos y beige (SIN azules/morados). Incluye switch de idioma EN/ES con transición de "bits" (las letras se convierten en 1s y 0s al azar mientras se forman las palabras del otro idioma).

## Sobre los archivos de diseño
`Dilan Portfolio.dc.html` es una **referencia de diseño en HTML** (prototipo funcional), no código de producción. La tarea es **recrear este diseño** en el stack elegido — recomendado: **Next.js 14+ (App Router) + Tailwind CSS + Framer Motion**, desplegado en Vercel. Si ya existe un codebase, usar sus patrones. `image-slot.js` es solo el placeholder de imágenes del prototipo — en producción usar `<Image>` de Next con archivos reales.

## Fidelidad
**Alta (hi-fi).** Colores, tipografía, espaciados, copys y animaciones son finales. Recrear píxel a píxel.

## Design tokens
Colores:
- Fondo página: `#050505`
- Fondos de tarjeta (glass): `rgba(255,255,255,.03)` + `backdrop-filter: blur(16–24px)`
- Bordes: `rgba(255,255,255,.07–.14)`; borde hover/acento: `rgba(236,224,203,.35–.7)`
- Texto principal: `#f2efe9` / blanco `#fff` en títulos
- Texto secundario: `#a19c92`; muted: `#7d786e`; muy tenue: `#6b675f`, `#5c574d`
- Beige acento: `#ece0cb` (principal), `#d8c4a0` (links/labels), gradiente de texto `linear-gradient(90deg,#ece0cb,#9c9284)`
- Botón primario: fondo `#ece0cb`, texto `#12100c`, hover fondo `#fff` + glow `0 0 40–60px rgba(236,224,203,.4–.45)`

Tipografía (Google Fonts):
- Display/títulos: **Space Grotesk** 600–700, letter-spacing −0.02 a −0.03em. H1 hero: `clamp(56px,7.4vw,104px)`, line-height 1.02. H2 sección: `clamp(32px,3.4vw,46px)`.
- Cuerpo: **Manrope** 400–800. Párrafos 16–17px, line-height 1.7–1.75.
- Mono (labels/kickers/terminal): **JetBrains Mono** 11–17px, letter-spacing .08–.22em, MAYÚSCULAS.

Radios: pills/botones `100px`; tarjetas `18–28px`; contenedores grandes `28–32px`.
Sombras: `0 20px 60px rgba(0,0,0,.5)` (nav), glows beige `0 0 24–60px rgba(216,196,160,.15–.45)`.
Espaciado: secciones `padding: 100–140px 40px`, max-width 1200px (experiencia 900px); gaps 14–20px en grids.

## Estructura de secciones (en orden)
Cada sección lleva kicker mono beige `NN — NOMBRE`. Fondo global: canvas fijo de ~60 partículas beige que derivan + un glow radial de 560px que sigue al cursor.

1. **Nav** — pill fija (top 20px, centrada), glass blur 24px. Logo "dilan.dev" (".dev" beige), links About/Skills/Work/GitHub/Contact, botón "Let's talk" (primario) y botón **EN/ES** (pill outline, mono 12px) que dispara la transición de idioma.
2. **Hero** — 100vh, centrado; padding 130px top (respeta nav) / 90px bottom. Dos orbes radiales beige/blanco difuminados (blur 60–70px) con animación de deriva 14s/18s; grid de líneas 72px con máscara radial. Badge pill "AVAILABLE FOR PROJECTS — 2026" con punto pulsante. H1 "Dilan Aragón" + línea 2 con gradiente beige animado (shimmer 7s). Subtítulo terminal: `> {rol}▊` — rota cada 2.6s entre: AI Engineer, Full Stack Developer, Flutter Developer, Automation Engineer, Cloud Engineer (fade+slide 350ms). CTAs: "Explore my work" (primario) y "Get in touch" (ghost). Indicador SCROLL (oculto si viewport < 700px de alto). Parallax con mouse: contenido ±18px, orbes ±30px.
3. **About** — grid `380px 1fr`, gap 80px. Foto en marco con borde cónico girando (conic-gradient beige, animación 7s) radio 28px, alto 440px, glow difuso detrás; chip flotante "● building right now" (animación floaty 5s). Derecha: H2, dos párrafos bio, grid 4 stats (valor 32px gradiente beige + label uppercase 12.5px): 3+ Years coding, 10+ Projects built, 18+ Technologies, AI Native workflow.
4. **Skills** — grid 6 columnas, 18 tarjetas glass (radio 20px, padding 28px 12px): icono simpleicons tintado `#ece0cb` (26px) en caja 52px radio 14px + nombre 13px. Hover: translateY(-6px), borde beige, glow. Tech: Python, Flutter, React, Next.js, TypeScript, Node.js, Supabase, Firebase, PostgreSQL, C# (slug dotnet), C++ (cplusplus), Java (openjdk), Tailwind, Claude (anthropic), Vercel, Git & GitHub (github), Docker, Linux. Fallback si el icono falla: glifo de 2 letras.
5. **Projects** — tarjeta hero glass radio 28px, grid `1.15fr 1fr`. Izquierda: screenshot/video de BilleteraGestia (min-height 460px, radio 18px) con badge "▶ VIDEO PREVIEW". Derecha: kicker "ERP · FINTECH · 2025", H3 34px "BilleteraGestia", descripción, badges tech pill (React, Supabase, Node.js, TypeScript, PostgreSQL), botones "GitHub ↗" (→ https://github.com/dilanaragon07/BilleteraGestia) y "Request a demo". Debajo: banda border-dashed "More projects in progress" + link "Follow on GitHub →".
6. **Certifications** — header con H2 + dos botones: "Academic transcript (PDF)" (primario, abre el PDF) y "View all on Credly ↗" (outline → https://www.credly.com/users/dilan-aragon-ortiz). Grid 3 tarjetas con borde cónico animado (9s), imagen 220px + título/emisor. Hover: translateY(-8px) scale(1.02).
7. **GitHub** — panel glass 28px: avatar "DA" + @dilanaragon07 + link perfil; gráfico de contribuciones 52×7 celdas redondeadas en 5 tonos beige (`rgba(236,224,203,.05/.18/.38/.62/.92)`); 4 stats (620+ Contributions, 24 Repositories, 12 Stars, 98% Commit streak); barra de lenguajes apilada (TypeScript 34%, Dart 26%, Python 20%, C# 12%, Other 8%) en escala beige→gris. *En producción: consumir la API de GitHub real.*
8. **Experience** — timeline vertical (línea 1px gradiente beige, dots con glow): 2024—PRESENT Independent Full-Stack Developer / 2025 Creator — BilleteraGestia / ONGOING AI Engineering & Certifications.
9. **Contact** — tarjeta glass 32px centrada con glow superior; H2 con segunda línea en gradiente; pills: LinkedIn (linkedin.com/in/dilan7), GitHub, Email (dilanaragon07@gmail.com), Download resume (pendiente URL), Book a call (pendiente Calendly). Footer mono: © 2026 + crédito.

## Interacciones y animaciones
- **Scroll reveal**: todo elemento marcado entra con opacity 0 → 1 y translateY(28px) → 0, `0.8s cubic-bezier(.2,.7,.2,1)`, stagger 80ms, IntersectionObserver threshold 0.12, una sola vez.
- **Switch de idioma (feature clave)**: al pulsar EN/ES, cada texto traducible se anima 900ms: los caracteres pendientes se muestran como '0'/'1' aleatorios (re-aleatorizados cada frame) y el texto destino se revela de izquierda a derecha con easing cuadrático (`shown = floor(p²·len)`). El diccionario completo EN/ES está embebido en `Dilan Portfolio.dc.html` (objeto `Component.I18N` + `Component.ROLES`) — reutilizarlo tal cual. El rol rotativo del hero también se traduce. `html.lang` se actualiza.
- Scroll suave (`scroll-behavior:smooth` o Lenis para lujo extra).
- Hovers: siempre con transición 300–400ms; nunca cambios abruptos.

## Estado
- `lang: 'en' | 'es'` (persistir en localStorage es deseable)
- índice del rol rotativo; flag `animando` que bloquea el toggle durante la transición
- Tweaks del prototipo: `particles` (bool), `motion` ('cinematic'|'subtle' — reduce parallax al 40%). Respetar `prefers-reduced-motion`.

## Assets
- `photo-dilan.jpeg` — foto de perfil (incluida)
- `academic_transcript.pdf` — certificado académico (incluido; el botón de Certifications lo abre)
- Iconos: https://cdn.simpleicons.org/{slug}/ece0cb (o paquete `simple-icons` local)
- Pendientes del cliente: screenshots/video de BilleteraGestia, badges de Credly, CV descargable, URL de Calendly

## Files
- `Dilan Portfolio.dc.html` — diseño completo (markup, estilos inline, lógica JS, diccionario i18n)
- `image-slot.js` — helper de placeholders del prototipo (no portar)
- `PROMPT.md` — prompt listo para pegar en Claude Code
