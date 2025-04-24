// vite.config.ts       (or .js if you prefer)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ──────────────────────────────────────────────────────────────
// IMPORTANT:  replace only the word inside the slashes ↓
//             with your repository name (“project”), exactly
//             as it appears on GitHub.
const GH_PAGES_BASE = '/';
// ──────────────────────────────────────────────────────────────

export default defineConfig(({ mode }) => ({
  // • Use the repo path only in production builds
  // • Keep "/" during `npm run dev` so local URLs stay simple
  base: mode === 'production' ? GH_PAGES_BASE : '/',

  plugins: [react()],

  // any other Vite options…
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
