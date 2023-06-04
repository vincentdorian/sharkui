// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/google-fonts"],
  ssr: true,

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  googleFonts: {
    preload: true,
    download: true,
    inject: true,
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],

  content: {
    documentDriven: true,
    highlight: {
      theme: "css-variables",
    },
  },

  devtools: {
    enabled: true,
  },
});
