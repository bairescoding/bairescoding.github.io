# Skills del Ecosistema skills.sh

Este documento describe las skills instaladas en el repositorio para mejorar la calidad del código, accesibilidad, SEO, performance y flujo de trabajo con IA.

## Skills Instaladas

### Core (Prioridad Alta)

#### 1. web-design-guidelines

- **Owner:** vercel-labs/agent-skills
- **Descripción:** Review files for compliance with Web Interface Guidelines
- **Instalación:** `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot, Gemini CLI
- **Uso:** Audita archivos HTML/CSS contra las guías de diseño web de Vercel

#### 2. frontend-design

- **Owner:** anthropics/skills
- **Descripción:** Creation of distinctive, production-grade frontend interfaces
- **Instalación:** `npx skills add https://github.com/anthropics/skills --skill frontend-design`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot, Gemini CLI
- **Uso:** Guía para crear interfaces frontend de alta calidad, evitando diseños genéricos de IA

#### 3. audit-website

- **Owner:** squirrelscan/skills
- **Descripción:** Audit websites for SEO, technical, content, performance and security issues
- **Instalación:** `npx skills add https://github.com/squirrelscan/skills --skill audit-website`
- **CLI:** `squirrel`
- **Agentes compatibles:** OpenCode, Claude Code, Cursor, Gemini CLI
- **Uso:** Auditoría completa del sitio web (230+ reglas en 21 categorías)

#### 4. seo-audit

- **Owner:** coreyhaines31/marketingskills
- **Descripción:** Expert SEO audit to identify issues and provide actionable recommendations
- **Instalación:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot
- **Uso:** Auditoría SEO especializada con enfoque en crawlability, indexación y on-page SEO

#### 5. responsive-design

- **Owner:** wshobson/agents
- **Descripción:** Modern responsive design techniques for all screen sizes
- **Instalación:** `npx skills add https://github.com/wshobson/agents --skill responsive-design`
- **Agentes compatibles:** OpenCode, Claude Code, Gemini CLI
- **Uso:** Implementación de diseño responsive moderno con container queries, fluid typography y CSS Grid

### Adicionales (Prioridad Media)

#### 6. accessibility-auditor

- **Owner:** patricio0312rev/skills
- **Descripción:** Comprehensive accessibility auditing for WCAG compliance
- **Instalación:** `npx skills add https://github.com/patricio0312rev/skills --skill accessibility-auditor`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot
- **Uso:** Auditoría de accesibilidad para cumplimiento WCAG 2.1

#### 7. web-perf

- **Owner:** cloudflare/skills
- **Descripción:** Web performance optimization and Core Web Vitals
- **Instalación:** `npx skills add https://github.com/cloudflare/skills --skill web-perf`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot
- **Uso:** Optimización de performance web y Core Web Vitals

#### 8. changelog-writer

- **Owner:** patricio0312rev/skills
- **Descripción:** Automated changelog generation from commits
- **Instalación:** `npx skills add https://github.com/patricio0312rev/skills --skill changelog-writer`
- **Agentes compatibles:** OpenCode, Claude Code
- **Uso:** Generación automática de CHANGELOG.md desde commits

#### 9. docs-starter-kit

- **Owner:** patricio0312rev/skills
- **Descripción:** Documentation starter templates and best practices
- **Instalación:** `npx skills add https://github.com/patricio0312rev/skills --skill docs-starter-kit`
- **Agentes compatibles:** OpenCode, Claude Code
- **Uso:** Plantillas y mejores prácticas para documentación

#### 10. frontend-internationalization-best-practices

- **Owner:** sergiodxa/agent-skills
- **Descripción:** Best practices for frontend internationalization and i18n
- **Instalación:** `npx skills add https://github.com/sergiodxa/agent-skills --skill frontend-internationalization-best-practices`
- **Agentes compatibles:** OpenCode, Claude Code, GitHub Copilot
- **Uso:** Mejores prácticas para internacionalización de frontend

## Comandos de Uso

### Instalación de Skills

```bash
# Instalar todas las skills core
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/squirrelscan/skills --skill audit-website
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
npx skills add https://github.com/wshobson/agents --skill responsive-design
```

### Auditoría con squirrel

```bash
# Instalar squirrel CLI primero: https://squirrelscan.com/download

# Auditoría completa del sitio
squirrel audit https://bairescoding.github.io --format llm --coverage full

# Auditoría rápida (25 páginas)
squirrel audit https://bairescoding.github.io --format llm --coverage quick

# Auditoría con máximo 200 páginas
squirrel audit https://bairescoding.github.io --format llm --coverage surface --max-pages 200
```

### Verificar Instalación

```bash
# Verificar squirrel
squirrel --version

# Verificar que skills están disponibles
npx skills list
```

## Enrutamiento de Skills

Las skills se activan automáticamente según el tipo de archivo:

| Tipo de Archivo | Skills Activadas |
| -------------- | ---------------- |
| `*.html` | web-design-guidelines, frontend-design, seo-audit, accessibility-auditor |
| `*.css` | web-design-guidelines, frontend-design, responsive-design, accessibility-auditor |
| `*.js` | frontend-design, web-perf |
| `*.md` | docs-starter-kit, changelog-writer |
| `img/*` | web-perf, audit-website |

## Referencias

- [skills.sh - Directorio de Skills](https://skills.sh)
- [Documentación de squirrel](https://docs.squirrelscan.com)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
