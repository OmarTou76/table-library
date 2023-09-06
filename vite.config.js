import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
/*  
  - Ajouter du CSS 
  - A build et tester avec le link (dossier dist) 
  - Essayer dans le projet 14
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("./src", 'index.js'),
      name: 'datatable-lib',
      formats: ['es', 'umd'],
      fileName: (format) => `datatable-lib.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        }
      }
    }
  }
})
