# postcss-class-apply

[![CSS Standard Status][css-image]][css-url]
[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]


> [PostCSS] plugin enabling custom property sets references

Refer to [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties#postcss-custom-properties-)
for DOMless limitations.

## Web Platform status

Spec (editor's draft): https://tabatkins.github.io/specs/css-apply-rule  
Browser support: https://www.chromestatus.com/feature/5753701012602880

:warning: The `@apply` rule and custom property sets most likely won't get any more support from browser vendors as the
spec is yet considered deprecated and [alternative solutions](https://tabatkins.github.io/specs/css-shadow-parts) are
being discussed.  
Refer to following links for more infos:

* https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md

## Installation

```
npm install postcss-class-apply --save-dev
```

## Usage

```js
const fs = require('fs');
const postcss = require('postcss');
const apply = require('postcss-class-apply');

const input = fs.readFileSync('input.css', 'utf8');

postcss()
  .use(apply)
  .process(input)
  .then((result) => {
    fs.writeFileSync('output.css', result.css);
  });
```

## Examples

### In CSS declared sets

```css
/* input */

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
  @apply btn-primary;
}
```

```css
/* output */
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
```

## Credits

* [Rasel Mahmud](https://github.com/rasel-code-dev)

## Licence

postcss-class-apply is [unlicensed](http://unlicense.org/).


[PostCSS]: https://github.com/postcss/postcss

[css-url]: https://cssdb.org#rejected

[css-image]: https://img.shields.io/badge/cssdb-rejected-red.svg?style=flat-square

[npm-url]: https://www.npmjs.org/package/postcss-apply

[npm-image]: http://img.shields.io/npm/v/postcss-apply.svg?style=flat-square

[travis-url]: https://travis-ci.org/pascalduez/postcss-apply?branch=master

[travis-image]: http://img.shields.io/travis/pascalduez/postcss-apply.svg?style=flat-square

[codecov-url]: https://codecov.io/gh/pascalduez/postcss-apply

[codecov-image]: https://img.shields.io/codecov/c/github/pascalduez/postcss-apply.svg?style=flat-square

[depstat-url]: https://david-dm.org/pascalduez/postcss-apply

[depstat-image]: https://david-dm.org/pascalduez/postcss-apply.svg?style=flat-square

[license-image]: http://img.shields.io/npm/l/postcss-apply.svg?style=flat-square

[license-url]: UNLICENSE

[spec]: https://tabatkins.github.io/specs/css-apply-rule
