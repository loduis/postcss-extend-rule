const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV !== "production" ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  }
};
