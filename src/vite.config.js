import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    define: {
      'process.env': {},
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    }
  };
});