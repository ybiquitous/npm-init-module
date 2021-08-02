const { execSync } = require("child_process");
const path = require("path");
const { EOL } = require("os");

const run = (cmd) => {
  process.stdout.write(`> ${cmd}${EOL}`);
  execSync(cmd, { stdio: "inherit" });
};

const chdir = (dir, fn) => {
  const saved = process.cwd();
  try {
    process.chdir(dir);
    fn(dir);
  } finally {
    process.chdir(saved);
  }
};

run("rm -rf tmp");
run("mkdir -p tmp");

chdir("tmp", () => {
  const initModule = path.resolve("..", "index.js");
  const initCmd = `npm init --yes --init-module="${initModule}"`;
  [initCmd, `${initCmd} --scope=foo --owner=bar --license=GPL --private=true`].forEach((cmd) => {
    run(cmd);
    run("rm -f package.json");
  });
});
