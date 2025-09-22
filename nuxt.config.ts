export default defineNuxtConfig({
  css: ['assets/css/tailwind.css'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
});