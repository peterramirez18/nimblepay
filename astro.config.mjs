// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    vite: {
        resolve: {
            alias: {
                'astro/entrypoints/prerender': fileURLToPath(import.meta.resolve('astro/entrypoints/prerender')),
            },
        },
    },
});
