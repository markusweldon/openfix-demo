var test = require("node:test");
var assert = require("node:assert/strict");
var { pingHost } = require("../src/exec");

test("pingHost rejects hosts with shell metacharacters", async function () {
  await assert.rejects(pingHost("127.0.0.1; echo injected"), /Invalid host/);
});
