import { existsSync, promises as fs, readFileSync } from "fs";
import path from "path";

export default function useNuxtConfig() {
  function getConfig() {
    const configPath = path.resolve("nuxt.config.ts");
    if (existsSync(configPath)) {
      const config = readFileSync(configPath, "utf-8");
      return config;
    }
  }

  function setConfig() {}

  return {
    getConfig,
    setConfig,
  };
}
