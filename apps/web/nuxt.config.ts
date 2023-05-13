// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  content: {
    documentDriven: true
  },
});
