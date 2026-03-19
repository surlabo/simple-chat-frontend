import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves the repo under /simple-chat-frontend/
  // so we must generate asset URLs relative to that path.
  base: '/simple-chat-frontend/',
  plugins: [react()],
})