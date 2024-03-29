const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");
const { EOL } = require("os");

const writeTo = (file, content) => {
  if (!fs.existsSync(file)) {
    process.stdout.write(`Wrote to ${path.resolve(file)}${EOL}`);
    fs.writeFileSync(file, `${content.trim()}${EOL}`);
  }
};

writeTo(
  ".editorconfig",
  `
root = true

[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8
indent_style = space
indent_size = 2
max_line_length = 80

# trailing spaces in markdown indicate word wrap
[*.md]
trim_trailing_spaces = false
`
);

writeTo(
  ".eslintrc.js",
  `
module.exports = {
  root: true,

  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    // Enable if you use JSX
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },

  env: {
    es6: true,
  },

  rules: {
    // add rules...
  },
};
`
);

const run = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const isCommandExists = (cmd) => {
  try {
    run(`which ${cmd}`);
    return true;
  } catch (err) {
    return false;
  }
};

if (isCommandExists("gibo")) {
  writeTo(".gitignore", run("gibo dump Node"));
} else {
  process.stdout.write(
    `WARN: Recommended to install 'gibo' (https://github.com/simonwhitaker/gibo)${EOL}`
  );
}

const parseOptions = () =>
  // eslint-disable-next-line max-statements, max-params
  process.argv.slice(3).reduce((opts, arg, index, args) => {
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

    key = key.replace(/^--/u, "");

    opts[key] = value;
    return opts;
  }, {});
const opts = parseOptions("scope", "owner", "license", "private");

let name = path.basename(process.cwd());
const { scope } = opts;
if (scope) {
  name = `@${scope}/${name}`;
}

const owner = opts.owner || "{{OWNER}}";

module.exports = {
  name,

  version: "0.0.1",

  description: "{{DESCRIPTION}}",

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
    node: ">=12",
    npm: ">=7",
  },

  main: "index.js",

  scripts: {
    test: 'echo "No tests." && exit 1',
  },

  commitlint: {
    extends: ["@commitlint/config-conventional"],
  },
};
