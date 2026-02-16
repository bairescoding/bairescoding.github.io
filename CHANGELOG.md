# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

#### Configuración de Skills del Ecosistema skills.sh (#1)

- Archivo `.claude/skills.json` con mapeo completo de 10 skills
- Documentación `SKILLS.md` con catálogo de skills instaladas
- Documentación `docs/AGENTS.md` con definición de 6 agentes especializados
- Documentación `docs/USAGE.md` con guía de uso de skills

#### Accesibilidad (A11y)

- Skip link para navegación accesible
- `aria-expanded` dinámico en menú móvil con soporte para tecla Escape
- `aria-pressed` y anuncios a screen readers en theme-toggle
- Soporte para `prefers-reduced-motion`
- Mejoras en focus-visible y estilos de skip-link

#### SEO

- Schema.org JSON-LD structured data (Organization)
- Archivo `robots.txt` con directivas para crawlers
- Archivo `sitemap.xml` con soporte para múltiples idiomas
- Hreflang tags en ambas versiones del sitio (es/en)

#### Performance

- Preconnect y dns-prefetch a dominios externos
- Preload de fuentes críticas (Inter)
- Atributo `fetchpriority="high"` en logo principal
- Dimensiones explícitas en imágenes para CLS
- Lazy loading en imágenes no críticas
- Implementación de `will-change` y `contain` en animaciones CSS
- Apple touch icon para dispositivos iOS

#### Internacionalización (i18n)

- Versión completa en inglés en `/en/index.html`
- Hreflang tags para SEO multilingüe
- Sitemap actualizado con URLs de ambos idiomas

#### Documentación

- `README.md` completo con estructura, tecnologías y guías
- `CHANGELOG.md` siguiendo formato Keep a Changelog

### Skills Integradas

- `web-design-guidelines` (vercel-labs/agent-skills) - Diseño web estático
- `frontend-design` (anthropics/skills) - Frontend best practices
- `audit-website` (squirrelscan/skills) - Auditoría completa SEO/Performance/A11y
- `seo-audit` (coreyhaines31/marketingskills) - SEO especializado
- `responsive-design` (wshobson/agents) - Responsive design
- `accessibility-auditor` (patricio0312rev/skills) - Accesibilidad WCAG
- `web-perf` (cloudflare/skills) - Performance optimization
- `changelog-writer` (patricio0312rev/skills) - Generación de changelog
- `docs-starter-kit` (patricio0312rev/skills) - Documentación
- `frontend-internationalization-best-practices` (sergiodxa/agent-skills) - i18n

### Agentes Configurados

- `@frontend-agent` - UI/UX, CSS, componentes
- `@a11y-agent` - Accesibilidad web
- `@seo-agent` - SEO on-page y técnico
- `@performance-agent` - Optimización de performance
- `@docs-agent` - Documentación
- `@i18n-agent` - Internacionalización

## [1.0.0] - 2025-XX-XX

### Resumen

- Sitio web inicial de BairesCoding
- Diseño responsive con tema claro/oscuro
- Secciones: Hero, About, Services, Differences, Why Choose Us, Contact
- Formulario de contacto con Web3Forms
- Efectos visuales: particles, typing animation, counters, scroll animations
- Navegación móvil con menú hamburguesa
- Meta tags SEO (Open Graph, Twitter Cards)
- Favicon SVG y PNG

[Unreleased]: https://github.com/bairescoding/bairescoding.github.io/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/bairescoding/bairescoding.github.io/releases/tag/v1.0.0
