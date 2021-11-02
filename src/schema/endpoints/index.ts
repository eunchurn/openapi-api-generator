import { OpenAPIV3 } from "openapi-types";
import { securitySchemes } from "./securitySchemes";
import { accessPath, AccessLogs, access } from "./access";

export const paths = {
  ...accessPath,
};

export const schemas = {
  AccessLogs,
}

export const controllers = {
  access
}

export const components: OpenAPIV3.ComponentsObject = {
  schemas,
  securitySchemes,
};