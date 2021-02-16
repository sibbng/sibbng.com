const plugin = require("tailwindcss/plugin")

const fs = require("fs")
const yaml = require("yaml")

const themeConfig = yaml.parse(fs.readFileSync("./theme.yml", "utf8"))

const colors = {}
const themes = {}

Object.keys(themeConfig).map((key) => {
  const theme = key === "shared" ? "[data-theme]" : `[data-theme="${key}"]`
  themes[theme] = {}
  Object.keys(themeConfig[key]).map((variable) => {
    themes[theme]["--" + variable] = themeConfig[key][variable].startsWith('--') ? "var(" + themeConfig[key][variable] + ")" : themeConfig[key][variable]
    colors[variable] = "var(--" + variable.replace('--', '') + ")"
  })
})

module.exports = {
  handler: ({ addUtilities }) => {
    addUtilities(themes)
  },
  config: {
    theme: {
      extend: {
        colors,
      },
    },
  }
}
