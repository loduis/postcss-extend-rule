const postcss = require("postcss");
const plugin = require("../src");


test("css output expect", () => {
  run(
    ".app{color: red} .h1{ @apply app }",
    ".app{color: red} .h1{ color: red}"
  );
});


test("nested css selector when use scss to css compiler", () => {
  run(
    ".app{color: red} .h1{ @apply app } .list .list_item{ @apply app h1 }",
    ".app{color: red} .h1{ color: red} .list .list_item{ color: red; color: red}"
  );
});

test("ddddd", () => {
  run(
    `
      .reset {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .list_item {
        @apply reset;
      }
      
      .btn-reset {
        outline: none;
        border: 1px solid;
      }
      
      .btn-primary {
        border-color: #204486;
        background: #3d82ff;
      }
      
      .button {
        margin: 3px 8px;
        @apply btn-primary btn-reset;
      }
    `,
    `
      .reset {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .list_item {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .btn-reset {
        outline: none;
        border: 1px solid;
      }
      
      .btn-primary {
        border-color: #204486;
        background: #3d82ff;
      }
      
      .button {
        margin: 3px 8px;
        border-color: #204486;
        background: #3d82ff;
        outline: none;
        border: 1px solid;
      }
    `
  );
});


function run(input, output, opts) {
  let result = postcss([plugin(opts)]).process(input).toString();
  expect(result).toEqual(output);
}