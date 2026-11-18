var { execFile } = require("child_process");

/**
 * Pings a host. execFile passes the host as a single argument, with no shell to interpret it.
 */
function pingHost(host) {
  return new Promise(function (resolve, reject) {
    if (!/^[A-Za-z0-9.:-]+$/.test(String(host))) {
      return reject(new Error("Invalid host"));
    }
    execFile("ping", ["-c", "1", String(host)], function (err, stdout, stderr) {
      if (err) return reject(err);
      resolve(stdout || stderr);
    });
  });
}

module.exports = { pingHost };
