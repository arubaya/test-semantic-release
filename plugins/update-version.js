const fs = require("fs");

module.exports = {
  prepare: async (pluginConfig, context) => {
    const { nextRelease, logger } = context;

    if (!nextRelease || !nextRelease.version) {
      logger.log("No nextRelease.version found, skip package.json update");
      return;
    }

    const pkgPath = "./package.json";
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    pkg.version = nextRelease.version;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

    logger.log(`✅ package.json version updated to ${nextRelease.version}`);
  },
};
