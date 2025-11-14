import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.blakia.es',
  base: '/blakiatech.github.io',
  
  integrations: [
    react(),
    tailwind({ 
      applyBaseStyles: false  // ⚠️ IMPORTANTE para shadcn/ui
    })
  ],
  
  output: 'static',
  
  build: {
    assets: 'assets',
    format: 'file'
  }
});

