import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react({
        // Enable Fast Refresh for better development experience
        fastRefresh: true,
        // Optimize React runtime
        jsxRuntime: 'automatic'
      })
    ],
    server: {
      port: parseInt(env.VITE_DEV_PORT) || 3000,
      open: true,
      // Enable hot module replacement for faster development
      hmr: true
    },
    // Environment variables for client-side access
    define: {
      'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(env.VITE_GA_MEASUREMENT_ID),
      'import.meta.env.VITE_SITE_URL': JSON.stringify(env.VITE_SITE_URL),
      'import.meta.env.VITE_AUTHOR_EMAIL': JSON.stringify(env.VITE_AUTHOR_EMAIL),
    },
    build: {
      outDir: 'dist',
      // Disable sourcemaps in production for smaller bundle size
      sourcemap: false,
      // Enable minification for smaller bundle size
      minify: 'terser',
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          // Split vendor libraries into separate chunk
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion', 'aos'],
            router: ['react-router-dom'],
            icons: ['react-icons'],
            analytics: ['@vercel/analytics']
          },
          // Optimize chunk file names for caching
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      // Enable tree shaking
      target: 'es2015',
      // Optimize CSS
      cssCodeSplit: true,
      // Reduce chunk size limit warnings
      chunkSizeWarningLimit: 1000
    },
    // Optimize dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'framer-motion',
        'react-router-dom',
        'react-icons',
        'aos',
        '@vercel/analytics/react'
      ]
    },
    // Enable esbuild for faster builds
    esbuild: {
      // Remove console logs and debugger statements in production
      drop: env.VITE_NODE_ENV === 'production' ? ['console', 'debugger'] : []
    }
  }
})
