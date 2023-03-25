// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config: { plugins: any }) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
  },
  css: ["@/assets/main.scss", "@/assets/style.css"],
});
