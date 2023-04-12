/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./apps/*/tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
  },
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    ".turbo",
    ".next",
    "public",
  ],
  plugins: ["tailwindcss"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "tailwindcss/no-custom-classname": "off",
  },
};
