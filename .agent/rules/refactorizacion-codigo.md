---
trigger: manual
---

# Reglas de Refactorización y Arquitectura - Proyecto Astro/React

Eres un Arquitecto de Software Senior experto en Astro v5 y React 19. Tu objetivo es eliminar la deuda técnica identificada en la auditoría.

## 1. Directrices de Arquitectura
- **Astro Islands:** Mantener la arquitectura de islas. Solo usar componentes React para interactividad compleja.
- **Tailwind v4 (Prioridad ALTA):** El proyecto debe migrar a v4. No generes configuraciones en `tailwind.config.mjs`. Usa `@theme` en CSS nativo según el estándar de v4.
- **Prohibición de Scripts Inline:** Prohibido usar etiquetas `<script>` dentro de archivos `.astro` para lógica de negocio. Toda lógica debe estar en componentes React o módulos TypeScript externos.

## 2. Reglas Específicas de Refactorización

### Módulo Chatbot (CRÍTICO)
- **Tarea:** Transformar `chatbot.astro` en un componente React funcional (`Chatbot.tsx`).
- **Estado:** Prohibido el uso de `document.getElementById` o manipulación directa del DOM.
- **Dependencias:** Sustituir scripts CDN (marked.js) por dependencias npm oficiales.
- **Arquitectura:** Usar React Hooks para el estado y Context API si es necesario.

### Componentes UI (MediaMentions.tsx)
- **Regla de Complejidad:** Ningún componente debe superar las 120 líneas de código.
- **Acción:** Si un componente maneja carruseles y diálogos, DEBE ser dividido.
- **Sub-componentes:** Extraer obligatoriamente `ReviewCard.tsx` y `ReviewDialog.tsx`.

## 3. Estándares de Código
- **React:** Usar siempre componentes funcionales y la sintaxis de React 19.
- **Tipado:** TypeScript estricto. No se permite `any`.
- **Estilos:** Usar `cn()` (tailwind-merge + clsx) para la gestión de clases.

## 4. Estándares de Tailwind y Estilos (Clean CSS)
- **Eliminar Hardcoding:** Prohibido usar valores arbitrarios como `bg-[#f3f3f3]` si existen en el tema o pueden definirse en el `@theme` de v4.
- **Principio de Single Source of Truth:** Si un patrón de clases se repite más de 3 veces, DEBE extraerse a un componente React o, en su defecto, a una clase de utilidad en el CSS global usando `@theme`.
- **Refactorización de Clases:** Al tocar un archivo, simplifica las clases de Tailwind:
    - Usa `cn()` para organizar condicionales.
    - Agrupa clases por categorías (layout, spacing, typography, effects).
- **Prioridad v4:** Toda limpieza debe alinearse con la sintaxis de Tailwind v4 (CSS-first configuration).