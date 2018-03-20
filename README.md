# sync

[![NPM version](https://img.shields.io/npm/v/@ya-wxapp-org/sync.svg?style=flat)](https://npmjs.com/package/@sync) [![NPM downloads](https://img.shields.io/npm/dm/@ya-wxapp-org/sync.svg?style=flat)](https://npmjs.com/package/sync)

## Install

```bash
yarn add @ya-wxapp-org/sync
```

## Usage

```js
import Sync, { register, remove, clear } from '@ya-wxapp/sync'

register('test')

Sync.registers
//=> ['test']

Sync.test = 1
//=> localStorage.test = 1

console.log(Sync.test)
//=> 1

remove('test')
// remove localStorage.text

clear()
// clear all
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**sync** © [fimars](https://github.com/fimars), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by fimars with help from contributors ([list](https://github.com/fimars/sync/contributors)).

> [github.com/fimars](https://github.com/fimars) · GitHub [@fimars](https://github.com/fimars) · Twitter [@fimars](https://twitter.com/fimars)
