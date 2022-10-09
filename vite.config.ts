/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ghPages = process.env.GH_PAGES;

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [react(), tsconfigPaths()],
  base: ghPages ? '/sorting-visualizer/' : '/',
});
