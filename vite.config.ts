import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// change ONLY this line ↓
const BASE_URL = '/project/';   // <-- slash + repo name + slash

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? BASE_URL : '/',   // keep / for local dev
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
}));
