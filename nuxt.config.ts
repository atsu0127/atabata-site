// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  build: {
    transpile: ["vuetify"],
    extractCSS: true,
    optimizeCSS: true,
    loaders: {
      css: {
        exclude: [/\/node_modules\/vuetify\/.*\.css$/],
      },
    },
  },
  hooks: {
    "vite:extendConfig": (config: { plugins: any }) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  css: ["@/assets/main.scss", "@/assets/style.css"],
});
