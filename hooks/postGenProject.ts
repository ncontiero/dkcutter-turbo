import type { PackageManager } from "./utils/types";

import path from "node:path";
import { execa } from "execa";
import fs from "fs-extra";
import { logger } from "./utils/logger";
import { updatePackageJson } from "./utils/updatePackageJson";

const CTX = {
  projectSlug: "{{ dkcutter.projectSlug }}",
  pkgManager: "{{ dkcutter.pkgManager }}" as PackageManager,
  automatedDepsUpdater: "{{ dkcutter.automatedDepsUpdater }}",
};

async function getPkgManagerVersion() {
  try {
    const pkg = CTX.pkgManager;
    const { stdout } = await execa(pkg, ["-v"]);
    return `${pkg}@${stdout}`;
  } catch (error) {
    logger.warn("Unable to get version from package manager.", error);
  }
}

function removeFiles(files: string[]) {
  files.forEach(async (file) => await fs.remove(file));
}

async function main() {
  const projectDir = path.resolve(".");

  const pkgVersion = await getPkgManagerVersion();
  if (pkgVersion) {
    logger.success(`Using ${pkgVersion}`);
    await updatePackageJson({
      projectDir,
      modifyKey: { packageManager: pkgVersion },
    });
  } else {
    await updatePackageJson({ projectDir, keys: ["packageManager"] });
  }

  const githubFolder = path.join(projectDir, ".github");
  if (CTX.automatedDepsUpdater === "none") {
    removeFiles([
      path.join(githubFolder, "renovate.json"),
      path.join(githubFolder, "dependabot.yml"),
    ]);
  } else if (CTX.automatedDepsUpdater === "renovate") {
    await fs.remove(path.join(githubFolder, "dependabot.yml"));
  } else if (CTX.automatedDepsUpdater === "dependabot") {
    await fs.remove(path.join(githubFolder, "renovate.json"));
  }
}

main();
