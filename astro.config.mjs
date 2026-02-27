// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-artista.netlify.app',
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  integrations: [
    icon(),
    react()
  ],
});