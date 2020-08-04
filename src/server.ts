import express, { Request, Response } from "express";
import {
  userRouter,
  itemRouter,
} from "./routes";

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/items", itemRouter);

export { app };
