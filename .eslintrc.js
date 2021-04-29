module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
  ignorePatterns: ["vue-shim.d.ts"],
}
