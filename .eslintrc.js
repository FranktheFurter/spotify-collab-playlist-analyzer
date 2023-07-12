module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  plugins: ["prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/multi-word-component-names": "off",
  },
}
