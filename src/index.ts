import express from "express";
import { connector } from "swagger-routes-express";
import swaggerUi from "swagger-ui-express";
import { schema, controllers } from "./makeSchema";

const port = process.env.PORT || 3001;

const connect = connector(controllers, schema);
const app = express();
connect(app);

app.use("/", swaggerUi.serve, swaggerUi.setup(schema))

app.listen(port, () => {
  console.log(`😎 listening http://localhost:${port}`)
})