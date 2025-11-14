# Proyecto: Landing Page con Astro + React

## 1. Descripción del Proyecto

**Objetivo:** Landing page moderna y performante construida con Astro y React, utilizando componentes reutilizables de shadcn/ui y estilizado con TailwindCSS [web:1][web:8].

**Características principales:**
- Arquitectura de islas de Astro para JavaScript mínimo
- Componentes React interactivos con shadcn/ui
- Sistema de diseño basado en TailwindCSS v4
- TypeScript para desarrollo type-safe
- Componentes accesibles y personalizables

## 2. Stack Tecnológico

**Framework principal:** Astro v5
**UI Library:** React 19
**Estilos:** TailwindCSS v4
**Componentes:** shadcn/ui (basado en Radix UI)
**Lenguaje:** TypeScript
**Gestión de paquetes:** npm/pnpm/bun

### Versiones importantes
- Astro: v5.x
- TailwindCSS: v4.x (configuración con `@theme inline`)
- React: 19.x
- shadcn/ui: latest

## 3. Estructura del Proyecto

```
/
├── src/
│   ├── components/      # Componentes React con shadcn/ui
│   │   └── ui/         # Componentes de shadcn/ui
│   ├── pages/          # Rutas de Astro
│   ├── layouts/        # Layouts de Astro
│   ├── styles/         # Archivos CSS globales
│   └── lib/            # Utilidades y helpers
├── public/             # Assets estáticos
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de TailwindCSS
├── tsconfig.json       # Configuración de TypeScript
├── components.json     # Configuración de shadcn/ui
└── GEMINI.md          # Este archivo
```

## 4. Comandos Clave

**Desarrollo:**
```
npm run dev              # Iniciar servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build
```

**shadcn/ui:**
```
npx shadcn@latest add [component]  # Añadir componente
npx shadcn@latest add button       # Ejemplo: añadir botón
```

**MCP Servers:**
```
npx shadcn@latest mcp init         # Inicializar MCP de shadcn
```

## 5. Configuración de MCP Servers

Este proyecto tiene acceso a dos MCP servers que facilitan el desarrollo:

### Astro Docs MCP Server
**URL:** `https://mcp.docs.astro.build/mcp`
**Descripción:** Acceso directo a la documentación oficial de Astro [web:13][web:17].
**Capacidades:**
- Búsqueda en documentación de Astro
- Recursos categorizados
- Prompts curados para desarrollo

**Configuración (Cursor):**
```
{
  "mcpServers": {
    "astro-docs": {
      "type": "http",
      "url": "https://mcp.docs.astro.build/mcp"
    }
  }
}
```

### shadcn/ui MCP Server
**Descripción:** Explorar, buscar e instalar componentes de registros [web:6][web:9].
**Capacidades:**
- Buscar componentes disponibles
- Instalar componentes directamente
- Acceso a múltiples registros

**Configuración (.mcp.json en el proyecto):**
```
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "@shadowcn/mcp"]
    }
  }
}
```

**Comandos útiles con MCP:**
- "Muéstrame todos los componentes disponibles en el registro de shadcn"
- "Añade el componente button, dialog y card a mi proyecto"
- "Crea un formulario de contacto usando componentes de shadcn"

## 6. Estándares de Código

### Componentes Astro
```
***
// Usar importaciones con alias @/
import Button from '@/components/ui/button';

// Props con TypeScript
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
***

<section>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</section>
```

### Componentes React (con shadcn/ui)
```
// Siempre usar directivas client: en .astro cuando sea necesario
import { Button } from '@/components/ui/button';

export function ContactForm() {
  return (
    <form>
      <Button type="submit">Enviar</Button>
    </form>
  );
}
```

**En archivos .astro:**
```
***
import ContactForm from '@/components/ContactForm';
***

<!-- Usar directivas client para componentes interactivos -->
<ContactForm client:load />
```

### TailwindCSS v4
- Usar la sintaxis moderna con `@theme inline` [web:2]
- Variables CSS en formato `hsl()` para colores
- Clases utility-first
- Evitar CSS personalizado cuando sea posible

### TypeScript
- **Strict mode** activado
- Tipos explícitos para props
- Interfaces para objetos complejos
- Evitar `any`, usar `unknown` si es necesario

## 7. Mejores Prácticas

### Astro
- Usar la arquitectura de islas: JavaScript solo donde se necesita [web:8]
- Componentes `.astro` por defecto, React solo para interactividad
- Aprovechar el renderizado estático
- Optimizar imágenes con `@astrojs/image`

### shadcn/ui
- Componentes se copian al proyecto para total personalización [web:1]
- Modificar componentes directamente en `src/components/ui/`
- Mantener accesibilidad (basado en Radix UI)
- Usar variantes de componentes con CVA

### Performance
- Minimizar JavaScript del lado del cliente
- Lazy load de componentes pesados con `client:visible`
- Optimizar assets estáticos
- Usar preloading estratégico

### Path Aliases
Configurados en `tsconfig.json`:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 8. Configuración Específica

### TailwindCSS para shadcn/ui
El archivo `globals.css` debe incluir:
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@theme inline {
  /* Variables de color sin hsl() wrapper */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... más variables */
}
```

### Astro Config
```
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }) // Importante para shadcn
  ]
});
```

## 9. Solución de Problemas Comunes

**shadcn no encuentra TailwindCSS:**
- Asegurar que `applyBaseStyles: false` está en la config de Tailwind [web:4]
- Crear archivo CSS manual con `@tailwind` directives

**Componentes React no son interactivos:**
- Verificar que se usa directiva `client:*` en archivos `.astro`
- Opciones: `client:load`, `client:idle`, `client:visible`

**Conflictos de estilos:**
- shadcn/ui requiere configuración específica de TailwindCSS v4 [web:2]
- Usar `@theme inline` y eliminar wrappers `hsl()` en @theme

## 10. Recursos y Documentación

**Astro:** https://docs.astro.build
**shadcn/ui:** https://ui.shadcn.com
**TailwindCSS:** https://tailwindcss.com
**Radix UI:** https://www.radix-ui.com

## 11. Notas Adicionales

- Este proyecto sigue la filosofía de Astro: "ship less JavaScript"
- Los componentes de shadcn/ui son propiedad del proyecto, no dependencias
- Priorizar accesibilidad y performance en todas las decisiones
- Usar MCP servers para acelerar el desarrollo consultando docs en tiempo real
