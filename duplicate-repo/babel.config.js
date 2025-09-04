module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    // Uncomment this line if you’re using TS/TSX
    // "@babel/preset-typescript",
  ],
};
