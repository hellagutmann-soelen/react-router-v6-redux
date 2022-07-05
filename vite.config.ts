import { defineConfig, loadEnv, } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr';
import replace from '@rollup/plugin-replace';
import { execSync } from 'child_process';


// https://vitejs.dev/config/
export default ( {mode}) => {

  return defineConfig({
    plugins: [
      svgr(),
      react(),
      replace({
        preventAssignment: true,
        'process.env.__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
        'process.env.__BUILD_DATE__': () => JSON.stringify( new Date() ),
        'process.env.__GIT_HASH__': () => JSON.stringify( execSync('git rev-parse --short HEAD').toString().trim() ),

      }),
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        plugins: [

          // Add rollup plugins here

        ]
      }
    },
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      },
    },

    define: mode === 'development' ? { global: {}, } : {},
  })


}
