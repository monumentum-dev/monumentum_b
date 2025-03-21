// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity(
    {
        //projectId: 'm66lqwng',
        projectId: 'xjp700g1',
        dataset: 'production',
        // Set useCdn to false if you're building statically.
        useCdn: false,
      }
  ), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});