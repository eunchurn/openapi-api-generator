import { OpenAPIV3 } from "openapi-types";
import { securitySchemes } from "./securitySchemes";
import * as parameter from "./parameter";
import * as body from "./body";
import * as query from "./query";

export const paths = {
  ...parameter.path,
  ...body.path,
  ...query.path,
};

export const schemas = {
  ...parameter.schemas,
  ...body.schemas,
  ...query.schemas,
}

export const controllers = {
  ...parameter.controllers,
  ...body.controllers,
  ...query.controllers,
}

export const middleware = {
  ...parameter.middleware,
  ...body.middleware,
  ...query.middleware,
}

export const components: OpenAPIV3.ComponentsObject = {
  schemas,
  securitySchemes,
};