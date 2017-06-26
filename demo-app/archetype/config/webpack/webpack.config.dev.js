const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      
      "oss-component": Path.join(repoPackagesDir, "oss-component/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "oss-component"),
      Path.join(repoPackagesDir, "oss-component/node_modules"),
      
    ]
  }
};
