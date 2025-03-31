import { ncontiero } from "@ncontiero/eslint-config";

const TEMPLATE_GLOB = "template/**/";
const FILES_TO_IGNORE = [
  // Parser error
  "dependabot.yml",
  "ci.yml",
];

function ignoreFiles(files) {
  return files.map((file) => `${TEMPLATE_GLOB}${file}`);
}

export default ncontiero({
  ignores: [...(ignoreFiles(FILES_TO_IGNORE) || [])],
});
