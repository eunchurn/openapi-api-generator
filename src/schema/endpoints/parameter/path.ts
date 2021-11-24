import { OpenAPIV3 } from "openapi-types";

const paramsSchema: OpenAPIV3.PathItemObject & { get?: { "x-middleware": string[] } } = {
  get: {
    description: "Path parameters",
    tags: ["Params"],
    operationId: "params",
    "x-middleware": ["paramsMiddleware"],
    parameters: [
      {
        in: "path",
        name: "id",
        schema: {
          type: "string",
        },
        required: true,
        description: "ID",
        example: "1",
      },
    ],
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ParamsSuccess",
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

export const path = { "/params/{id}": paramsSchema }