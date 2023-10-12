import { cac } from "cac";

const { version } = require("../../package.json");

const cli = cac("r-press").version(version).help();

cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root: string) => {
    console.log("dev", root);
  });

cli
  .command("build [root]", "build for production")
  .action(async (root: string) => {
    console.log("build", root);
  });

cli.parse();