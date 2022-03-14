import { OpenAPIV3 } from "openapi-types";

export const BodyRequest: OpenAPIV3.SchemaObject & { $id: string } = {
  $id: "#/components/schema/BodyRequest",
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

export const BodySuccess: OpenAPIV3.SchemaObject & { $id: string } = {
  $id: "#/components/schema/BodySuccess",
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