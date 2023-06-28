// nuxt.config.ts
//last try
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@vueuse/nuxt"],
  app: {
    baseURL: "/spotifycollab/",
  },
  runtimeConfig: {
    public: {
      spotifyClientId: "",
      spotifyClientSecret: "",
    },
  },
  ssr: false,
});
