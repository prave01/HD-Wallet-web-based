// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // add other paths if needed
  ],
  // 👇 Add this
  experimental: {
    // Enables parsing class names from function calls
    classRegex: [
      // for class-variance-authority
      ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
      // for clsx/cn/twMerge
      ["(?:cn|clsx|twMerge)\\(([^)]*)\\)", "[\"'`]([^\"'`]*)[\"'`]"],
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
