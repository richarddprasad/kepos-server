import "reflect-metadata";
import { createConnection } from "typeorm";
import { UserEntity } from "./entities";
import express, { Request, Response } from "express";
import {
  PORT,
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} from "./config/constants";
import { userRouter } from "./routes";

createConnection({
  type: "postgres",
  host: PGHOST,
  port: PGPORT ? parseInt(PGPORT) : 5432,
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  entities: [
    UserEntity,
  ],
  synchronize: true,
  logging: false,
}).then(async (connection) => {
  const app = express();
  app.use(express.json());
  app.use("/users", userRouter);

  app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Hi" });
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => console.log(error));
