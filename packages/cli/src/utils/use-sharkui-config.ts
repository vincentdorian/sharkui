import { existsSync, promises as fs, readFileSync } from "fs";
import path from "path";

export default function useSharkuiConfig() {
  async function getConfig() {
    const configPath = path.resolve("./sharkui.config.json");

    return JSON.parse(readFileSync(configPath, "utf-8"));
  }

  async function setConfig(config: object) {
    const configPath = path.resolve("./sharkui.config.json");
    await fs.writeFile(configPath, JSON.stringify(config, null, 4), "utf-8");
  }

  return { getConfig, setConfig };
}
