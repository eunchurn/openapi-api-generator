import { OpenAPIV3 } from "openapi-types";
import { securitySchemes } from "./securitySchemes";
import { paramsPath, ParamsSuccess, params, paramsMiddleware } from "./parameter";
import { bodyPath, BodyRequest, BodySuccess, body, bodyMiddleware } from "./body";
import { queryPath, QuerySuccess, query, queryMiddleware} from "./query";

export const paths = {
  ...paramsPath,
  ...bodyPath,
  ...queryPath,
};

export const schemas = {
  ParamsSuccess,
  BodyRequest,
  BodySuccess,
  QuerySuccess,
}

export const controllers = {
  params,
  body,
  query,
}

export const middleware = {
  paramsMiddleware,
  bodyMiddleware,
  queryMiddleware
}

export const components: OpenAPIV3.ComponentsObject = {
  schemas,
  securitySchemes,
};