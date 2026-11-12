# openfix-demo

**Do not deploy.** This is an intentionally vulnerable Node app used to demonstrate [OpenFix](https://github.com/markusweldon/openfix). It contains deliberate vulnerabilities (path traversal, command injection, eval, SQL injection, XSS, unsafe `vm`, weak crypto, prototype pollution and a fake hardcoded token) and outdated dependencies.

The open draft pull requests were created by OpenFix from two scanner reports in `findings/`:

- **Snyk Code**: command injection in `/ping` (`src/server.js:43`)
- **Semgrep**: path traversal in `readUserFile` (`src/files.js:11`)

Each PR includes the patch, a new regression test, and a table showing the rescan, tests and regression test passed. The model's tool calls are replayed from `demo/snyk-and-semgrep.script.yaml`, so anyone can rerun this without an API key:

```bash
pip install "openfix[all] @ git+https://github.com/markusweldon/openfix"
openfix fix findings/snyk-code.sarif findings/semgrep.sarif \
  --only javascript/CommandInjection,path-traversal-path-join-var \
  --model scripted:demo/snyk-and-semgrep.script.yaml --sandbox local --open-prs
```

Snyk rescans need `snyk auth` (or `SNYK_TOKEN`), and `--open-prs` needs `GITHUB_TOKEN`. The PRs are examples only, so they won't be merged.
