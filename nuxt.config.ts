// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/style/main.css'],
  runtimeConfig: {
    public: {
		BASE_URL: 'https://developer.redcomm.co.id/test/fe/test-api/api',
    },
  },
})
