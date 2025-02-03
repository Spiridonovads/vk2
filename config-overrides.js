const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.module\.styl$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { modules: true }, // Включаем CSS-модули
      },
      "stylus-loader",
    ],
  })
);
