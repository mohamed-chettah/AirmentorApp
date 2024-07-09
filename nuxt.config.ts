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
    "@pinia/nuxt",
    "@nuxtjs/color-mode"
  ],
  ui: {
    global: true,
    icons: ['heroicons','mdi'],
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  compatibilityDate: '2024-07-08'
})