import { OpenAPIV3 } from "openapi-types";

export const BodyRequest: OpenAPIV3.SchemaObject = {
  title: "BodyRequest",
  type: "object",
  properties: {
    id: {
      title: "id",
      type: "number",
    },
    userId: {
      title: "userId",
      type: "number",
    },
    createdAt: {
      title: "createdAt",
      type: "string",
    },
  },
};

export const BodySuccess: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      title: "id",
      type: "number",
    },
    userId: {
      title: "userId",
      type: "number",
    },
    createdAt: {
      title: "createdAt",
      type: "string",
    },
  },
};