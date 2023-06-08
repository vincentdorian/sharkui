// nuxt (vue) dependencies
const NUXT_DEPENDENCIES = [
  "@ark-ui/vue",
  "lucide-vue-next",
  "@nuxtjs/google-fonts",
  "@nuxtjs/tailwindcss",
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

export { NUXT_DEPENDENCIES, NUXT_TAILWIND_CONTENT };
