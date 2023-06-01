#!/usr/bin/env node
import { existsSync, promises as fs } from "fs";
import path from "path";
import { Command } from "commander";
import { detect } from "detect-package-manager";
import { execa } from "execa";
import ora from "ora";
import prompts from "prompts";

import {
  BASE_DEPENDENCIES,
  BASE_STYLES,
  BASE_TAILWIND_CONFIG,
} from "./templates/base";
import {
  NUXT_DEPENDENCIES,
  NUXT_TAILWIND_CONTENT,
  setupNuxt,
} from "./templates/nuxt";
import { getAvailableComponents, getComponents } from "./utils/get-components";
import { getPackageInfo } from "./utils/get-package-info";
import { logger } from "./utils/logger";
import useSharkuiConfig from "./utils/use-sharkui-config";
import useTailwindConfig from "./utils/use-tailwind-config";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

type Framework = {
  name: string;
  srcDir: string;
  tailwindcssDir: string;
  componentsDir: string;
  layoutsDir: string;
  disabled: boolean;
  deps: string[];
  tailwindContent: string[];
  callback: () => void;
};

const FRAMEWORKS_OPTIONS: Array<Framework> = [
  {
    name: "nuxt",
    srcDir: ".",
    tailwindcssDir: "./assets/css/main.css",
    componentsDir: "./components",
    layoutsDir: "./layouts",
    disabled: false,
    deps: NUXT_DEPENDENCIES,
    tailwindContent: NUXT_TAILWIND_CONTENT,
    callback: setupNuxt,
  },
  {
    name: "inertiajs-vue",
    srcDir: "./resources/js",
    tailwindcssDir: "./resources/css/app.css",
    componentsDir: "./components",
    layoutsDir: "./layouts",
    disabled: false,
    deps: [],
    tailwindContent: [],
    callback: () => {},
  },
];

async function main() {
  const packageInfo = getPackageInfo();
  const { getConfig } = useSharkuiConfig();

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
    .action(async (input, options) => {
      let framework = null;

      if (!input) {
        framework = await promptForFramework();
      } else {
        framework = FRAMEWORKS_OPTIONS.find((f) => f.name === input);
      }

      await init(framework);

      await configureTailwind(framework);

      await framework.callback();
    });

  program
    .command("add")
    .argument("[components]", "component to add")
    .action(async (components, options) => {
      let selection = null;

      const config = await getConfig();

      if (!components) {
        selection = await promptForComponents();
      } else {
        selection = components.split(" ");
      }

      const componentsData = await getComponents(selection);

      componentsData.forEach((component) => {
        const { name, files } = component;

        files.forEach((file) => {
          const { name, content } = file;

          if (!existsSync(config.componentsDir)) {
            fs.mkdir(config.componentsDir, { recursive: true });
          }

          const filePath = path.resolve(config.componentsDir, name);

          fs.writeFile(filePath, content, "utf-8");
        });
      });
    });

  program.parse();
}

async function init(framework: Framework) {
  const { deps, ...rest } = framework;

  logger.info(
    "Initializing sharkui configuration for framework: " + framework.name
  );

  fs.writeFile("sharkui.config.json", JSON.stringify(rest, null, 4), "utf-8");

  const pm = await detect();

  logger.info(`Detected package manager: ${pm}`);

  const spinner = ora("Installing dependencies").start();

  const dependencies = [...deps, ...BASE_DEPENDENCIES];

  try {
    await execa(pm, ["install", "--save-dev", ...dependencies]);
    spinner.succeed("Dependencies installed");
  } catch (error) {
    spinner.fail("Failed to install dependencies");
    console.error(error);
  }
}

async function promptForFramework() {
  const { framework } = await prompts({
    type: "select",
    name: "framework",
    message: "Which framework do you want to configure sharkui for?",
    hint: "Space to select.",
    instructions: false,
    choices: FRAMEWORKS_OPTIONS.map((f) => ({
      title: f.name,
      disabled: f.disabled,
      value: {
        name: f.name,
        srcDir: f.srcDir,
        tailwindcssDir: f.tailwindcssDir,
        componentsDir: f.componentsDir,
        layoutsDir: f.layoutsDir,
        deps: f.deps,
        callback: f.callback,
      },
    })),
  });

  return framework;
}

async function configureTailwind(framework: Framework) {
  const { init, getConfig, setConfig } = useTailwindConfig();

  if (!existsSync("tailwind.config.js")) {
    await init();
  }

  const spinner = ora("Initializing tailwindcss and shadcn/ui theme").start();

  const cssFilePath = path.resolve(framework.srcDir, framework.tailwindcssDir);

  const config = await getConfig();

  config.content = framework.tailwindContent;

  await setConfig(config);

  if (!existsSync(cssFilePath)) {
    await fs.mkdir(path.dirname(cssFilePath), { recursive: true });
    await fs.writeFile(cssFilePath, BASE_STYLES);
  }

  spinner.succeed("tailwindcss and shadcn/ui theme initialized");
}

async function promptForComponents() {
  const components = await getAvailableComponents();

  const { selectedComponents } = await prompts({
    type: "multiselect",
    name: "selectedComponents",
    message: "Which components do you want to add?",
    hint: "Space to select.",
    instructions: false,
    choices: components.map((c) => ({
      title: c.name,
      value: c.id,
      description: c.description,
    })),
  });

  return selectedComponents;
}

main();
