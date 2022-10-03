module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.cjs",
};
