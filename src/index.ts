import express, { NextFunction, Request, Response } from "express";
import { connector } from "swagger-routes-express";
import swaggerUi from "swagger-ui-express";
import { schema, controllers, middleware } from "./makeSchema";

const port = process.env.PORT || 3001;

const onCreateRoute = (method: string, descriptor: any) => {
  const [path, ...handlers] = descriptor
  console.log(method.toUpperCase(), path, handlers.map((item: Function) => item.name))
}

const connect = connector(controllers, schema, {
  onCreateRoute, middleware
});
const app = express();
connect(app);

app.use("/", swaggerUi.serve, swaggerUi.setup(schema))

app.listen(port, () => {
  console.log(`😎 listening http://localhost:${port}`)
})