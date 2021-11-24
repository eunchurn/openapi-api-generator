import { OpenAPIV3 } from "openapi-types";

const bodySchema: OpenAPIV3.PathItemObject & { post: { "x-middleware"?: string[] } } = {
  post: {
    description: "Body",
    tags: ["Body"],
    operationId: "body",
    "x-middleware": ["bodyMiddleware"],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#components/schemas/BodyRequest",
          }
        }
      }
    },
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/BodySuccess",
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

export const path = { "/body": bodySchema }