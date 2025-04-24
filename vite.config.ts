import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// change ONLY this line ↓
const BASE_URL = '/project/';   // <-- slash + repo name + slash

export default defineConfig(({ mode }) => ({
  base: BASE_URL,
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
}));
