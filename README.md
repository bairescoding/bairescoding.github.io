# BairesCoding Website

[![Website](https://img.shields.io/badge/Website-Live-blue)](https://bairescoding.github.io)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Sitio web oficial de BairesCoding - Transformamos ideas en soluciones digitales extraordinarias.

## 🚀 Tecnologías

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript** - Vanilla JS modular
- **Web3Forms** - Formulario de contacto sin backend

## 📁 Estructura del Proyecto

```
.
├── index.html              # Página principal
├── css/                    # Estilos CSS
│   ├── variables.css       # Variables y temas
│   ├── base.css           # Reset y estilos base
│   ├── components.css     # Componentes reutilizables
│   ├── sections.css       # Estilos de secciones
│   ├── animations.css     # Animaciones y keyframes
│   └── responsive.css     # Media queries
├── js/                     # JavaScript modular
│   ├── theme-toggle.js    # Cambio de tema claro/oscuro
│   ├── navigation.js      # Navegación y menú móvil
│   ├── particles.js       # Efecto de partículas
│   ├── typing.js          # Efecto de tipeo
│   ├── scroll.js          # Scroll animations
│   ├── counters.js        # Contadores animados
│   ├── modal.js           # Modal de contacto
│   └── main.js            # Inicialización
├── img/                    # Imágenes
│   ├── bairescoding.svg   # Logo SVG
│   └── bairescoding.png   # Logo PNG
├── docs/                   # Documentación
│   ├── AGENTS.md          # Guía de agentes de IA
│   ├── USAGE.md           # Guía de uso de skills
│   └── i18n/              # Traducciones
├── .claude/
│   └── skills.json        # Configuración de skills
├── robots.txt             # Directivas para crawlers
├── sitemap.xml            # Mapa del sitio
├── SKILLS.md              # Catálogo de skills
├── CHANGELOG.md           # Registro de cambios
└── README.md              # Este archivo
```

## ✨ Características

- 🌓 **Tema Claro/Oscuro** - Toggle persistente con localStorage
- 📱 **Diseño Responsive** - Optimizado para todos los dispositivos
- ♿ **Accesibilidad** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimizado** - Schema.org, meta tags, Open Graph
- ⚡ **Performance** - Optimizado para Core Web Vitals
- 🎨 **Animaciones** - Efectos visuales con CSS y JS
- 🌐 **Multilenguaje** - Soporte para español, inglés y portugués

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
- Navegador moderno con soporte para ES6+
- Servidor local para desarrollo (Live Server, http-server, etc.)

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

| Métrica | Target | Estado |
|---------|--------|--------|
| Health Score | > 85 | ⏳ Pendiente |
| WCAG 2.1 AA | Pass | ✅ Implementado |
| LCP | < 2.5s | ⏳ Pendiente |
| INP | < 200ms | ⏳ Pendiente |
| CLS | < 0.1 | ⏳ Pendiente |

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