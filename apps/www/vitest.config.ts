import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@components': resolve(__dirname, './registry/components'),
      components: resolve(__dirname, './registry/components'),
      '@workspace/ui/lib/utils': resolve(
        __dirname,
        '../../packages/ui/src/lib/utils.ts',
      ),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html'],
      include: ['registry/components/**'],
      exclude: [
        'registry/components/**/registry-item.json',
        'registry/components/**/*.md',
        'registry/components/**/.DS_Store',
      ],
      thresholds: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },
  },
});
