/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: "#0080FF",
          secondary: "#0060FF",
          accent: "#FF0000",
          neutral: "#FFFFFF",
          "base-100": "#F5F5F5",
          info: "#6666FF",
          success: "#88FF88",
          warning: "#FFFFAA",
          error: "#D65151",
        },
        myDarkTheme: {
          primary: "#3897FF",
          secondary: "#007AFF",
          accent: "#FF6600",
          neutral: "#222222",
          "base-100": "#444444",
          info: "#6666FF",
          success: "#88FF88",
          warning: "#FFFFAA",
          error: "#D65151",
        },
      },
    ],
    darkTheme: "myDarkTheme",
  },
};
