# Context: Migración Landing Page BlakIA

## 1. Objetivo del Proyecto

**Misión:** Migrar la landing page actual de BlakIA (www.blakia.es) desde HTML/CSS estático a Astro + React + TailwindCSS + shadcn/ui, mejorando significativamente el diseño y experiencia de usuario mientras se mantiene todo el contenido existente.

**Tipo de proyecto:** Migración y rediseño de landing page corporativa

**Estado actual:** Sitio desplegado en GitHub Pages con dominio personalizado (www.blakia.es)

**Estado objetivo:** Landing page moderna con Astro, desplegada en GitHub Pages, manteniendo dominio personalizado

## 2. Información del Proyecto Actual

**Empresa:** BlakIA
**Sector:** Automatización con Inteligencia Artificial para negocios
**URL producción:** https://www.blakia.es
**Dominio:** Personalizado con CNAME (blakia.es)
**Hosting:** GitHub Pages

### Estructura Actual del Repositorio

```
.
├── assets/
│   └── favicon.ico
├── chatbot.html          # Página de demo/info del chatbot
├── CNAME                 # Configuración dominio: blakia.es
├── context.md            # Este archivo
├── GEMINI.md            # Contexto para AI
├── index.html           # Homepage principal
├── og-image.jpg         # Open Graph image (1200x630)
├── privacidad.html      # Política de privacidad
├── robots.txt           # SEO: instrucciones para crawlers
├── script.js            # JavaScript del sitio actual
├── sitemap.xml          # SEO: mapa del sitio
└── styles.css           # Estilos globales del sitio actual
```

### Páginas Existentes

1. **index.html** - Homepage principal (contenido detallado abajo)
2. **chatbot.html** - Información sobre el chatbot/agente de voz
3. **privacidad.html** - Política de privacidad y términos legales

### Contenido Actual de la Homepage (www.blakia.es)

**Hero / Título Principal:**
```
BlakIA - Automatización con IA para tu negocio
Transformamos tareas repetitivas y procesos manuales en sistemas inteligentes y eficientes 24/7.
```

**Secciones de Beneficios:**

1. **Ahorra tiempo y recursos**
   - Eliminamos tareas repetitivas como agendamiento, seguimiento, envío de correos...

2. **Optimiza procesos**
   - Operaciones clave con precisión.

3. **Resultados visibles**
   - Impacto desde el primer mes.

**Servicios / Características:**

1. **Soporte 24/7**
   - Atención automática, integración personalizada y flujos automatizados.

2. **Reduce carga operativa**
   - WhatsApp, Web, Instagram...

3. **Incrementa ventas**
   - Leads cualificados automáticamente.

4. **Llamada telefónica**
   - Consultas sin manos integradas en llamadas reales.

5. **Disponibilidad total**
   - Ejecutan tareas, responden o controlan sistemas 24/7.

6. **Innovación real**
   - UX con voz como canal principal.

**Call to Action:**
- Contáctanos (botón/sección de contacto)

**Footer:**
- Síguenos (redes sociales)

## 3. Propuesta de Valor de BlakIA

**Problema que resuelve:** Tareas repetitivas y procesos manuales en negocios

**Solución:** Sistemas inteligentes de automatización con IA que funcionan 24/7

**Canales de atención automatizados:**
- WhatsApp
- Web
- Instagram
- Llamadas telefónicas con voz IA

**Beneficios clave:**
- Ahorro de tiempo y recursos
- Optimización de procesos
- Resultados desde el primer mes
- Soporte 24/7
- Reducción de carga operativa
- Incremento de ventas con leads cualificados
- Innovación en UX con voz

## 4. Alcance de la Migración

### ✅ Incluido en esta migración

**Infraestructura:**
- Migración completa de HTML/CSS a Astro
- Configuración de TailwindCSS v4 y shadcn/ui
- Setup de GitHub Actions para despliegue automático
- **Mantener dominio personalizado www.blakia.es con CNAME**
- Sistema de componentes reutilizables

**Páginas a migrar:**
- ✅ Homepage (index.html → src/pages/index.astro)
- ✅ Chatbot (chatbot.html → src/pages/chatbot.astro)
- ✅ Privacidad (privacidad.html → src/pages/privacidad.astro)

**Contenido (preservar 100%):**
- Todo el copy actual de la homepage
- Estructura de beneficios y servicios
- CTAs y mensajes
- Contenido de chatbot.html
- Política de privacidad completa

**SEO mantener:**
- CNAME para www.blakia.es
- robots.txt
- sitemap.xml (actualizar si es necesario)
- Meta tags y Open Graph
- og-image.jpg (1200x630)
- Favicon

**Diseño (mejorar dramáticamente):**
- Rediseño completo del UI/UX
- Componentes modernos de shadcn/ui
- Animaciones y transiciones suaves
- Diseño responsive premium
- Jerarquía visual clara
- Paleta de colores profesional para empresa de IA
- Tipografía moderna y legible
- Espaciado generoso y diseño limpio
- Micro-interacciones y hover effects

**Performance:**
- Lighthouse score 90+ en todas las métricas
- Lazy loading de imágenes y componentes
- JavaScript mínimo (arquitectura de islas)
- Core Web Vitals optimizados

### ❌ Fuera del alcance inicial

- Backend o API propias
- CMS o gestión de contenido
- Blog o sección de noticias
- Multi-idioma (solo español inicialmente)
- Cambio de dominio (se mantiene www.blakia.es)
- Analytics avanzadas (Google Analytics es opcional)

## 5. Arquitectura Objetivo

### Stack Tecnológico

**Framework:** Astro v5
**UI Framework:** React 19 (solo para componentes interactivos)
**Estilos:** TailwindCSS v4
**Componentes:** shadcn/ui
**Hosting:** GitHub Pages con dominio personalizado
**CI/CD:** GitHub Actions
**Dominio:** www.blakia.es (CNAME)

### Estructura del Proyecto Astro

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── public/
│   ├── CNAME                  # ⚠️ CRÍTICO: blakia.es
│   ├── robots.txt             # Migrado del actual
│   ├── sitemap.xml            # Actualizado
│   ├── og-image.jpg           # Migrado (1200x630)
│   └── assets/
│       └── favicon.ico        # Migrado
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── sections/          # Secciones de la landing
│   │   │   ├── Hero.astro
│   │   │   ├── Benefits.astro  # Ahorra tiempo, Optimiza, Resultados
│   │   │   ├── Services.astro  # 6 servicios principales
│   │   │   ├── Contact.tsx     # Formulario React
│   │   │   └── ChatbotInfo.astro
│   │   └── shared/            # Componentes compartidos
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       ├── SEO.astro
│   │       └── SocialLinks.astro
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro        # Homepage principal
│   │   ├── chatbot.astro      # Info chatbot
│   │   └── privacidad.astro   # Política privacidad
│   ├── styles/
│   │   └── globals.css        # Estilos + shadcn variables
│   └── lib/
│       └── utils.ts           # Utilidades (cn, etc.)
├── astro.config.mjs           # Config con site
├── tailwind.config.mjs        # Config TailwindCSS
├── components.json            # Config shadcn/ui
├── tsconfig.json
├── GEMINI.md                  # Contexto AI (ya existe)
├── context.md                 # Este archivo
└── package.json
```

## 6. Configuración Crítica

### astro.config.mjs

```
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.blakia.es', // ⚠️ IMPORTANTE
  
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  
  output: 'static',
  
  build: {
    assets: 'assets',
    format: 'file' // Genera .html en lugar de /folder/index.html
  }
});
```

### public/CNAME

```
blakia.es
```

**⚠️ MUY IMPORTANTE:** El archivo CNAME debe estar en `/public` para que se copie a `/dist` durante el build.

### GitHub Actions (.github/workflows/deploy.yml)

```
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Astro site
        run: npm run build
      
      - name: Verify CNAME
        run: |
          if [ ! -f ./dist/CNAME ]; then
            echo "blakia.es" > ./dist/CNAME
          fi
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 7. Guía de Diseño y Estilo

### Principios de Diseño

1. **Profesional y Tecnológico:** Reflejar innovación en IA
2. **Limpio y Espacioso:** Diseño minimalista, breathing room
3. **Conversión Optimizada:** CTAs claros, jerarquía obvia
4. **Rápido y Fluido:** Animaciones sutiles, carga instantánea
5. **Accesible:** WCAG 2.1 AA mínimo

### Paleta de Colores Sugerida (Inspirada en IA/Tech)

**Primarios:**
- Primary: Azul/Púrpura tecnológico (#4F46E5 o similar)
- Secondary: Acento complementario
- Background: Blanco/Gris muy claro
- Foreground: Gris oscuro/Negro para texto

**Semánticos:**
- Success: Verde (#10B981)
- Warning: Amarillo/Naranja
- Error: Rojo
- Info: Azul claro

**Implementación en globals.css:**
```
@theme inline {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 239 84% 67%;
  --primary-foreground: 0 0% 100%;
  /* ... más variables */
}
```

### Tipografía

**Fonts recomendados:**
- **Display/Headers:** Inter, Manrope, Outfit (sans-serif moderna)
- **Body:** Inter, System UI
- **Peso:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Escala tipográfica:**
- H1 (Hero): text-4xl md:text-5xl lg:text-6xl
- H2 (Secciones): text-3xl md:text-4xl lg:text-5xl
- H3 (Cards/Features): text-xl md:text-2xl
- Body: text-base md:text-lg
- Small: text-sm

### Componentes shadcn/ui a Instalar

```
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add accordion  # Si se necesita FAQ
```

## 8. Estructura de Contenido por Secciones

### Homepage (index.astro)

**1. Hero Section**
```
Título: BlakIA - Automatización con IA para tu negocio
Subtítulo: Transformamos tareas repetitivas y procesos manuales en sistemas inteligentes y eficientes 24/7.
CTA: [Contáctanos] [Ver Demo]
Visual: Ilustración/imagen de IA/automatización
```

**2. Beneficios (3 columnas)**
```
Columna 1:
  Título: Ahorra tiempo y recursos
  Descripción: Eliminamos tareas repetitivas como agendamiento, seguimiento, envío de correos...
  Icono: Clock/Timer

Columna 2:
  Título: Optimiza procesos
  Descripción: Operaciones clave con precisión.
  Icono: Settings/Gear

Columna 3:
  Título: Resultados visibles
  Descripción: Impacto desde el primer mes.
  Icono: TrendingUp/Chart
```

**3. Servicios Principales (Grid 2x3)**
```
Card 1:
  Título: Soporte 24/7
  Descripción: Atención automática, integración personalizada y flujos automatizados.
  Icono: Headphones/Support

Card 2:
  Título: Reduce carga operativa
  Descripción: WhatsApp, Web, Instagram...
  Icono: Smartphone/MessageSquare

Card 3:
  Título: Incrementa ventas
  Descripción: Leads cualificados automáticamente.
  Icono: TrendingUp/DollarSign

Card 4:
  Título: Llamada telefónica
  Descripción: Consultas sin manos integradas en llamadas reales.
  Icono: Phone

Card 5:
  Título: Disponibilidad total
  Descripción: Ejecutan tareas, responden o controlan sistemas 24/7.
  Icono: Clock/24h

Card 6:
  Título: Innovación real
  Descripción: UX con voz como canal principal.
  Icono: Mic/Sparkles
```

**4. Contact Section**
```
Título: Contáctanos
Formulario:
  - Nombre
  - Email
  - Empresa (opcional)
  - Mensaje
  - Botón: Enviar
```

**5. Footer**
```
Logo: BlakIA
Sección: Síguenos
  - Links a redes sociales (iconos)
Legal:
  - Link a /privacidad.html
Copyright: © 2025 BlakIA
```

### Página Chatbot (chatbot.astro)

**Contenido a migrar de chatbot.html existente**
- Mantener toda la información actual
- Mejorar diseño visual
- Agregar demos interactivas si es posible

### Página Privacidad (privacidad.astro)

**Contenido a migrar de privacidad.html existente**
- Política de privacidad completa
- Formato legal legible con tipografía clara
- Tabla de contenidos (si es extenso)
- Último actualizado: [fecha]

## 9. Interactividad y Directivas Client

### Componentes Astro (estáticos)
```
- Header.astro (navegación sin JS)
- Footer.astro (estático)
- Hero.astro (estático con CSS animations)
- Benefits.astro (estático)
- Services.astro (estático con hover CSS)
```

### Componentes React (interactivos)
```
- Contact.tsx con client:load
  → Validación de formulario
  → Estado de envío
  → Mensajes de error/éxito

- Posible: ServiceCard.tsx con client:visible
  → Animaciones al scroll
  → Efectos hover complejos
```

## 10. SEO y Meta Tags

### Layout.astro - Head completo

```
***
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
}

const {
  title = 'BlakIA - Automatización con IA para tu negocio',
  description = 'Transformamos tareas repetitivas y procesos manuales en sistemas inteligentes y eficientes 24/7.',
  ogImage = '/og-image.jpg',
  noindex = false
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, 'https://www.blakia.es');
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>{title}</title>
  <meta name="description" content={description}>
  <link rel="canonical" href={canonicalURL}>
  
  {noindex && <meta name="robots" content="noindex, nofollow">}
  
  <!-- Open Graph -->
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:image" content={`https://www.blakia.es${ogImage}`}>
  <meta property="og:url" content={canonicalURL}>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="BlakIA">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={description}>
  <meta name="twitter:image" content={`https://www.blakia.es${ogImage}`}>
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
  
  <!-- Fonts (ejemplo con Inter) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <slot />
</body>
</html>
```

### sitemap.xml actualizado

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.blakia.es/</loc>
    <lastmod>2025-11-14</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.blakia.es/chatbot.html</loc>
    <lastmod>2025-11-14</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.blakia.es/privacidad.html</loc>
    <lastmod>2025-11-14</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
```

## 11. Plan de Migración Paso a Paso

### ✅ Fase 1: Setup Inicial (1-2 horas)

```
# 1. Crear proyecto Astro
npm create astro@latest blakia-new
# Opciones: Empty, TypeScript (strict), Yes to dependencies

cd blakia-new

# 2. Instalar integraciones
npx astro add react tailwind

# 3. Instalar shadcn/ui
npx shadcn@latest init
# Opciones:
# - Style: New York
# - Color: Slate
# - CSS variables: Yes

# 4. Instalar componentes shadcn
npx shadcn@latest add button card input textarea badge separator

# 5. Copiar archivos del proyecto actual
cp ../public/CNAME ./public/
cp ../public/robots.txt ./public/
cp ../public/sitemap.xml ./public/
cp ../public/og-image.jpg ./public/
cp -r ../public/assets ./public/
```

**Configurar archivos:**
- [ ] astro.config.mjs (site, output, build)
- [ ] tailwind.config.mjs (extend theme si es necesario)
- [ ] tsconfig.json (paths alias @/*)
- [ ] components.json (ya configurado por shadcn)

**Crear estructura:**
```
mkdir -p src/components/sections
mkdir -p src/components/shared
mkdir -p src/lib
touch src/layouts/Layout.astro
touch src/components/shared/{Header,Footer,SEO}.astro
```

### ✅ Fase 2: Layout y Componentes Base (2 horas)

- [ ] Crear src/layouts/Layout.astro con SEO completo
- [ ] Crear Header.astro (navegación: Inicio, Chatbot, Contacto)
- [ ] Crear Footer.astro (logo, redes sociales, link privacidad)
- [ ] Configurar globals.css con theme de shadcn
- [ ] Instalar y configurar fuente (Inter vía Google Fonts)

### ✅ Fase 3: Homepage - Hero y Beneficios (2 horas)

- [ ] Crear src/pages/index.astro
- [ ] Crear src/components/sections/Hero.astro
  - Título: "BlakIA - Automatización con IA para tu negocio"
  - Subtítulo con el copy actual
  - 2 CTAs (Contáctanos, Ver Demo)
- [ ] Crear src/components/sections/Benefits.astro
  - Grid de 3 columnas responsive
  - Cards con iconos de Lucide React
  - Contenido: Ahorra tiempo, Optimiza, Resultados visibles

### ✅ Fase 4: Homepage - Servicios (2 horas)

- [ ] Crear src/components/sections/Services.astro
- [ ] Grid 2x3 responsive (en móvil: 1 columna)
- [ ] 6 cards con shadcn Card component
- [ ] Iconos para cada servicio (Lucide React)
- [ ] Contenido: Soporte 24/7, Reduce carga, Incrementa ventas, Llamadas, Disponibilidad, Innovación
- [ ] Hover effects y animaciones sutiles

### ✅ Fase 5: Homepage - Contacto (1-2 horas)

- [ ] Crear src/components/sections/Contact.tsx (React)
- [ ] Formulario con shadcn Input, Textarea, Button
- [ ] Validación básica (React Hook Form o Zod)
- [ ] Estados: idle, loading, success, error
- [ ] Integrar en index.astro con `client:load`

### ✅ Fase 6: Página Chatbot (1-2 horas)

- [ ] Crear src/pages/chatbot.astro
- [ ] Extraer contenido de chatbot.html actual
- [ ] Crear componentes específicos si es necesario
- [ ] Diseño atractivo con Cards de shadcn
- [ ] CTAs para contacto o demo

### ✅ Fase 7: Página Privacidad (30 min)

- [ ] Crear src/pages/privacidad.astro
- [ ] Copiar contenido de privacidad.html
- [ ] Formato con tipografía legible
- [ ] Tabla de contenidos si es largo
- [ ] Header y Footer compartidos

### ✅ Fase 8: Refinamiento y Animaciones (2-3 horas)

- [ ] Añadir transiciones CSS suaves
- [ ] Animaciones fade-in al scroll (Intersection Observer o CSS)
- [ ] Hover effects en cards y botones
- [ ] Optimizar imágenes (convertir a WebP/AVIF si hay)
- [ ] Testing responsive en todos los breakpoints
- [ ] Verificar accesibilidad (contraste, navegación teclado)

### ✅ Fase 9: SEO Final (1 hora)

- [ ] Actualizar sitemap.xml con fechas correctas
- [ ] Verificar robots.txt
- [ ] Comprobar todos los meta tags
- [ ] Verificar og-image.jpg funciona
- [ ] Canonical URLs correctos
- [ ] Structured data (JSON-LD) si aplica

### ✅ Fase 10: Deploy (1 hora)

- [ ] Crear .github/workflows/deploy.yml
- [ ] Push a GitHub (rama main)
- [ ] Verificar build en GitHub Actions
- [ ] Comprobar despliegue en GitHub Pages
- [ ] Verificar CNAME y dominio www.blakia.es
- [ ] Testing completo en producción
- [ ] Lighthouse audit (Performance, Accessibility, SEO, Best Practices)

**Tiempo total estimado:** 12-16 horas

## 12. Checklist Pre-Deploy

**Archivos críticos en /public:**
- [ ] CNAME (con contenido "blakia.es")
- [ ] robots.txt
- [ ] sitemap.xml (actualizado)
- [ ] og-image.jpg (1200x630)
- [ ] assets/favicon.ico

**Configuración:**
- [ ] astro.config.mjs: site = 'https://www.blakia.es'
- [ ] astro.config.mjs: output = 'static'
- [ ] astro.config.mjs: build.format = 'file'
- [ ] GitHub Pages configurado con GitHub Actions

**Contenido:**
- [ ] Todo el copy de la homepage migrado
- [ ] Chatbot page completa
- [ ] Privacidad page completa
- [ ] Links de navegación funcionando
- [ ] Formulario de contacto funcional

**Performance:**
- [ ] Imágenes optimizadas
- [ ] Fonts preconnect configurado
- [ ] JavaScript mínimo
- [ ] CSS inline crítico
- [ ] Lazy loading donde aplique

**SEO:**
- [ ] Meta title y description en todas las páginas
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] sitemap.xml accesible
- [ ] robots.txt accesible

**Testing:**
- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1280px, 1920px)
- [ ] Chrome, Firefox, Safari
- [ ] Lighthouse score > 90 en todo

## 13. Comandos Rápidos

```
# Desarrollo
npm run dev              # http://localhost:4321

# Build local
npm run build            # Output en /dist

# Preview build
npm run preview          # Ver build antes de deploy

# Añadir componente shadcn
npx shadcn@latest add [component]

# Deploy (automático con push)
git add .
git commit -m "feat: migración completa"
git push origin main
```

## 14. Notas Técnicas Importantes

### Diferencias HTML → Astro

**Antes (index.html):**
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="hero">
    <h1>BlakIA</h1>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

**Después (index.astro):**
```
***
import Layout from '@/layouts/Layout.astro';
import Hero from '@/components/sections/Hero.astro';
import Benefits from '@/components/sections/Benefits.astro';
import Services from '@/components/sections/Services.astro';
import Contact from '@/components/sections/Contact';
***

<Layout
  title="BlakIA - Automatización con IA para tu negocio"
  description="Transformamos tareas repetitivas en sistemas inteligentes 24/7"
>
  <Hero />
  <Benefits />
  <Services />
  <Contact client:load />
</Layout>
```

### Migración de Estilos

**CSS actual → TailwindCSS:**
- Clases custom → Utilities de Tailwind
- Variables CSS → Tokens de Tailwind (theme)
- Grid/Flexbox → Tailwind grid/flex utilities
- Responsive → Breakpoints de Tailwind (sm:, md:, lg:)

### JavaScript Actual

**Analizar script.js:**
- ¿Qué hace el JavaScript actual?
- ¿Se puede reemplazar con CSS puro?
- ¿Necesita ser React component?
- ¿Puede ser `<script>` tag en Astro?

## 15. Referencias Rápidas

**Astro:**
- Docs: https://docs.astro.build
- Deploy GH Pages: https://docs.astro.build/en/guides/deploy/github/

**shadcn/ui:**
- Components: https://ui.shadcn.com
- Astro setup: https://ui.shadcn.com/docs/installation/astro

**TailwindCSS:**
- Docs: https://tailwindcss.com
- Cheatsheet: https://nerdcave.com/tailwind-cheat-sheet

**Iconos:**
- Lucide React: https://lucide.dev

---

**Última actualización:** 2025-11-14 18:17 CET
**Versión:** 2.0 (con contenido real de www.blakia.es)
**Proyecto:** BlakIA Landing Page Migration
**Dominio:** www.blakia.es
