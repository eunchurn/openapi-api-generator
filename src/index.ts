import express from "express";
import swaggerUi from "swagger-ui-express";
import { schema } from "./makeSchema";
import { makeApp } from "./connector";

const port = process.env.PORT || 3001;
const { app } = makeApp();

app.use(express.json());

app.use("/", swaggerUi.serve, swaggerUi.setup(schema))

app.listen(port, () => {
  console.log(`😎 listening http://localhost:${port}`)
})
