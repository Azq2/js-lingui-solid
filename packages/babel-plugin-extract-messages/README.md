[![License][badge-license]][license]
[![Version][badge-version]][package]
[![Downloads][badge-downloads]][package]

# @lingui-solid/babel-plugin-extract-messages

> Babel plugin which extracts messages for translation from source files

`@lingui-solid/babel-plugin-extract-messages` is part of [LinguiJS][linguijs]. See the [documentation][documentation] for all information, tutorials and examples.

## Installation

```sh
npm install --save-dev @lingui-solid/babel-plugin-extract-messages
# yarn add --dev @lingui-solid/babel-plugin-extract-messages
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@lingui-solid/babel-plugin-extract-messages"]
}
```

### Via CLI

```bash
babel --plugins @lingui-solid/babel-plugin-extract-messages script.js
```

### Via Node API

```js
require("@babel/core").transform("code", {
  plugins: ["@lingui-solid/babel-plugin-extract-messages"]
})
```

## License

[MIT][license]

[license]: https://github.com/lingui/js-lingui/blob/main/LICENSE
[linguijs]: https://github.com/lingui/js-lingui
[documentation]: https://lingui.dev
[package]: https://www.npmjs.com/package/@lingui-solid/babel-plugin-extract-messages
[badge-downloads]: https://img.shields.io/npm/dw/@lingui-solid/babel-plugin-extract-messages.svg
[badge-version]: https://img.shields.io/npm/v/@lingui-solid/babel-plugin-extract-messages.svg
[badge-license]: https://img.shields.io/npm/l/@lingui-solid/babel-plugin-extract-messages.svg
