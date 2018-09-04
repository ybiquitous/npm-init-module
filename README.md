# npm-init-module

[![Build Status](https://travis-ci.com/ybiquitous/npm-init-module.svg?branch=master)](https://travis-ci.com/ybiquitous/npm-init-module)

A custom configuration for the [`npm init`](https://docs.npmjs.com/cli/init) command.

For details, please see the [`init-module`](https://docs.npmjs.com/misc/config#init-module) configuration.

## Install

```sh
curl -L https://raw.githubusercontent.com/ybiquitous/npm-init-module/master/index.js > ~/.npm-init.js
```

or

```sh
git clone https://github.com/ybiquitous/npm-init-module.git
cd npm-init-module
ln -s $(pwd)/index.js ~/.npm-init.js
```

## Usage

```sh
npm init [--scope=<SCOPE>] [--owner=<OWNER>] [--license=<LICENSE>] [--private=true]
```

**NOTE:** `--owner`, `--license` and `--private` options are NOT standard.

## License

[MIT](LICENSE)
