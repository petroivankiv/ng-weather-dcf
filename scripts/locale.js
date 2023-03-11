// #!/usr/bin/env node

/* 
  The purpose of this script is to add a new locale file
  Currently, it supports only json files
*/

import chalk from "chalk";
import boxen from "boxen";
import fs from "fs";
import yargs from "yargs/yargs";
import translate from "@iamtraction/google-translate";
import cliProgress from "cli-progress";

const localesPath = "./src/locale/";
const defaultLocalePath = localesPath + "messages.json";

// create a new progress bar instance and use shades_classic theme
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

const argv = yargs(process.argv.slice(2))
  .usage(chalk.magenta("Usage: $0 <command> [options]"))
  .command(chalk.green("add"), chalk.cyan("Add locale to the project"))
  .example(chalk.magenta("$0 add -n en-CA"))
  .alias("n", "name")
  .nargs("n", 1)
  .describe("n", "Provide a locale name")
  .demandOption(["n"])
  .help("h")
  .alias("h", "help").argv;

let translations;

const sanitizeLocale = (name) => {
  if (!translate.languages.isSupported(name)) {
    console.log(chalk.red("\n Locale is not supported, default to en \n"));
    return "en";
  }

  return name;
};

// translate key words
try {
  const rawData = fs.readFileSync(defaultLocalePath);
  const jsonData = JSON.parse(rawData);
  const translateTo = sanitizeLocale(argv.name);
  const entries = Object.entries(jsonData.translations);

  progressBar.start(entries.length, 0);

  const result = await Promise.all(
    entries.map(([key, value]) =>
      translate(value, { to: translateTo }).then((res) => {
        progressBar.increment();

        return {
          key,
          value: res.text,
        };
      })
    )
  );

  // stop the progress bar
  progressBar.stop();

  translations = result.reduce(
    (acc, curr) => ({ ...acc, [curr.key]: curr.value }),
    {}
  );
} catch (e) {
  console.log(
    boxen(chalk.red(e.message), {
      padding: 1,
      borderColor: "red",
      dimBorder: true,
    })
  );
}

// write to a new locale file
const data = JSON.stringify({ locale: argv.name, translations }, null, 2);
const stream = fs.createWriteStream(`${localesPath}messages.${argv.name}.json`);

stream.once("open", () => {
  stream.write(data);
  stream.end();
});

console.log(
  boxen(`Added a new locale: ${chalk.cyan(argv.name)}`, {
    padding: 1,
    margin: 1,
    borderColor: "green",
    dimBorder: true,
  })
);
