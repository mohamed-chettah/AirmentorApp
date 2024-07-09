// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    "@nuxt/ui",
    "@pinia/nuxt"
  ],
  ui: {
    global: true,
    icons: ['heroicons','mdi'],
  },

  compatibilityDate: '2024-07-08'
})