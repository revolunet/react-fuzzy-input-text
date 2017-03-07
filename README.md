# react-fuzzy-input-text

[![npm package][npm-badge]][npm]

A simple search widget, that autocomplete your text inputs.

![demo](./demo.gif)

[Demo](http://revolunet.github.io/react-fuzzy-input-text)

```js
const products = [
  "iPhone 4",
  "iPhone 5",
  "iPhone 6",
  "iPhone 7",
  "iPad 1",
  "iPad 2",
  "iPad 3",
  "iPad 4",
  "iPad Air",
  "iPad Pro",
  "Motorola G",
  "Motorola G 2",
  "Motorola X",
  "Nexus 1",
  "Nexus 2",
  "Nexus 3",
  "Nexus 4",
  "Google pixel"
]
return (
  <AutoComplete
    placeholder="Search product"
    items={ products }
    onChange={ item => alert(item) }
  />
)
```

[npm-badge]: https://img.shields.io/npm/v/react-fuzzy-input-text.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-fuzzy-input-text
