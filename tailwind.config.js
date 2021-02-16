const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: 'all',
  experimental: 'all',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["index.html", "src/**/*.vue", "src/**/*.js"],
    options: {
      whitelistPatterns: [/data-theme$/],
    },
  },
  variants: {
    margin: ["responsive", "hover", "focus"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    backgroundOpacity: ["responsive", "hover", "focus", "group-hover"],
  },
  theme: {
    extend: {
      spacing: {
        "84": "21rem",
        "88": "22rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("./themewind")],
}
