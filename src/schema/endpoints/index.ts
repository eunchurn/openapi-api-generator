import { OpenAPIV3 } from "openapi-types";
import { securitySchemes } from "./securitySchemes";
import { accessPath, AccessLogsSuccess, access, accessMiddleware } from "./access";

export const paths = {
  ...accessPath,
};

export const schemas = {
  AccessLogsSuccess,
}

export const controllers = {
  access
}

export const middleware = {
  accessMiddleware
}

export const components: OpenAPIV3.ComponentsObject = {
  schemas,
  securitySchemes,
};