import fs from "fs";
import path, { resolve } from "path";

const payload: {
  name: string;
  code: string;
}[] = [];

const files = fs.readdirSync(resolve("components/content/demo"));

files.forEach((file) => {
  const fileName = file.split(".");
  const code = fs.readFileSync(
    resolve("components/content/demo/" + file),
    "utf-8"
  );

  payload.push({
    name: toKebabCase(fileName[0]),
    code: code,
  });
});

fs.writeFileSync(
  path.resolve("./server/api/code/data.json"),
  JSON.stringify(payload, null, 2)
);

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
