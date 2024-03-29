import 'express-async-errors'
import cors from "cors";
// import { errors } from "celebrate";
import express from "express";

import { ongRouter } from "./modules/ongs/OngModule";
import { errorMiddleware } from './modules/shared/middlewares/error'

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", ongRouter.router);
// app.use(errors());
app.use(errorMiddleware);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
