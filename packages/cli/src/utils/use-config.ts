import fs from "fs-extra";
import path from "path";

export default function useConfig() {
  const configJsonPath = path.join("sharkconfig.json");

  function getConfig(key?: string) {
    if (fs.existsSync(configJsonPath) && !key) {
      return fs.readJSONSync(configJsonPath);
    }

    if (fs.existsSync(configJsonPath) && key) {
      return fs.readJSONSync(configJsonPath)[key];
    }

    return {};
  }

  function setConfig(key: string, value: any) {
    const config = getConfig();

    config[key] = value;

    fs.writeJSONSync(configJsonPath, config, { spaces: 2 });
  }

  return { getConfig, setConfig };
}
