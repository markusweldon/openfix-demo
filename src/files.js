var fs = require("fs");
var path = require("path");

/**
 * Intentionally vulnerable: joins user input onto a base directory
 * without rejecting path traversal sequences.
 */
function readUserFile(userPath) {
  var base = path.resolve(__dirname, "..", "data");
  var target = path.resolve(base, String(userPath));
  if (target !== base && !target.startsWith(base + path.sep)) {
    throw new Error("Path escapes the data directory");
  }
  return fs.readFileSync(target, "utf8");
}

module.exports = { readUserFile };
