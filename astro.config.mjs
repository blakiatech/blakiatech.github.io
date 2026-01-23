import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.blakia.es',
  //base: '/blakiatech.github.io',
  
  integrations: [
    react(), 
    tailwind({ 
      applyBaseStyles: false  // ⚠️ IMPORTANTE para shadcn/ui
    }), 
    sitemap()
  ],
  
  output: 'static',
  
  build: {
    assets: 'assets',
    format: 'file'
  }
});