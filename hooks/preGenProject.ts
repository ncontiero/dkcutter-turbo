// Removing cmd `run` when the package manager is `yarn` or `pnpm`.
// {% if dkcutter.pkgManager in ["pnpm", "yarn"] %}
// {{ dkcutter.update("_lintScript", dkcutter._lintScript|replace("run ", "")) }}
// {{ dkcutter.update("_preCommit", dkcutter._preCommit|replace("run ", "")) }}
// {{ dkcutter.update("_commitMsg", dkcutter._commitMsg|replace("run ", "")) }}
// {% endif %}
