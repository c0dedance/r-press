import { readFile } from "fs/promises";
import { Plugin } from "vite";
import { DEFAULT_HTML_PATH } from "../constant";


export function pluginIndexHtml(): Plugin {
  return {
    name: 'r-press:index-html',
    // 不在函数题体直接插入中间件，而是在configureServer中插入？
    // 防止影响vite的逻辑
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/') {
          return next();
        }
        const htmlContent = await readFile(DEFAULT_HTML_PATH, 'utf-8');

        try {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(htmlContent);
        } catch (e) {
          return next(e);
        }
      })
    }
  }
}