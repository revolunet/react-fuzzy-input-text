# react-fuzzy-input-text

[![npm package][npm-badge]][npm]

A simple [fuse.js](http://fusejs.io) based autocomplete widget.

![demo](./demo.gif)

## Features

 - use the awesome [fuse.js](http://fusejs.io) fuzzy-search library
 - up/down keys navigation

[Demo](http://revolunet.github.io/react-fuzzy-input-text)


```js
import FuzzyInput from 'react-fuzzy-input-text'

const cities = require('./cities.json')

// optional fuse.js options
const fuseOptions = {
  threshold: 0.5
}

return (
  <FuzzyInput
    placeholder="Search city"
    items={ cities.map(c => c.name) }
    fuseOptions={ fuseOptions }
    onChange={ item => alert(item) }
  />
)
```

[npm-badge]: https://img.shields.io/npm/v/react-fuzzy-input-text.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-fuzzy-input-text
