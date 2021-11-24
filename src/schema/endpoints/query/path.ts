import { OpenAPIV3 } from "openapi-types";
import { QueryRequest } from "./QueryRequest";

const querySchema: OpenAPIV3.PathItemObject & { post?: { "x-middleware": string[] } } = {
  post: {
    description: "Path parameters",
    tags: ["Query"],
    operationId: "query",
    "x-middleware": ["queryMiddleware"],
    parameters: QueryRequest,
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/QuerySuccess",
            },
            example: {
              id: 1,
              schema: "development",
              apiVersion: "0.0.1",
              createdAt: "202...",
            },
          },
        },
      },
    },
  },
};

export const path = { "/query": querySchema }