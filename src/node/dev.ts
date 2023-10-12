import { createServer as createViteDevServer } from "vite";


export function createDevServer(root: string = process.cwd()) {
  return createViteDevServer({
    root,
  })
}
