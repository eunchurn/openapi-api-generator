import { OpenAPIV3 } from "openapi-types";

export const ParamsSuccess: OpenAPIV3.SchemaObject & { $id: string } = {
  $id: "#/components/schema/ParamsSuccess",
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
