const path = require("path");
const { execSync } = require("child_process");

const run = cmd => execSync(cmd, { encoding: "utf8" }).trim();

const parseOptions = () => {
  return process.argv.slice(3).reduce((opts, arg, index, args) => {
    if (!arg.startsWith("--")) {
      return opts;
    }

    let key;
    let value;
    if (arg.includes("=")) {
      [key, value] = arg.split("=");
    } else {
      value = args[index + 1];
      if (value) {
        key = arg;
      } else {
        return opts;
      }
    }

    key = key.replace(/^--/, "");

    opts[key] = value;
    return opts;
  }, {});
};

const opts = parseOptions("scope", "owner", "license", "private");

let name = path.basename(process.cwd());
const scope = opts.scope;
if (scope) {
  name = `@${scope}/${name}`;
}

const owner = opts.owner || "OWNER";

module.exports = {
  version: "0.0.1",

  name: name,

  description: "<TODO>",

  author: {
    name: run("git config user.name"),
    email: run("git config user.email"),
  },

  private: opts.private === "true" || undefined,

  license: opts.license || "MIT",

  repository: {
    type: "git",
    url: `git+https://github.com/${owner}/${name}.git`,
  },

  bugs: {
    url: `https://github.com/${owner}/${name}/issues`,
  },

  homepage: `https://github.com/${owner}/${name}#readme`,

  engines: {
    node: ">=6.4.0",
  },

  main: "index.js",

  scripts: {
    test: 'echo "No tests." && exit 1',
  },
};
