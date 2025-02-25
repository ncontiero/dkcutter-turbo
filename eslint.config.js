import { dkshs } from "@dkshs/eslint-config";

const TEMPLATE_GLOB = "template/**/";
const FILES_TO_IGNORE = [
  // Parser error
  "dependabot.yml",
  "ci.yml",
];

function ignoreFiles(files) {
  return files.map((file) => `${TEMPLATE_GLOB}${file}`);
}

export default dkshs({ ignores: [...(ignoreFiles(FILES_TO_IGNORE) || [])] });
