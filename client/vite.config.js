import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


// https://vitejs.dev/config/

export default defineConfig({
  server:{
    host: true,
    
  },
  
  plugins: [react()],
  define:{
    'process.env.VITE' :JSON.stringify(process.env.VITE_KEY)
  },

  build: {
    
    
      chunkSizeWarningLimit: 1600,
    
  
		rollupOptions: {
			output: {
				//Solve Warning: Some chunks are larger
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			}
		}
	}
  
}); 





/* main code before error   after run npm build comand
Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

 https://vitejs.dev/config
export default defineConfig({
  server:{
    host: true,
    
  },
  
  plugins: [react()],
  define:{
    'process.env.VITE' :JSON.stringify(process.env.VITE_KEY)
  },
  
}); */
