// #!/usr/bin/env node

// when using as a command from package json
// before commands should be used two dashes
// npm run coun-lines -- count -f file.js

import chalk from "chalk";
import boxen from "boxen";
import fs from "fs";
import yargs from "yargs/yargs";

const argv = yargs(process.argv.slice(2))
  .usage(chalk.magenta("Usage: $0 <command> [options]"))
  .command(chalk.green("count"), chalk.cyan("Count the lines in a file"))
  .example(
    chalk.magenta("$0 count -f foo.js", "count the lines in the given file")
  )
  .alias("f", "file")
  .nargs("f", 1)
  .describe("f", "Load a file")
  .demandOption(["f"])
  .help("h")
  .alias("h", "help").argv;

const s = fs.createReadStream(argv.file);

let lines = 0;

s.on("data", function (buf) {
  lines += buf.toString().match(/\n/g).length;
});

s.on("end", function () {
  console.log(
    boxen(
      `File '${chalk.green(argv.file)}': has a ${chalk.blue(lines)} lines`,
      {
        padding: 1,
        borderColor: "blue",
        dimBorder: true,
      }
    )
  );
});
