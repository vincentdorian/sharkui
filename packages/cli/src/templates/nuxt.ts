// nuxt (vue) dependencies
const NUXT_DEPENDENCIES = [
  "@ark-ui/vue",
  "lucide-vue-next",
  "@nuxtjs/google-fonts",
];

// nuxt files for tailwind to scan
const NUXT_TAILWIND_CONTENT = [
  "./components/**/*.{js,vue,ts,tsx,jsx}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./app.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
];

// Nuxt specific setup
const setupNuxt = async () => {};

// Fetch the nuxt config file from nuxt.config.js
const fetchNuxtConfig = async () => {};

export { NUXT_DEPENDENCIES, NUXT_TAILWIND_CONTENT, setupNuxt };
