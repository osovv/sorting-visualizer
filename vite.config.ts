/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [react(), tsconfigPaths()],
  base: '/sorting-visualizer/',
});
