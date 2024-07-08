// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-08",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  ui: {
    global: true,
    icons: ['heroicons','mdi'],
  },
  css: ['~/assets/css/main.css']
})