//babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/configs",
          "@interface": "./src/database/interfaces",
          "@model": "./src/database/models",
          "@repository": "./src/database/repositories",
          "@schema": "./src/database/schemas",
          "@middleware": "./src/middlewares",
          "@provider": "./src/providers",
          "@route": "./src/routes",
          "@service": "./src/services",
          "@case": "./src/usecases",
          "@util": "./src/utils",
        },
      },
    ],
  ],
  ignore: [
    "**/*.spec.ts",
  ]
};
