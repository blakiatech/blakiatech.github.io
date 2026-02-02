# BlakIA - Automatización e Inteligencia Artificial

![BlakIA Banner](/public/og-image.jpg)

BlakIA transforma negocios mediante la implementación de soluciones de Automatización e Inteligencia Artificial. Nuestra plataforma ayuda a empresas a optimizar procesos, reducir tareas repetitivas y operar de manera eficiente 24/7.

## 🚀 Características Principales

- **Sitio Web Optimizado**: Construido con [Astro](https://astro.build) para máximo rendimiento y SEO.
- **Chatbot Global**: Asistente virtual persistente disponible en todas las páginas, capaz de mantener el contexto de la conversación.
- **UI Moderna**: Interfaz diseñada con shadcn/ui y Tailwind CSS, totalmente responsiva y accesible.
- **Navegación Fluida**: Transiciones de página suaves gracias a Astro View Transitions.
- **Integración Continua**: Flujo de despliegue automatizado.

## 🛠️ Stack Tecnológico

Este proyecto utiliza las últimas tecnologías de desarrollo web:

- **Framework**: [Astro 5](https://astro.build)
- **UI Library**: [React 19](https://react.dev)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com)
- **Componentes**: [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- **Iconos**: [Lucide React](https://lucide.dev)
- **Animaciones**: TailwindCSS Animate

## 📂 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos (imágenes, robots.txt)
├── src/
│   ├── components/
│   │   ├── sections/   # Secciones de la Landing Page (Hero, Servicios, etc.)
│   │   ├── shared/     # Componentes globales (Header, Footer, Chatbot)
│   │   └── ui/         # Componentes base de shadcn/ui
│   ├── layouts/        # Plantillas de página (Layout.astro)
│   ├── pages/          # Rutas de la aplicación
│   └── styles/         # Estilos globales CSS
├── astro.config.mjs    # Configuración de Astro
└── tailwind.config.mjs # Configuración de Tailwind
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando               | Acción                                               |
| :-------------------- | :--------------------------------------------------- |
| `npm install`         | Instala las dependencias del proyecto                |
| `npm run dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`       | Compila el sitio para producción en `./dist/`        |
| `npm run preview`     | Previsualiza el build de producción localmente       |
| `npm run astro check` | Ejecuta comprobaciones de tipos y diagnóstico        |

## 🌟 Desarrollo

### Nuevos Componentes

Para añadir nuevos componentes de UI, utilizamos shadcn:

```bash
npx shadcn@latest add [nombre-componente]
```

## 📄 Licencia

Este proyecto es propiedad de BlakIA Tech. Todos los derechos reservados.
