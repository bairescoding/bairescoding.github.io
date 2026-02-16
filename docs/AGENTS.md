# Agentes Configurados

Este documento describe los agentes especializados configurados para el proyecto y cómo utilizarlos.

## Agentes Disponibles

### 1. @frontend-agent

**Especialidad:** UI/UX, CSS, componentes frontend

**Skills asignadas:**

- frontend-design
- web-design-guidelines
- responsive-design

**Permisos:** lectura, escritura, ejecución

**Patrones de archivo:** `*.css`, `*.html`, `*.js`

**Uso:**

```bash
@frontend-agent Revisa los estilos CSS en css/variables.css para mejorar la consistencia del tema oscuro
```

**Cuándo usar:**

- Crear o modificar componentes CSS
- Implementar diseños responsive
- Optimizar la estructura HTML
- Mejorar la experiencia de usuario

---

### 2. @a11y-agent

**Especialidad:** Accesibilidad web y WCAG compliance

**Skills asignadas:**

- accessibility-auditor
- web-design-guidelines

**Permisos:** lectura, auditoría, sugerencias

**Patrones de archivo:** `*.html`, `*.css`

**Uso:**

```bash
@a11y-agent Audita index.html para verificar cumplimiento WCAG 2.1 AA
```

**Cuándo usar:**

- Verificar accesibilidad de nuevas secciones
- Revisar contraste de colores
- Implementar ARIA labels
- Optimizar navegación por teclado

**Requiere revisión humana:** Cambios que afecten navegación o estructura semántica

---

### 3. @seo-agent

**Especialidad:** SEO on-page y técnico

**Skills asignadas:**

- seo-audit
- audit-website

**Permisos:** lectura, auditoría, sugerencias

**Patrones de archivo:** `*.html`, `robots.txt`, `sitemap.xml`

**Uso:**

```bash
@seo-agent Optimiza las meta tags de index.html para mejorar posicionamiento
```

**Cuándo usar:**

- Optimizar meta tags y Open Graph
- Crear structured data (JSON-LD)
- Revisar jerarquía de headings
- Implementar sitemap.xml

**Requiere revisión humana:** Cambios en `<head>` o SEO crítico

---

### 4. @performance-agent

**Especialidad:** Optimización de performance

**Skills asignadas:**

- web-perf
- audit-website

**Permisos:** lectura, auditoría, sugerencias

**Patrones de archivo:** `*.html`, `*.css`, `*.js`, `img/*`

**Uso:**

```bash
@performance-agent Optimiza las imágenes en la carpeta img/ para mejorar Core Web Vitals
```

**Cuándo usar:**

- Optimizar imágenes (formato, tamaño, lazy loading)
- Implementar critical CSS
- Mejorar carga de fuentes
- Reducir bundle size de JS

---

### 5. @docs-agent

**Especialidad:** Documentación

**Skills asignadas:**

- docs-starter-kit
- changelog-writer

**Permisos:** lectura, escritura

**Patrones de archivo:** `*.md`, `README*`, `CHANGELOG*`

**Uso:**

```bash
@docs-agent Actualiza el CHANGELOG.md con los cambios recientes del último sprint
```

**Cuándo usar:**

- Crear o actualizar documentación
- Generar CHANGELOG desde commits
- Documentar componentes
- Crear guías de estilo

---

### 6. @i18n-agent

**Especialidad:** Internacionalización y multilingüismo

**Skills asignadas:**

- frontend-internationalization-best-practices

**Permisos:** lectura, escritura

**Patrones de archivo:** `*.html`, `*.js`, `locales/*`, `i18n/*`

**Uso:**

```bash
@i18n-agent Implementa la versión en inglés del sitio creando /en/index.html
```

**Cuándo usar:**

- Crear versiones en otros idiomas
- Extraer textos a archivos de traducción
- Implementar language switcher
- Agregar hreflang tags

---

## Enrutamiento Automático

Los agentes se activan automáticamente según el tipo de archivo:

| Directorio/Archivo | Agente Principal |
| ----------------- | ---------------- |
| `css/` | @frontend-agent, @a11y-agent |
| `js/` | @frontend-agent, @performance-agent |
| `img/` | @performance-agent |
| `*.html` | @frontend-agent, @seo-agent, @a11y-agent |
| `docs/` | @docs-agent |
| `locales/` | @i18n-agent |
| `robots.txt` | @seo-agent |
| `sitemap.xml` | @seo-agent |

## Flujo de Trabajo Recomendado

### Para nuevas features

1. **Planificación:** Usar `@docs-agent` para documentar el plan
2. **Desarrollo:** Invocar `@frontend-agent` para implementar
3. **Auditoría:** Ejecutar `@a11y-agent` y `@seo-agent` para revisar
4. **Optimización:** Usar `@performance-agent` para mejorar
5. **Documentación:** Actualizar docs con `@docs-agent`

### Para fixes de bugs

1. **Diagnóst:** Describir el problema al agente apropiado
2. **Fix:** Permitir al agente implementar la solución
3. **Validación:** Re-auditar con las skills relevantes
4. **Documentación:** Actualizar CHANGELOG si es necesario

## Límites y Permisos

- **Máximo 3 agentes en paralelo**
- **Revisión humana obligatoria para:**
  - Cambios en `<head>` del HTML
  - Cambios de SEO crítico
  - Cambios que rompan accesibilidad existente
  - Modificaciones en archivos de configuración

## Ejemplos de Uso Avanzado

### Auditoría completa del sitio

```bash
Primero, ejecuta @seo-agent y @a11y-agent en index.html para obtener un reporte de issues. Luego, @performance-agent debe revisar todas las imágenes y optimizarlas. Finalmente, documenta todos los hallazgos con @docs-agent.
```

### Implementación de nueva sección

```bash
@frontend-agent Crea una nueva sección de "Testimonios de Clientes" en el index.html siguiendo los estilos existentes en css/sections.css. @a11y-agent debe asegurar que la nueva sección cumpla WCAG 2.1 AA. @seo-agent debe optimizar las meta tags para la nueva sección.
```

### Optimización de performance

```bash
@performance-agent Realiza una auditoría completa de performance del sitio, enfocándote en: 1) Optimizar imágenes a WebP, 2) Implementar critical CSS, 3) Mejorar carga de fuentes de Google Fonts. Reporta los Core Web Vitals antes y después.
```
