import { OpenAPIV3 } from "openapi-types";

export const QueryRequest: OpenAPIV3.ParameterObject[] = [
  {
    in: "query",
    name: "id",
    schema: {
      type: "string",
    },
    required: true,
    description: "ID",
    example: "1",
  },
  {
    in: "query",
    name: "userId",
    schema: {
      type: "string",
    },
    required: true,
    description: "User ID",
    example: "1",
  },
];