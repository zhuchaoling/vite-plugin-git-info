import { defineConfig } from 'vite'
import versionPlugin from '../src/index'

export default defineConfig({
  plugins: [
    versionPlugin(),
  ],
})
