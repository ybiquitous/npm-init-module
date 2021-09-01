# npm-init-module

A custom [`init-module`](https://docs.npmjs.com/cli/v7/using-npm/config#init-module) configuration for the [`npm init`](https://docs.npmjs.com/cli/init) command.

## Install

```sh
curl -L -o ~/.npm-init.js https://raw.githubusercontent.com/ybiquitous/npm-init-module/HEAD/index.js
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
