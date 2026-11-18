var test = require("node:test");
var assert = require("node:assert/strict");
var files = require("../src/files");

test("readUserFile rejects paths outside the data directory", function () {
  assert.throws(function () {
    files.readUserFile("../package.json");
  }, /escapes the data directory/);
});
