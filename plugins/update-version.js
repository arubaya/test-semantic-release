const fs = require("fs");

module.exports = {
  // ini adalah `prepare` plugin step
  prepare: async ({ nextRelease, logger }) => {
    const pkgPath = "./package.json";
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    pkg.version = nextRelease.version;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

    logger.log(`Updated package.json version to ${nextRelease.version}`);
  },
};
