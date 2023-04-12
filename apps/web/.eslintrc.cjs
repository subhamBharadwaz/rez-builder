/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["../../.eslintrc.cjs", "next", "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
  },
};
