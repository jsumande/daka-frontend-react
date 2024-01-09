// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   esbuild: {
//     jsxInject: `import React from 'react';`,
//     loader: {
//       '.js': 'jsx',
//     },
//   },

// })

export default {
  plugins: [react()],
  
  // other Vite configuration options...

  esbuild: {
    jsxInject: `import React from 'react';`,
    target: 'esnext',
  },

  // other Vite configuration options...
};
