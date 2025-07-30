const fs = require("fs");

module.exports = async function updateVersion({ nextRelease }) {
  const pkg = JSON.parse(fs.readFileSync("package.json"));
  pkg.version = nextRelease.version;
  fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
};
