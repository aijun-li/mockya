import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { version } from '../whistle.mockya/package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeManifestIcons: false,
      workbox: {
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'MockYa',
        short_name: 'MockYa',
        description: 'Handy Mock Tool',
        theme_color: '#fff',
        icons: [
          {
            src: 'mockya-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'mockya-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'mockya-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'mockya-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        display: 'fullscreen',
      },
    }),
  ],
  base: command === 'serve' ? '/' : '/whistle.mockya/',
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  build: {
    outDir: path.resolve(__dirname, '../whistle.mockya/public'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
