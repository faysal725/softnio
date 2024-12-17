// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
    }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt3-leaflet",
    "@nuxtjs/color-mode",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  colorMode: { classSuffix: "" },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition:0,
    viewer: true
  },
  ssr: false,
  // publicRuntimeConfig: {
  //   	baseUrl: process.env.BASE_URL
  // },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ["~/assets/css/main.css"],
});
