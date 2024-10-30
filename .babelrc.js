module.exports = {
  presets: [["babel-preset-gatsby-package", { browser: true }], "@babel/typescript"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-arrow-functions"],
    [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          "~globalstyles": "./src/styles",
          "~models": "./src/models",
          "~libs": "./src/libs",
          "~stores": "./src/stores",
          "~views": "./src/views",
          "~shared": "./src/views/shared",
          "~layouts": "./src/views/shared/layouts",
          "~components": "./src/views/shared/components",
          "~blocks": "./src/views/shared/blocks",
          "~sections": "./src/views/shared/sections",
          "~modals": "./src/views/shared/modals",
          "~gatedPages": "./src/views/gatedPages",
        },
      },
    ],
  ],
};
