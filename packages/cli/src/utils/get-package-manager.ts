import useConfig from "./use-config"

export function getPackageManager() {
    const { getConfig } = useConfig()

    const packageManager = getConfig("packageManager")
  
    if (!packageManager) {
      return "npm"
    }
  
    if (packageManager.startsWith("yarn")) {
      return "yarn"
    }
  
    if (packageManager.startsWith("pnpm")) {
      return "pnpm"
    }
  
    return "npm"
  }