import { OpenAPIV3 } from "openapi-types";

const accessSchema: OpenAPIV3.PathItemObject & { get: { "x-middleware": string[] } } = {
  get: {
    description: "사용자 접속 로그",
    tags: ["Access"],
    operationId: "access",
    "x-middleware": ["accessMiddleware"],
    parameters: [
      {
        in: "path",
        name: "id",
        schema: {
          type: "string",
        },
        required: true,
        description: "사용자 ID",
        example: "1",
      },
    ],
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AccessLogsSuccess",
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

export const accessPath = { "/access/{id}": accessSchema }