import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Password-Generator/",
  build: {
    outDir: "docs", // 👈 dist ke jagah docs me build hoga
  },
  plugins: [
    react(),
    tailwindcss()
  ]
})


