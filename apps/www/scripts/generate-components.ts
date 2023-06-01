import fs from "fs";
import path from "path";

import { components } from "../config/components";

const payload = components
  .map((component) => {
    return {
      id: component.id,
      name: component.name,
      description: component.description,
      files: component.files.map((file) => {
        return {
          name: file.split(/[/]+/).pop(),
          content: fs.readFileSync(file, "utf-8"),
        };
      }),
    };
  })
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

fs.writeFileSync(
  path.resolve("./server/api/components.json"),
  JSON.stringify(payload, null, 2),
);
