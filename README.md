# BairesCoding Website

[![Website](https://img.shields.io/badge/Website-Live-blue)](https://bairescoding.github.io)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Sitio web oficial de BairesCoding - Transformamos ideas en soluciones digitales extraordinarias.

## 🚀 Tecnologías

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Variables CSS, Grid, Flexbox, Animaciones, Container Queries
- **JavaScript** - Vanilla JS modular (ES6+)
- **Web3Forms** - Formulario de contacto sin backend
- **GitHub Actions** - CI/CD para despliegue automático

## 📁 Estructura del Proyecto

```txt
.
├── index.html              # Página principal (Español)
├── en/
│   └── index.html          # Versión en inglés
├── css/                    # Estilos CSS
│   ├── variables.css       # Variables CSS y temas
│   ├── base.css            # Reset y estilos base
│   ├── components.css      # Componentes reutilizables
│   ├── sections.css        # Estilos de secciones
│   ├── animations.css      # Animaciones y keyframes
│   └── responsive.css      # Media queries y Container Queries
├── js/                     # JavaScript modular
│   ├── theme-toggle.js     # Cambio de tema claro/oscuro
│   ├── navigation.js       # Navegación y menú móvil
│   ├── particles.js        # Efecto de partículas
│   ├── typing.js           # Efecto de tipeo
│   ├── scroll.js           # Scroll animations
│   ├── counters.js         # Contadores animados
│   ├── modal.js            # Modal de contacto
│   └── main.js             # Inicialización
├── img/                    # Imágenes optimizadas
│   ├── bairescoding.svg    # Logo SVG (vectorial)
│   ├── bairescoding.webp   # Logo WebP optimizado
│   ├── bairescoding.png    # Logo PNG (fallback)
│   ├── bairescoding-*.webp # Logo en múltiples tamaños (192, 320, 512, 640, 1024)
│   ├── bairescoding-*.png  # Logo PNG en múltiples tamaños
│   ├── apple-touch-icon.png # Icono para iOS
│   └── favicon-32.png      # Favicon principal
├── docs/                   # Documentación técnica
│   ├── AGENTS.md           # Guía de agentes de IA
│   ├── USAGE.md            # Guía de uso de skills
│   ├── css-variables-guide.md  # Guía completa de variables CSS
│   └── PERFORMANCE_REPORT.md   # Informe de rendimiento
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD para GitHub Pages
├── .claude/
│   └── skills.json         # Configuración de skills
├── site.webmanifest        # PWA manifest
├── robots.txt              # Directivas para crawlers
├── sitemap.xml             # Mapa del sitio multilingüe
├── .gitignore              # Archivos ignorados por git
├── .gitattributes          # Configuración de git
├── SKILLS.md               # Catálogo de skills
├── CHANGELOG.md            # Registro de cambios
├── LICENSE                 # Licencia MIT
└── README.md               # Este archivo
```

## ✨ Características

- 🌓 **Tema Claro/Oscuro** - Toggle persistente con localStorage y soporte para prefers-color-scheme
- 📱 **Diseño Responsive** - Mobile-First con CSS Container Queries
- ♿ **Accesibilidad** - WCAG 2.1 AA compliant, skip links, aria labels
- 🔍 **SEO Optimizado** - Schema.org, meta tags, Open Graph, hreflang
- ⚡ **Performance** - Optimizado para Core Web Vitals, imágenes WebP con srcset
- 🎨 **Animaciones** - Efectos visuales con CSS y JS, soporte para prefers-reduced-motion
- 🌐 **Multilenguaje** - Soporte para español e inglés (hreflang tags)
- 🚀 **CI/CD** - Despliegue automático con GitHub Actions
- 📦 **PWA Ready** - Web App Manifest para experiencia de app nativa
- 🖼️ **Imágenes Responsivas** - Srcset con múltiples tamaños y formatos WebP/PNG
- ✍️ **Tipografía Fluida** - Escalado tipográfico adaptable con clamp()

## 🛠️ Skills del Ecosistema skills.sh

Este proyecto utiliza skills de [skills.sh](https://skills.sh) para mejorar la calidad del código y el flujo de trabajo:

### Core Skills

- `web-design-guidelines` - Diseño web estático
- `frontend-design` - Frontend best practices
- `audit-website` - Auditoría SEO/Performance/A11y
- `seo-audit` - SEO especializado
- `responsive-design` - Responsive design

### Documentación

Ver [SKILLS.md](./SKILLS.md) para el catálogo completo.

## 🚀 Desarrollo

### Requisitos

- Navegador moderno con soporte para ES6+ y CSS Container Queries
- Servidor local para desarrollo (Live Server, http-server, etc.)
- Git para control de versiones

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/bairescoding/bairescoding.github.io.git
cd bairescoding.github.io

# Servir con Python 3
python -m http.server 8000

# O con Node.js
npx http-server

# O con PHP
php -S localhost:8000
```

Abrir `http://localhost:8000` en el navegador.

### Despliegue

El proyecto utiliza **GitHub Actions** para despliegue automático:

- **Automático**: Cada push a la rama `main` despliega automáticamente a GitHub Pages
- **URL**: [https://bairescoding.github.io](https://bairescoding.github.io)
- **Workflow**: Ver `.github/workflows/deploy.yml`

## 🤖 Agentes de IA

El proyecto está configurado para trabajar con agentes de IA especializados:

- `@frontend-agent` - UI/UX, CSS, componentes
- `@a11y-agent` - Accesibilidad WCAG
- `@seo-agent` - SEO on-page
- `@performance-agent` - Optimización de performance
- `@docs-agent` - Documentación
- `@i18n-agent` - Internacionalización

Ver [docs/AGENTS.md](./docs/AGENTS.md) para más detalles.

## 📊 Auditoría

### Comandos de Auditoría

```bash
# Instalar squirrel CLI
# https://squirrelscan.com/download

# Auditoría completa
squirrel audit https://bairescoding.github.io --format llm --coverage full

# Auditoría rápida
squirrel audit https://bairescoding.github.io --format llm --coverage quick
```

### Targets de Calidad

| Métrica | Target | Estado | Notas |
|---------|--------|--------|-------|
| Health Score | > 85 | ✅ Implementado | Ver [PERFORMANCE_REPORT.md](./docs/PERFORMANCE_REPORT.md) |
| WCAG 2.1 AA | Pass | ✅ Implementado | Skip links, aria labels, contraste |
| LCP | < 2.5s | ✅ Implementado | Optimizado con srcset y fetchpriority |
| INP | < 200ms | ⏳ Monitoreo | JavaScript modular optimizado |
| CLS | < 0.1 | ✅ Implementado | Dimensiones explícitas en imágenes |
| Imágenes WebP | 100% | ✅ Implementado | Con fallback PNG para compatibilidad |
| Mobile-First CSS | Pass | ✅ Implementado | Container queries implementados |

## 📚 Documentación Técnica

### Guías Disponibles

- **[CSS Variables Guide](./docs/css-variables-guide.md)** - Documentación completa del sistema de diseño CSS
- **[Performance Report](./docs/PERFORMANCE_REPORT.md)** - Análisis de Core Web Vitals y optimizaciones
- **[Agents Guide](./docs/AGENTS.md)** - Configuración y uso de agentes de IA
- **[Skills Usage](./docs/USAGE.md)** - Guía de uso del ecosistema skills.sh

## 📝 Changelog

Ver [CHANGELOG.md](./CHANGELOG.md) para el historial de cambios.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

## 📞 Contacto

- Website: [bairescoding.github.io](https://bairescoding.github.io)
- GitHub: [@BairesCoding](https://github.com/BairesCoding)
- LinkedIn: [BairesCoding](https://www.linkedin.com/company/bairescoding)
- Instagram: [@bairescoding](https://www.instagram.com/bairescoding)

---

Desarrollado con ❤️ en Buenos Aires para el mundo 🌍
