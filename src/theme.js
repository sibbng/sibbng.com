import { ref, computed, isRef, unref } from "vue";

const themeConfig = { dark: true, light: true }
export const system = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export const theme = ref(system);

const isUtils = {}
const themeUtils = {}
Object.keys(themeConfig).map(themeKey => {
  isUtils["is" + themeKey] = computed(() =>
    themeKey === (theme.value === "system" ? system : theme.value)
  )
  themeUtils[themeKey] = classes =>
    isUtils["is" + themeKey].value && classes

})

export { isUtils, themeUtils };

export function setTheme(to) {
  theme.value = to;
  document.documentElement.dataset.theme = to === "system" ? system : to;
  localStorage.theme = to;
}

setTheme(localStorage.theme || system)

export function themewindVue(app) {
  const methods = {
    ...isUtils,
    ...themeUtils,
    setTheme,
    theme
  }
  Object.keys(methods).map(method => {
    app.config.globalProperties[method] = methods[method]
    if (isRef(methods[method]))
      Object.defineProperty(app.config.globalProperties, method, {
        get: () => unref(methods[method]),
      })
  })
}
