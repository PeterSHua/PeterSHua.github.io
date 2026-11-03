import { readFileSync, writeFileSync } from "node:fs";
import { marked } from "marked";

const template = readFileSync("template.html", "utf8");
const content = marked.parse(readFileSync("index.md", "utf8"));

writeFileSync("index.html", template.replace("{{content}}", () => content));
