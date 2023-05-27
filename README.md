# vite-plugin-git-info

## Install

```bash
npm i vite-plugin-git-info    or    pnpm i vite-plugin-git-info
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
  

After building, the version. json file will be generated in the dist directory. Below is the generated version. json file

``` json
{
  "repository": "https://github.com/xxx.git",
  "branch": "master",
  "commit": "commitId",
  "build_date": "2023-05-27 20:36:44",
  "commit_date": "2023-05-26 19:36:33",
  "tag": "98d5864-dirty"
}

```

