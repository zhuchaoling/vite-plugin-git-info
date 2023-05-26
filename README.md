# vite-plugin-git-info

## Install

```bash
npm i vite-plugin-git-info    or  pnpm i vite-plugin-git-info
```
 
Add plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import viteGitInfoPlugin from 'vite-plugin-git-info'

export default defineConfig({
  plugins: [
    viteGitInfoPlugin(),
  ],
})

```

