import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin-r-press/indexHtml";


export function createDevServer(root: string = process.cwd()) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml()]
  })
}
