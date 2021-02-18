import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"
import vueSvgPlugin from "vite-plugin-vue-svg"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSvgPlugin(), WindiCSS()],
  resolve: {
    alias: {
      "/~/": "/src/",
    },
  },
})
