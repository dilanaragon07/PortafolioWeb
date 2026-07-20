# Informe de instalación — Entorno Claude Code (Frontend/Design/Marketing/Review)

**Fecha:** 2026-07-20 · **Máquina:** Linux Mint 22.3 (Zena) · **Claude Code:** v2.1.215

---

## 1. Resumen ejecutivo

- **13 repositorios/enlaces** analizados y clasificados (ninguno se asumió como Skill sin verificar).
- **~85 Skills** instaladas globalmente en `~/.claude/skills/` (symlinks a `~/.agents/skills/`, universales para 20+ agentes) + 4 skills de proyecto.
- **2 Plugins** instalados (`accesslint`, `claude-mem`), ambos `enabled`.
- **1 MCP server** de proyecto (`code-review-graph`) + 2 MCP embebidos en plugins (`accesslint`, `claude-mem`), todos conectando correctamente.
- **0 Agentes** instalados — ninguno de los repos pedidos define Agents (`~/.claude/agents/*.md`) propios; todos son Skills/Plugins.
- **2 gestores de paquetes nuevos** instalados: `uv` 0.11.29, `bun` 1.3.14.
- **0 enlaces simbólicos rotos**, **0 configuraciones existentes sobrescritas sin backup**.
- **1 incidente corregido**: el instalador de `code-review-graph` intentó configurar 9 herramientas de IA no solicitadas (Windsurf, Continue, Qwen Code, Copilot, Codex, OpenCode, Kiro, Qoder, CodeBuddy) — se detectó, se confirmó contigo y se revirtió, dejando solo la integración con Claude Code.

---

## 2. Clasificación de repositorios

| Repositorio | Tipo real | Acción tomada |
|---|---|---|
| anthropics/claude-code | La propia CLI (host) | Ya instalada (v2.1.215) — nada que hacer |
| emilkowalski/skills | Claude Skill collection (6) | ✅ Instalada global |
| alchaincyf/huashu-design | Claude Skill | ✅ Instalada global (reinstalación verificada — no había nada en disco pese a aparecer "disponible") |
| ComposioHQ/awesome-claude-skills | Awesome-list (catálogo, no instalable) | No aplica instalación — es referencia |
| vercel-labs/agent-browser | CLI Rust + Skill + MCP opcional | ✅ Instalado (CLI global + skill + Chrome) |
| mrdoob/three.js | Librería JS normal, no relacionada con Claude Code | No se instala en `~/.claude` — es dependencia de proyecto (`npm install three` cuando se use) |
| coreyhaines31/marketingskills | Claude Skill collection (46) | ✅ Instalada global (reinstalación verificada) |
| mcpmarket.com "Animation Designer" | Página agregadora sin repo único verificable | Sustituida (con tu aprobación) por **freshtechbro/claudedesignskills** (16 skills 3D/animación) |
| im5tu/claude flutter-animations SKILL.md | Archivo único dentro de colección personal, no repo dedicado | ✅ Copiado manualmente a `~/.claude/skills/flutter-animations/` |
| tirth8205/code-review-graph | MCP server + CLI Python | ✅ Instalado (uv tool) + grafo construido |
| AccessLint/skills | Plugin oficial de Claude Code | ✅ Instalado vía marketplace |
| thedotmack/claude-mem | Plugin (memoria persistente) | ✅ Instalado vía marketplace |
| impeccable.design → pbakaus/impeccable | Claude Skill real (el link dado era la landing, no el repo) | ✅ Instalada (global + proyecto) |

---

## 3. Skills instaladas — por categoría

### Frontend / UI / UX
| Skill | Alcance | Fuente |
|---|---|---|
| apple-design | global | emilkowalski/skills |
| emil-design-eng | global | emilkowalski/skills |
| modern-web-design | global | freshtechbro/claudedesignskills |
| animated-component-libraries | global | freshtechbro/claudedesignskills |
| impeccable | global + proyecto | pbakaus/impeccable |
| huashu-design | global | alchaincyf/huashu-design |

### Animación
animation-vocabulary, review-animations, improve-animations, find-animation-opportunities (emilkowalski/skills) · motion-framer, gsap-scrolltrigger, animejs, lottie-animations, locomotive-scroll, barba-js, scroll-reveal-libraries, lightweight-3d-effects, react-spring-physics (freshtechbro/claudedesignskills) — **todas global**

### Three.js / 3D / WebGL
threejs-webgl, react-three-fiber, babylonjs-engine, aframe-webxr, pixijs-2d, playcanvas-engine, spline-interactive, rive-interactive, substance-3d-texturing, blender-web-pipeline, web3d-integration-patterns — **todas global, freshtechbro/claudedesignskills**

### Flutter
flutter-animations — global, copiado manualmente de im5tu/claude

### Marketing (46 skills — coreyhaines31/marketingskills, global)
ab-testing, ad-creative, ads, ai-seo, analytics, aso, churn-prevention, co-marketing, cold-email, community-marketing, competitor-profiling, competitors, content-strategy, copy-editing, copywriting, cro, customer-research, directory-submissions, emails, free-tools, image, launch, lead-magnets, marketing-council, marketing-ideas, marketing-loops, marketing-plan, marketing-psychology, offers, onboarding, paywalls, popups, pricing, product-marketing, programmatic-seo, prospecting, public-relations, referrals, revops, sales-enablement, schema, seo-audit, signup, site-architecture, sms, social, video

### Accesibilidad (plugin `accesslint@accesslint`)
`accesslint:scan`, `accesslint:diff`, `accesslint:audit` — WCAG 2.2, con MCP server propio

### Code Review / Arquitectura (MCP `code-review-graph`, scope: proyecto)
review-changes, debug-issue, explore-codebase, refactor-safely (skills auto-generadas en `.claude/skills/` del proyecto)

### Testing / Browser Automation
agent-browser — global (CLI + skill + MCP opcional)

### Utilidades
skill-creator — global

Índice completo y navegable: **`~/.claude/SKILLS_INDEX.md`**

---

## 4. Plugins

| Plugin | Marketplace | Versión | Estado | Comando/Skill |
|---|---|---|---|---|
| accesslint | accesslint/skills | 0.8.0 | ✔ enabled | `accesslint:scan`, `accesslint:diff`, `accesslint:audit` |
| claude-mem | thedotmack/claude-mem | 13.11.0 | ✔ enabled | automático (hooks) + `npx claude-mem search <query>` |

## 5. MCP Servers

| Servidor | Alcance | Comando | Estado |
|---|---|---|---|
| code-review-graph | proyecto (`.mcp.json`) | `uvx code-review-graph serve` | ⏸ **Pendiente de aprobación** — abre `claude` en este proyecto y acéptalo la primera vez (medida de seguridad estándar) |
| accesslint MCP | plugin | `npx -y @accesslint/mcp@latest` | ✔ Conectado |
| claude-mem mcp-search | plugin | script interno del plugin | ✔ Conectado |

## 6. Agentes

Ninguno de los 13 repositorios define Agents personalizados (`~/.claude/agents/*.md`). No se instaló ninguno.

## 7. Hooks

Instalados por `code-review-graph install` en `.claude/settings.json` **del proyecto** (no global):
- `PostToolUse` (Edit|Write) → actualiza el grafo de conocimiento tras cada edición
- `SessionStart` → muestra estado del grafo al abrir el proyecto

Ambos con guard clauses (`command -v code-review-graph || exit 0`) — no rompen nada si la herramienta no está.

---

## 8. Dependencias del sistema instaladas

| Herramienta | Versión | Método | Para qué |
|---|---|---|---|
| uv | 0.11.29 | `curl \| sh` oficial, en `~/.local/bin` | code-review-graph |
| bun | 1.3.14 | `curl \| bash` oficial, en `~/.bun/bin` | claude-mem, impeccable |
| Chrome for Testing | 151.0.7922.34 | `agent-browser install` | agent-browser |

Ambos gestores quedaron persistidos en `~/.bashrc` / `~/.profile` — disponibles en cualquier terminal nueva sin pasos extra.

---

## 9. Corrección de incompatibilidad Linux Mint

`agent-browser install --with-deps` necesita instalar librerías `apt` (`libgtk-3-0t64`, `libnss3`, etc.) para que Chrome no falle al lanzar, pero requiere **contraseña sudo interactiva** que no puedo proporcionar desde aquí. **Acción pendiente tuya** (una sola vez):

```bash
sudo agent-browser install --with-deps
```

Si no lo ejecutas, `agent-browser` puede fallar al abrir un navegador visible con errores de "shared library" — no bloquea el resto del entorno.

---

## 10. Conflictos encontrados y corregidos

1. **Instalador de `code-review-graph` configuró 9 herramientas no solicitadas** (Windsurf, Continue, Qwen Code, GitHub Copilot/Copilot CLI, Codex, OpenCode, Kiro, Qoder, CodeBuddy) en el proyecto y en `$HOME`. Se te consultó y, por tu elección, se eliminó todo excepto la integración con Claude Code. Nada preexistente fue sobrescrito (todos los directorios se habían creado en ese mismo instante).
2. **`claude-mem install` se colgó** en modo interactivo (esperaba respuestas de terminal). Se detectó, se limpió el plugin a medio registrar (`cache-miss`), y se reinstaló con flags no interactivos (`--ide claude-code --provider claude --runtime worker --no-auto-start`).
3. **Peer-dependency conflict benigno** (`tree-sitter` 0.21 vs 0.22) durante la instalación de `claude-mem` — resuelto automáticamente por el propio instalador con `--legacy-peer-deps`, sin intervención necesaria.
4. **"Animation Designer" no era un repo verificable** — mcpmarket.com agrega múltiples skills homónimas de autores distintos. Resuelto sustituyéndolo por tu elección: `freshtechbro/claudedesignskills`.
5. **Encontré un intento previo abandonado** en la Papelera (`~/.local/share/Trash/files/skills/`) con clones crudos de estos mismos 9 repos, nunca instalados correctamente. No se restauró (podía estar desactualizado); se reinstaló todo limpio con los métodos oficiales.

## 11. Duplicados

Solo 1 "duplicado" intencional: `impeccable` existe tanto en `~/.claude/skills/` (global) como en `/home/nora/Descargas/PortafolioWeb/.claude/skills/` (proyecto). Esto es el comportamiento esperado de Claude Code — el scope de proyecto tiene prioridad sobre el global para ese proyecto, no es un error.

Ningún otro nombre de skill se repite. `huashu-design` y `marketing-skills` aparecían como "disponibles" antes de empezar pero **no existían en disco** (probablemente un artefacto de listado de ejemplo) — ahora están realmente instaladas y verificadas.

---

## 12. Verificación final

| Check | Resultado |
|---|---|
| Enlaces simbólicos rotos en `~/.claude` | 0 |
| Enlaces simbólicos rotos en `~/.agents` | 0 |
| Plugins con estado `enabled` | 2/2 |
| MCP servers conectando (excluyendo pendientes de aprobación manual y los que ya existían sin relación con esta tarea) | 3/3 |
| Skills reconocidas por el listado de Claude Code | Confirmado — las ~85 nuevas aparecen en el catálogo de skills disponibles de esta misma sesión |
| Backups creados antes de tocar `~/.claude.json` | 2 backups explícitos (`pre-code-review-graph`, `pre-claude-mem`) + backups automáticos del harness |

---

## 13. Recomendaciones adicionales

- **Aprobar el MCP de code-review-graph**: abre una sesión normal de `claude` en este proyecto — te pedirá aprobar `code-review-graph` una vez (medida de seguridad, no un error).
- **Arrancar el worker de memoria** cuando quieras usarlo: `npx claude-mem start` (autostart quedó desactivado a propósito para no consumir recursos en segundo plano sin que lo pidas).
- **Ejecutar `sudo agent-browser install --with-deps`** una vez, para evitar errores de librerías compartidas en Linux Mint al abrir un navegador visible.
- **three.js**: cuando empieces a usarlo en código, instálalo como dependencia real del proyecto (`npm install three @types/three`) — las skills `threejs-webgl` / `react-three-fiber` ya están listas para guiar esa implementación.
- **GSAP**: es licencia comercial fuera de ciertos usos gratuitos desde que Webflow la adquirió — revisa los términos si el portafolio es para un cliente comercial, antes de usar `gsap-scrolltrigger` en producción.
- **Vaciar la papelera** del intento anterior (`~/.local/share/Trash/`) si ya no la necesitas — no se tocó por precaución, son ~9 repos clonados sin usar.
- **`.env.example`** creado en la raíz del proyecto — nada es obligatorio, complétalo solo si activas búsqueda semántica en la nube o el modo `chat` de agent-browser.

---

*Índice completo de skills por categoría: `~/.claude/SKILLS_INDEX.md`*
