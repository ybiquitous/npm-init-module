# npm-init-module

A custom configuration for the [`npm init`](https://docs.npmjs.com/cli/init) command.

For details, please see the [`init-module`](https://docs.npmjs.com/misc/config#init-module) setting in the `npm-config` documentation.

## Install

```sh
curl -L https://raw.githubusercontent.com/ybiquitous/npm-init-module/master/index.js > ~/.npm-init.js
```

or

```sh
git clone https://github.com/ybiquitous/npm-init-module.git
cd npm-init-module
npm config set init-module $(pwd)/index.js
```

## Usage

```sh
npm init [--scope=<SCOPE>] [--owner=<OWNER>] [--license=<LICENSE>] [--private=true]
```

**NOTE:** `--owner`, `--license` and `--private` options are NOT standard.

## License

[MIT](LICENSE)
