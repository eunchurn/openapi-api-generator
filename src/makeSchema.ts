import { OpenAPIV3 } from "openapi-types";
import { info, servers, paths, components, controllers, middleware } from "./schema";
import fs from "fs";
import path from "path";
import { dump } from "js-yaml";

export { controllers, middleware }

export const schema: OpenAPIV3.Document = {
  openapi: "3.0.1",
  info,
  servers,
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths,
  components,
};

const yml = dump(schema);

fs.mkdir(path.join(__dirname, "./generated"), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFileSync(
    path.join(__dirname, "./generated/api.json"),
    JSON.stringify(schema, null, 2),
  );
  fs.writeFileSync(path.join(__dirname, "./generated/api.yml"), yml);

})
