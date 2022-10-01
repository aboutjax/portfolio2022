/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "3xl": "6.875rem",
      "2xl": "4.25rem",
      xl: "2.625rem",
      lg: "1.625rem",
      base: "1rem",
      sm: "0.75rem",
      xs: "0.65rem",
    },
    extend: {
      letterSpacing: {
        normal: "0em",
        tight: "-0.03em",
      },
      fontWeight: {
        xl: "600",
      },
      maxWidth: {
        "8xl": "120ch",
      },
      colors: {
        default: {
          DEFAULT: "rgb(var(--token-default-main) / <alpha-value>)",
          contrastPrimary:
            "rgb(var(--token-default-contrast-primary) / <alpha-value>)",
          contrastSecondary:
            "rgb(var(--token-default-contrast-secondary) / <alpha-value>)",
        },
      },
      lineHeight: {
        "extra-loose": "2.5",
        heading: "120%",
      },
      typography: ({ theme }) => ({
        slate: {
          css: {
            "--tw-prose-body": theme("colors.default.contrastPrimary"),
            "--tw-prose-headings": theme("colors.default.contrastPrimary"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
