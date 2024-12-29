export default [
  // Environment settings
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false, 
      },
    },

    rules: {
      semi: ["error", "always"],
      // Uncomment the next line to enforce double quotes
      // quotes: ["error", "double"],
    },
  },

  // Legacy support for .eslintrc.js
  // ...compat.config({
  //   env: {
  //     browser: true,
  //     es6: true,
  //   },
  //   plugins: ["react"],
  // }),
];
