import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // custom-domain build must live at the root →  "/"
  base: '/',
  plugins: [react()],

  optimizeDeps: { exclude: ['lucide-react'] },
});
