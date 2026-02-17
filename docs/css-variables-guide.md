# Guía de Variables CSS

Sistema de diseño consistente y escalable para el proyecto Baires Coding. Este documento describe todas las variables CSS personalizadas disponibles y su uso recomendado.

## Índice

1. [Sistema de Espaciado](#sistema-de-espaciado)
2. [Aspect Ratios](#aspect-ratios)
3. [Tamaños de Contenedores](#tamaños-de-contenedores)
4. [Tamaños de Componentes](#tamaños-de-componentes)
5. [Navegación](#navegación)
6. [Efectos](#efectos)
7. [Colores](#colores)
8. [Tipografía](#tipografía)
9. [Layout](#layout)
10. [Border Radius](#border-radius)
11. [Transiciones](#transiciones)
12. [Z-Index Scale](#z-index-scale)
13. [Ejemplos de Migración](#ejemplos-de-migración)
14. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)

---

## Sistema de Espaciado

El sistema de espaciado sigue una escala de 4px (0.25rem) como base, permitiendo consistencia visual en todo el diseño.

### Spacing Base

| Variable | Valor (rem) | Valor (px) | Uso recomendado |
|----------|-------------|------------|-----------------|
| `--space-1` | 0.25rem | 4px | Micro-espaciado, gaps mínimos |
| `--space-2` | 0.5rem | 8px | Espaciado pequeño entre elementos relacionados |
| `--space-3` | 0.75rem | 12px | Espaciado medio-pequeño |
| `--space-4` | 1rem | 16px | Espaciado estándar base |
| `--space-5` | 1.25rem | 20px | Espaciado medio |
| `--space-6` | 1.5rem | 24px | Espaciado medio-alto, padding de contenedores |
| `--space-8` | 2rem | 32px | Espaciado grande, separación de secciones |
| `--space-10` | 2.5rem | 40px | Espaciado muy grande |
| `--space-12` | 3rem | 48px | Separación entre secciones relacionadas |
| `--space-16` | 4rem | 64px | Separación entre secciones principales |
| `--space-20` | 5rem | 80px | Espaciado amplio entre bloques |
| `--space-24` | 6rem | 96px | Espaciado máximo estándar, padding de secciones |

### Spacing Extendido

| Variable | Valor (rem) | Valor (px) | Uso recomendado |
|----------|-------------|------------|-----------------|
| `--space-32` | 2rem | 32px | Igual a --space-8, para uso explícito en px |
| `--space-40` | 2.5rem | 40px | Igual a --space-10 |
| `--space-48` | 3rem | 48px | Igual a --space-12 |
| `--space-64` | 4rem | 64px | Igual a --space-16 |

### Ejemplos de uso

```css
.card {
  padding: var(--space-6);
  gap: var(--space-4);
}

.section {
  padding: var(--space-24) 0;
}
```

---

## Aspect Ratios

Razones de aspecto predefinidas para mantener proporciones consistentes en imágenes, videos y contenedores.

| Variable | Ratio | Uso recomendado |
|----------|-------|-----------------|
| `--ratio-square` | 1 / 1 | Iconos, avatares, imágenes cuadradas |
| `--ratio-video` | 16 / 9 | Videos, iframes, thumbnails de video |
| `--ratio-portrait` | 3 / 4 | Fotografías de retrato, cards verticales |
| `--ratio-landscape` | 4 / 3 | Fotografías de paisaje, cards horizontales |

### Ejemplos de uso

```css
.video-container {
  aspect-ratio: var(--ratio-video);
}

.service-icon {
  aspect-ratio: var(--ratio-square);
}

.team-photo {
  aspect-ratio: var(--ratio-portrait);
}
```

---

## Tamaños de Contenedores

Anchos máximos predefinidos para diferentes tipos de contenido.

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--container-sm` | 500px | Formularios pequeños, tarjetas de contenido |
| `--container-md` | 600px | Formularios medianos, modales |
| `--container-lg` | 800px | Artículos, contenido de blog |
| `--container-xl` | 900px | Layouts amplios, dashboards |

### Ejemplos de uso

```css
.contact-form {
  max-width: var(--container-md);
  margin: 0 auto;
}

.article-content {
  max-width: var(--container-lg);
}
```

---

## Tamaños de Componentes

### Iconos

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--icon-sm` | 20px | Iconos en botones pequeños, listas |
| `--icon-md` | 24px | Iconos estándar, navegación |
| `--icon-lg` | 32px | Iconos destacados, social media |
| `--icon-xl` | 40px | Iconos grandes, features |
| `--icon-2xl` | 48px | Iconos muy grandes, hero icons |

### Iconos de Cards

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--card-icon-sm` | 56px | Iconos en cards pequeñas |
| `--card-icon-md` | 64px | Iconos en cards medianas, servicios |
| `--card-icon-lg` | 80px | Iconos destacados en cards grandes |

### Ejemplos de uso

```css
.social-icon {
  width: var(--icon-lg);
  height: var(--icon-lg);
}

.service-icon {
  width: var(--card-icon-md);
  height: var(--card-icon-md);
  aspect-ratio: var(--ratio-square);
}
```

---

## Navegación

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--navbar-height` | 70px | Altura fija del navbar principal |
| `--nav-toggle-size` | 44px | Tamaño del botón de menú móvil |

### Ejemplos de uso

```css
.navbar {
  height: var(--navbar-height);
}

.mobile-menu-toggle {
  width: var(--nav-toggle-size);
  height: var(--nav-toggle-size);
}

main {
  padding-top: var(--navbar-height);
}
```

---

## Efectos

### Blur

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--blur-sm` | 8px | Backdrop blur ligero |
| `--blur-md` | 10px | Backdrop blur estándar |

### Border Width

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--border-width-thick` | 4px | Bordes gruesos decorativos |

### Ejemplos de uso

```css
.glass-card {
  backdrop-filter: blur(var(--blur-md));
}

.highlight-border {
  border-width: var(--border-width-thick);
}
```

---

## Colores

### Colores Primarios

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--color-primary` | #56C34F | Color principal de marca, botones, enlaces |
| `--color-primary-light` | #6EE768 | Variante clara, estados hover |
| `--color-primary-dark` | #3A8F35 | Variante oscura, estados active |
| `--color-primary-glow` | rgba(86, 195, 79, 0.4) | Efectos de brillo y sombras |

### Colores de Fondo (Dark Mode - Default)

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--bg-primary` | #0a0a0a | Fondo principal |
| `--bg-secondary` | #111111 | Fondo secundario, secciones alternas |
| `--bg-tertiary` | #1a1a1a | Fondo terciario, hover states |
| `--bg-card` | #161616 | Fondo de tarjetas |
| `--bg-hover` | #222222 | Fondo de hover |

### Colores de Texto (Dark Mode - Default)

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--text-primary` | #ffffff | Texto principal |
| `--text-secondary` | #a0a0a0 | Texto secundario, subtítulos |
| `--text-tertiary` | #666666 | Texto terciario, metadatos |
| `--text-muted` | #444444 | Texto deshabilitado, placeholders |

### Colores de Borde (Dark Mode - Default)

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--border-color` | #2a2a2a | Bordes estándar |
| `--border-hover` | #3a3a3a | Bordes en hover |

### Sombras (Dark Mode - Default)

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--shadow-sm` | 0 1px 2px rgba(0, 0, 0, 0.3) | Sombras pequeñas |
| `--shadow-md` | 0 4px 6px rgba(0, 0, 0, 0.4) | Sombras medianas |
| `--shadow-lg` | 0 10px 15px rgba(0, 0, 0, 0.5) | Sombras grandes |
| `--shadow-glow` | 0 0 30px var(--color-primary-glow) | Brillo principal |
| `--shadow-glow-lg` | 0 0 60px var(--color-primary-glow) | Brillo intenso |

### Colores en Light Mode

Cuando se aplica `data-theme="light"`, los siguientes colores cambian:

**Fondos:**
- `--bg-primary`: #f8fafc
- `--bg-secondary`: #f1f5f9
- `--bg-tertiary`: #e2e8f0
- `--bg-card`: #ffffff
- `--bg-hover`: #e2e8f0

**Textos:**
- `--text-primary`: #1e293b
- `--text-secondary`: #64748b
- `--text-tertiary`: #94a3b8
- `--text-muted`: #cbd5e1

**Bordes:**
- `--border-color`: #e2e8f0
- `--border-hover`: #cbd5e1

**Sombras:**
- `--shadow-sm`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.07)
- `--shadow-lg`: 0 10px 15px rgba(0, 0, 0, 0.1)

---

## Tipografía

### Familias de Fuente

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--font-display` | 'VT323', monospace | Títulos, headlines, elementos destacados |
| `--font-body` | 'Inter', sans-serif | Texto de cuerpo, párrafos |
| `--font-mono` | 'JetBrains Mono', monospace | Código, etiquetas técnicas |

### Tamaños de Fuente (Fluid Typography)

Todos los tamaños utilizan `clamp()` para adaptarse responsivamente:

| Variable | Min | Max | Uso recomendado |
|----------|-----|-----|-----------------|
| `--text-xs` | 0.65rem | 0.75rem | Etiquetas, badges, metadata |
| `--text-sm` | 0.75rem | 0.875rem | Texto pequeño, captions |
| `--text-base` | 0.875rem | 1rem | Texto base de cuerpo |
| `--text-lg` | 1rem | 1.125rem | Texto de cuerpo grande |
| `--text-xl` | 1.125rem | 1.25rem | Subtítulos pequeños |
| `--text-2xl` | 1.25rem | 1.5rem | Subtítulos medianos |
| `--text-3xl` | 1.5rem | 1.875rem | Títulos de sección pequeños |
| `--text-4xl` | 1.75rem | 2.25rem | Títulos de sección |
| `--text-5xl` | 2rem | 3rem | Títulos grandes |
| `--text-6xl` | 2.25rem | 3.75rem | Hero titles |
| `--text-7xl` | 2.5rem | 4.5rem | Hero titles grandes |

---

## Layout

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--container-max` | 1200px | Ancho máximo del contenedor principal |
| `--container-padding` | var(--space-6) | Padding horizontal de contenedores |
| `--section-padding` | var(--space-24) | Padding vertical de secciones |

### Ejemplos de uso

```css
.container {
  max-width: var(--container-max);
  padding: 0 var(--container-padding);
  margin: 0 auto;
}

.section {
  padding: var(--section-padding) 0;
}
```

---

## Border Radius

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--radius-sm` | 0.25rem | 4px | Bordes ligeramente redondeados |
| `--radius-md` | 0.5rem | 8px | Bordes estándar |
| `--radius-lg` | 0.75rem | 12px | Bordes redondeados |
| `--radius-xl` | 1rem | 16px | Bordes muy redondeados |
| `--radius-2xl` | 1.5rem | 24px | Bordes extremadamente redondeados |
| `--radius-full` | 9999px | Circular | Pills, círculos perfectos |

### Ejemplos de uso

```css
.button {
  border-radius: var(--radius-md);
}

.card {
  border-radius: var(--radius-lg);
}

.pill {
  border-radius: var(--radius-full);
}
```

---

## Transiciones

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--transition-fast` | 150ms ease | Cambios rápidos, feedback inmediato |
| `--transition-base` | 250ms ease | Transiciones estándar |
| `--transition-slow` | 350ms ease | Transiciones elegantes, aparecer/desaparecer |
| `--transition-bounce` | 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) | Animaciones juguetonas |

### Reduced Motion

Cuando el usuario prefiere movimiento reducido (`prefers-reduced-motion: reduce`), todas las transiciones se establecen en `0ms`.

### Ejemplos de uso

```css
.button {
  transition: background-color var(--transition-base);
}

.modal {
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}

.badge {
  transition: transform var(--transition-bounce);
}
```

---

## Z-Index Scale

Sistema de capas predefinido para evitar conflictos de z-index:

| Variable | Valor | Uso recomendado |
|----------|-------|-----------------|
| `--z-base` | 0 | Elementos en el flujo normal |
| `--z-dropdown` | 100 | Menús desplegables |
| `--z-sticky` | 200 | Elementos sticky |
| `--z-navbar` | 300 | Barra de navegación |
| `--z-modal` | 400 | Modales, overlays |
| `--z-tooltip` | 500 | Tooltips, notificaciones |

### Ejemplos de uso

```css
.navbar {
  z-index: var(--z-navbar);
}

.dropdown-menu {
  z-index: var(--z-dropdown);
}

.modal-overlay {
  z-index: var(--z-modal);
}
```

---

## Ejemplos de Migración

### Ejemplo 1: Icono de Servicio

#### Antes:
```css
.service-icon {
  width: 64px;
  height: 64px;
}
```

#### Después:
```css
.service-icon {
  width: var(--card-icon-md);
  height: var(--card-icon-md);
  aspect-ratio: var(--ratio-square);
}
```

### Ejemplo 2: Espaciado de Sección

#### Antes:
```css
.section {
  padding: 96px 0;
}
```

#### Después:
```css
.section {
  padding: var(--space-24) 0;
}
```

### Ejemplo 3: Contenedor con Ancho Máximo

#### Antes:
```css
.container {
  max-width: 800px;
  padding: 0 24px;
}
```

#### Después:
```css
.container {
  max-width: var(--container-lg);
  padding: 0 var(--container-padding);
}
```

### Ejemplo 4: Sombra de Tarjeta

#### Antes:
```css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}
```

#### Después:
```css
.card {
  box-shadow: var(--shadow-md);
}
```

### Ejemplo 5: Transición de Botón

#### Antes:
```css
.button {
  transition: all 0.25s ease;
}
```

#### Después:
```css
.button {
  transition: all var(--transition-base);
}
```

---

## Convenciones de Nomenclatura

Cuando crees nuevas variables CSS, sigue estas convenciones para mantener la consistencia:

### 1. Estructura del Nombre

```
--{categoría}-{elemento}-{modificador}-{tamaño}
```

### 2. Categorías Reconocidas

| Prefijo | Uso |
|---------|-----|
| `--color-` | Colores de marca |
| `--bg-` | Colores de fondo |
| `--text-` | Colores y tamaños de texto |
| `--space-` | Espaciado |
| `--ratio-` | Razones de aspecto |
| `--container-` | Tamaños de contenedores |
| `--icon-` | Tamaños de iconos genéricos |
| `--card-icon-` | Tamaños de iconos específicos de cards |
| `--navbar-` | Elementos del navbar |
| `--nav-` | Elementos de navegación |
| `--blur-` | Valores de desenfoque |
| `--radius-` | Border radius |
| `--shadow-` | Sombras |
| `--transition-` | Transiciones y animaciones |
| `--z-` | Z-index |

### 3. Modificadores de Tamaño

Usa estos sufijos consistentemente:

- `--xs`: Extra small
- `--sm`: Small
- `--md`: Medium (estándar)
- `--lg`: Large
- `--xl`: Extra large
- `--2xl`, `--3xl`, etc.: Tamaños extra grandes

### 4. Ejemplos de Nuevas Variables

```css
/* Nuevo color de estado */
--color-success: #22c55e;
--color-warning: #f59e0b;
--color-error: #ef4444;

/* Nuevo espaciado */
--space-28: 1.75rem;  /* 28px - entre space-6 y space-8 */

/* Nuevo tamaño de contenedor */
--container-2xl: 1100px;

/* Nuevo efecto de blur */
--blur-lg: 20px;

/* Nueva transición */
--transition-smooth: 400ms cubic-bezier(0.4, 0, 0.2, 1);
```

### 5. Reglas Importantes

1. **Usa valores en rem** para propiedades escalables (espaciado, tamaños)
2. **Usa valores en px** para tamaños fijos (iconos, containers)
3. **Documenta el valor en px** en comentarios cuando uses rem
4. **Usa escala consistente**: Base de 4px para espaciado, múltiplos de 8px para componentes
5. **Agrupa variables por categoría** con comentarios descriptivos
6. **Usa nombres semánticos**, no descriptivos del valor:
   - ✅ `--space-4` (no `--space-16px`)
   - ✅ `--color-primary` (no `--color-green`)
   - ✅ `--container-lg` (no `--container-800px`)

### 6. Variables Derivadas

Cuando una variable depende de otra, usa `var()`:

```css
/* Correcto */
--container-padding: var(--space-6);
--shadow-glow: 0 0 30px var(--color-primary-glow);

/* Incorrecto */
--container-padding: 1.5rem;  /* Duplica el valor de --space-6 */
```

---

## Notas Adicionales

- Las variables están definidas en `:root` para alcance global
- El tema por defecto es **Dark Mode**
- Los colores de fondo, texto, bordes y sombras cambian automáticamente con `data-theme="light"`
- Las transiciones se desactivan automáticamente si el usuario prefiere movimiento reducido
- Los tamaños de fuente usan **tipografía fluida** con `clamp()` para adaptarse a diferentes viewport sizes

---

## Referencias Rápidas

### Conversión Rem → Px (Base 16px)

| Rem | Px |
|-----|-----|
| 0.25rem | 4px |
| 0.5rem | 8px |
| 0.75rem | 12px |
| 1rem | 16px |
| 1.5rem | 24px |
| 2rem | 32px |
| 3rem | 48px |
| 4rem | 64px |
| 5rem | 80px |
| 6rem | 96px |

### Orden de Z-Index (Mayor = Más al frente)

```
z-base (0) < z-dropdown (100) < z-sticky (200) < z-navbar (300) < z-modal (400) < z-tooltip (500)
```
