import { defineConfig } from 'vite'
// import viteGitInfoPlugin from '../src'
import viteGitInfoPlugin from 'vite-plugin-git-info'

export default defineConfig({
  plugins: [
    viteGitInfoPlugin(),
  ],
})
