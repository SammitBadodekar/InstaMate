/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@instamate/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
