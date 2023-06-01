import { existsSync, promises as fs } from "fs";
import path from "path";

import { BASE_TAILWIND_CONFIG } from "../templates/base";

export default function useTailwindConfig() {
  async function init() {
    const configPath = path.resolve("tailwind.config.js");
    if (existsSync(configPath)) {
      return;
    }
    await fs.writeFile(configPath, BASE_TAILWIND_CONFIG);
  }

  // retrieve tailwind config object from module.exports
  async function getConfig() {
    const configPath = path.resolve("tailwind.config.js");
    const config = await import(configPath);

    return config.default;
  }

  async function setConfig(config: object) {
    const updatedConfigData = `/** @type {import('tailwindcss').Config} */
module.exports = ${JSON.stringify(config, null, 2)}`;

    const configPath = path.resolve("tailwind.config.js");
    await fs.writeFile(configPath, updatedConfigData);
  }

  return { init, getConfig, setConfig };
}
