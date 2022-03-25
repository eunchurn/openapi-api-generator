import { connector } from "swagger-routes-express";
import express from "express";
import { schema, controllers, middleware } from "./makeSchema";
import { onCreateRoute } from "./utils";

export const makeApp = () => {
  const app = express();

  const connect = connector(controllers, schema, {
    onCreateRoute, middleware
  });

  connect(app);

  const router = app._router;

  return { app, router }
}
