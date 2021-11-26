const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "development" : "production",
  entry: "./src/index.tests.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.tests.js"
    // libraryTarget: "commonjs2"
  }
};
