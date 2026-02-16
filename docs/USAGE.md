# Guía de Uso de Skills

Guía rápida para utilizar las skills instaladas en el repositorio.

## Índice

- [Primeros Pasos](#primeros-pasos)
- [Instalación de Skills](#instalación-de-skills)
- [Auditorías](#auditorías)
- [Agentes](#agentes)
- [Flujos de Trabajo](#flujos-de-trabajo)
- [Troubleshooting](#troubleshooting)

---

## Primeros Pasos

### 1. Verificar que skills están instaladas

Las skills se instalan a nivel de agente (OpenCode, Claude Code, etc.), no en el repositorio. Verifica que tu agente tenga acceso a las skills:

```bash
# En OpenCode, las skills se cargan automáticamente desde .claude/skills.json
# Verificar configuración
cat .claude/skills.json
```

### 2. Instalar squirrel CLI (para audit-website)

Si usarás la skill `audit-website`, necesitas instalar el CLI:

```bash
# Descargar desde https://squirrelscan.com/download
# O instalar vía Homebrew (macOS)
brew install squirrelscan/tap/squirrel

# Verificar instalación
squirrel --version

# Inicializar proyecto
squirrel init -n bairescoding-website
```

---

## Instalación de Skills

Si necesitas instalar skills manualmente en tu agente:

### Skills Core

```bash
# 1. Web Design Guidelines
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines

# 2. Frontend Design
npx skills add https://github.com/anthropics/skills --skill frontend-design

# 3. Audit Website (requiere CLI squirrel)
npx skills add https://github.com/squirrelscan/skills --skill audit-website

# 4. SEO Audit
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit

# 5. Responsive Design
npx skills add https://github.com/wshobson/agents --skill responsive-design
```

### Skills Adicionales

```bash
# 6. Accessibility Auditor
npx skills add https://github.com/patricio0312rev/skills --skill accessibility-auditor

# 7. Web Performance
npx skills add https://github.com/cloudflare/skills --skill web-perf

# 8. Changelog Writer
npx skills add https://github.com/patricio0312rev/skills --skill changelog-writer

# 9. Docs Starter Kit
npx skills add https://github.com/patricio0312rev/skills --skill docs-starter-kit

# 10. Frontend i18n
npx skills add https://github.com/sergiodxa/agent-skills --skill frontend-internationalization-best-practices
```

---

## Auditorías

### Auditoría Completa del Sitio

```bash
# Auditoría completa (recomendada)
squirrel audit https://bairescoding.github.io --format llm --coverage full

# Auditoría rápida (para CI/CD)
squirrel audit https://bairescoding.github.io --format llm --coverage quick

# Auditoría intermedia
squirrel audit https://bairescoding.github.io --format llm --coverage surface --max-pages 200
```

**Parámetros importantes:**
- `--format llm`: Formato optimizado para agentes de IA
- `--coverage`: quick (25 páginas) | surface (100 páginas) | full (500 páginas)
- `--max-pages`: Límite de páginas a auditar
- `--refresh`: Ignorar caché y auditar todo de nuevo

### Ver Resultados de Auditoría Anterior

```bash
# Listar auditorías recientes
squirrel report --list

# Ver reporte específico
squirrel report <audit-id> --format llm

# Comparar con auditoría baseline
squirrel report --diff <audit-id> --format llm
```

### Targets de Calidad

| Score | Grado | Acción |
|-------|-------|--------|
| < 50 | F | Major fixes requeridos |
| 50-70 | D | Moderate fixes |
| 70-85 | C | Polish necesario |
| 85-95 | B+ | Fine-tuning |
| > 95 | A | Excelente |

**Objetivo del proyecto:** Score > 85 (Grade B+)

---

## Agentes

### Invocar un Agente

Para usar un agente especializado, menciónalo con `@`:

```
@frontend-agent Revisa los estilos CSS para mejorar la consistencia del tema oscuro
```

### Agentes Disponibles

| Agente | Para qué usarlo | Ejemplo |
|--------|----------------|---------|
| `@frontend-agent` | UI/UX, CSS, HTML | Crear componentes, estilos responsive |
| `@a11y-agent` | Accesibilidad | Auditar WCAG, contraste, ARIA |
| `@seo-agent` | SEO | Meta tags, structured data, headings |
| `@performance-agent` | Performance | Optimizar imágenes, CSS, JS |
| `@docs-agent` | Documentación | Crear docs, changelog |
| `@i18n-agent` | Internacionalización | Traducciones, i18n |

### Combinar Agentes

Puedes invocar múltiples agentes en una sola solicitud:

```
@frontend-agent Crea una nueva sección de "Testimonios" en index.html. 
@a11y-agent Asegura que cumpla WCAG 2.1 AA. 
@seo-agent Optimiza las meta tags.
```

---

## Flujos de Trabajo

### Flujo 1: Desarrollo de Nueva Feature

```
1. Planificación
   @docs-agent Documenta el plan para implementar [feature]

2. Desarrollo
   @frontend-agent Implementa [feature] en index.html y css/

3. Revisión de Accesibilidad
   @a11y-agent Audita la nueva funcionalidad para WCAG compliance

4. Revisión de SEO
   @seo-agent Optimiza las meta tags y structured data

5. Optimización
   @performance-agent Revisa performance de nuevos assets

6. Documentación
   @docs-agent Actualiza README.md y CHANGELOG.md
```

### Flujo 2: Fix de Bug

```
1. Diagnóstico
   "Describe el bug al agente apropiado"

2. Implementación
   @frontend-agent (o agente relevante) Implementa el fix

3. Validación
   "Re-auditar con skills relevantes"

4. Documentación (si aplica)
   @docs-agent Actualiza CHANGELOG.md
```

### Flujo 3: Auditoría Mensual

```bash
# 1. Ejecutar auditoría completa
squirrel audit https://bairescoding.github.io --format llm --coverage full

# 2. Revisar issues encontrados
# 3. Asignar fixes a agentes correspondientes
# 4. Implementar fixes
# 5. Re-auditar para confirmar mejoras
```

---

## Troubleshooting

### Error: "squirrel command not found"

**Solución:**
```bash
# Instalar squirrel CLI
curl -fsSL https://squirrelscan.com/install.sh | sh

# O descargar manualmente desde https://squirrelscan.com/download

# Verificar PATH
echo $PATH | grep squirrel
```

### Error: "Skill not found"

**Solución:**
```bash
# Reinstalar la skill
npx skills add <owner/repo> --skill <skill-name>

# Verificar skills instaladas
npx skills list
```

### Auditoría muy lenta

**Solución:**
```bash
# Usar coverage quick para sitios grandes
squirrel audit https://bairescoding.github.io --coverage quick

# Limitar número de páginas
squirrel audit https://bairescoding.github.io --max-pages 50

# Usar verbose para ver progreso
squirrel audit https://bairescoding.github.io --verbose
```

### Resultados inconsistentes

**Solución:**
```bash
# Forzar auditoría fresh (sin caché)
squirrel audit https://bairescoding.github.io --refresh
```

---

## Recursos Adicionales

- [Documentación completa de Skills](./SKILLS.md)
- [Guía de Agentes](./AGENTS.md)
- [skills.sh - Directorio](https://skills.sh)
- [squirrelscan Docs](https://docs.squirrelscan.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Soporte

Si encuentras problemas con las skills:

1. Verificar que el agente soporta la skill (ver tabla en SKILLS.md)
2. Reinstalar la skill: `npx skills add <owner/repo> --skill <name>`
3. Para squirrel CLI, visitar: https://squirrelscan.com/support
4. Reportar issues en: https://github.com/bairescoding/bairescoding.github.io/issues