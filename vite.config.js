import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // ── PERMANENT FIX: Kill stale Service Workers from ANY other project ──
    // Sends Clear-Site-Data on EVERY dev-server response.
    // Even if Pixie's SW intercepts the navigation and serves cached HTML,
    // the very next network request (HMR ws, any asset not in Pixie's cache)
    // will hit THIS server and receive this header → browser instantly
    // unregisters Pixie's SW, clears all caches, and loads Hotel D cleanly.
    {
      name: 'hotel-sw-killer',
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Clear-Site-Data', '"cache", "storage"')
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
          res.setHeader('Pragma', 'no-cache')
          res.setHeader('Expires', '0')
          next()
        })
      },
    },
  ],

  server: {
    // Always force the dev server onto port 5173 — never lets another project steal it
    port: 5173,
    strictPort: false,
    headers: {
      'Clear-Site-Data': '"cache", "storage"',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  },
})
