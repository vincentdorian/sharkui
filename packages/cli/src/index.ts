#!/usr/bin/env node
import { existsSync, promises as fs } from "fs";
import path from "path";
import { Command } from "commander";
import { execa } from "execa";
import ora from "ora";
import prompts from "prompts";

import { getPackageInfo } from "./utils/get-package-info";
import { getPackageManager } from "./utils/get-package-manager";
import { logger } from "./utils/logger";
import {
  STYLES,
  TAILWIND_CONFIG,
  SHARKUI_CONFIG_NUXT,
} from "./utils/templates";
import useConfig from "./utils/use-config";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

const FRAMEWORKS = ["nuxt", "laravel-inertiajs"];

const DEV_DEPENDENCIES = [
  "tailwindcss-animate",
  "tailwindcss",
  "autoprefixer",
  "postcss"
];

const { getConfig, setConfig } = useConfig();

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("@sharkui/cli")
    .description("Add sharkui components to your project")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number"
    );

  program
    .command("init")
    .argument("[framework]", "option")
    .description("Configure sharkui for your project.")
    .action(async (framework, options) => {
      if (!framework) {
        framework = await promptForFramework();
      }

      logger.info(`Configuring sharkui for ${framework}...`);

      const sharkUiConfigDestination = "./sharkconfig.json";
      const sharkUiConfigSpinner = ora(`Updating sharkconfig.json...`).start();
      await fs.writeFile(sharkUiConfigDestination, SHARKUI_CONFIG_NUXT, "utf8");
      sharkUiConfigSpinner.succeed();

      /* promopt for package manager */
      const selectedPackageManager = await promptForPackageManager();

      setConfig("packageManager", selectedPackageManager);

      /* prompt for destination dir */

      if (!options.yes) {
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          message:
            "Running this command will install dependencies and overwrite your existing tailwind.config.js. Proceed?",
          initial: true,
        });

        if (!proceed) {
          process.exit(0);
        }
      }

      const packageManager = getPackageManager();

      logger.info("Found package manager: " + packageManager);

      const dependenciesSpinner = ora(`Installing dependencies...`).start();
      await execa(packageManager, [
        packageManager === "npm" ? "install" : "add",
        "-D",
        ...DEV_DEPENDENCIES,
      ]);
      dependenciesSpinner.succeed();

      const tailwindDestination = "./tailwind.config.js";
      const tailwindSpinner = ora(`Updating tailwind.config.js...`).start();
      await fs.writeFile(tailwindDestination, TAILWIND_CONFIG, "utf8");
      tailwindSpinner.succeed();

      writeStyles();
    });

  program.parse();
}

async function promptForFramework() {
  const { framework } = await prompts({
    type: "select",
    name: "framework",
    message: "Which framework are you using?",
    hint: "Space to select.",
    instructions: false,
    choices: FRAMEWORKS.map((f) => ({
      title: f,
      value: f,
    })),
  });

  return framework;
}

async function promptForPackageManager() {
  const { packageManager } = await prompts({
    type: "select",
    name: "packageManager",
    message: "Which package manager are you using?",
    hint: "Space to select.",
    instructions: false,
    choices: [
      {
        title: "npm",
        value: "npm",
      },
      {
        title: "yarn",
        value: "yarn",
      },
      {
        title: "pnpm",
        value: "pnpm",
      },
    ],
  });

  return packageManager;
}

async function promptForDestinationDir() {
  const { dir } = await prompts([
    {
      type: "text",
      name: "dir",
      message: "Where would you like to install the component(s)?",
      initial: "./components/ui",
    },
  ]);

  return dir;
}

/* write styles into css location defined */
async function writeStyles() {
  const cssDirPath = getConfig("cssDir");
  const cssFileName = getConfig("cssFileName");

  /* check if path to css file exists */
  if (!existsSync(cssDirPath)) {
    await fs.mkdir(cssDirPath, { recursive: true });
  }

  await fs.writeFile(path.join(cssDirPath, cssFileName), STYLES, "utf8");
}


main();
