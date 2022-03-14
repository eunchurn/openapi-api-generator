import { OpenAPIV3 } from "openapi-types";
import { info, servers, paths, components, controllers, middleware } from "./schema";
import fs from "fs";
import path from "path";
import { dump } from "js-yaml";
import { cloneDeepWith } from "lodash";

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

const amendedSchema = omitDeep(schema, ["$id"]);

const yml = dump(amendedSchema);


fs.mkdir(path.join(__dirname, "./generated"), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFileSync(
    path.join(__dirname, "./generated/api.json"),
    JSON.stringify(schema, null, 2),
  );
  fs.writeFileSync(path.join(__dirname, "./generated/api.yml"), yml);

})

function omitDeep(collection: object, excludeKeys: string[]) {
  function omitFn(value: any) {
    if (value && typeof value === "object") {
      excludeKeys.forEach((key) => {
        delete value[key];
      });
    }
  }

  return cloneDeepWith(collection, omitFn);
}