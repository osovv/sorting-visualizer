/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const gh_pages = process.env.GH_PAGES;

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [react(), tsconfigPaths()],
  base: gh_pages ? '/sorting-visualizer/' : '/',
});
