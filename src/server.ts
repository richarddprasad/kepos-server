import express, { Request, Response } from "express";
import { userRouter } from "./routes";

export const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hi" });
});
