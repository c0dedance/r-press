import * as path from "path";

export const ROOT = path.resolve(__dirname, "../../../");

export const DEFAULT_HTML_PATH = path.resolve(ROOT, "template.html");
export const CLIENT_ENTRY_PATH = path.resolve(ROOT, "./src/runtime/client-entry.tsx");