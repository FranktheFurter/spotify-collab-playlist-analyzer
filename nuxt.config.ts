// nuxt.config.ts
//last try
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@vueuse/nuxt"],
  app: {
    baseURL: "/spotify-collab-playlist-analyzer/",
  },
  runtimeConfig: {
    public: {
      spotifyClientId: "",
      spotifyClientSecret: "",
    },
  },
  ssr: false,
})
