import type { Plugin } from 'vite'
import { execSync } from "child_process"

function vitePluginVersion(options: any = {}): Plugin {
  const {
    fileName = 'version.json',
  } = options

  return {
    name: 'vite-plugin-version',
    apply: 'build',
    async buildStart() {

      try {
        this.emitFile({
          fileName,
          source: JSON.stringify(getVersion(), null, 2),
          type: 'asset',
        })
      }
      catch (e) {
        console.log(e)
      }
    },
  }
}

function getVersion() {
  var commit = execSync("git show -s --format=%H").toString().trim()
  var user = (execSync("git show -s --format=%cn") || '').toString().trim()
  var email = execSync("git show -s --format=%ce").toString().trim()
  var commit_date = formatDate(new Date(execSync(`git show -s --format=%cd`).toString()))
  var branch = execSync("git rev-parse --abbrev-ref HEAD").toString().replace(/\s+/, "")
  var build_date = formatDate(new Date())
  var tag = execSync("git describe --long --tags --dirty --always").toString().trim()
  return {
    branch,
    commit,
    user,
    build_date,
    commit_date,
    tag,
    email,
  }
}

function formatDate(date: Date) {
  function pad(value: number) {
    return (value < 10 ? "0" : "") + value
  }
  let year = date.getFullYear()
  let month = pad(date.getMonth() + 1)
  let day = pad(date.getDate())
  let hour = pad(date.getHours())
  let minutes = pad(date.getMinutes())
  let seconds = pad(date.getSeconds())
  return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds
}

export default vitePluginVersion
