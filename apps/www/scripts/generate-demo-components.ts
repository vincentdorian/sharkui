import fs from "fs";
import path, { resolve } from "path";

const files = fs.readdirSync(resolve("components/content/demo"));

files.forEach((file) => {
  const fileName = file.split(".");
  const code = fs.readFileSync(
    resolve("components/content/demo/" + file),
    "utf-8"
  );

  fs.writeFileSync(
    path.resolve("./content/code/" + toKebabCase(fileName[0]) + ".md"),
    "```vue\n" + code + "```"
  );
});

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
