// tailwind.config.ts

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};

export default config;
