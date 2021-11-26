const postcss = require("postcss");
const plugin = require("../src");


test("css output expect", () => {
  run(".app{color: red} .h1{ @apply app }");
});


function run(input, output, opts) {
  let result = postcss([plugin(opts)]).process(input).toString();
  expect(result).toEqual(".app{color: red} .h1{ color: red}");
}