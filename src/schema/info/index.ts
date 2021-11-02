import fs from "fs";
import path from "path";
import { OpenAPIV3 } from "openapi-types";

const header = fs.readFileSync(path.join(__dirname, "./header.md")).toString();

export const info: OpenAPIV3.Document["info"] = {
  title: "Bolierplating Swagger REST API Specification",
  version: `0.0.1-oas3`,
  description: header,
};
