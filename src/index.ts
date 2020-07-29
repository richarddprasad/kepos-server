import "reflect-metadata";
import { createConnection } from "typeorm";
import { UserEntity } from "./entities";
import { app } from "./server";
import {
  PORT,
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} from "./config/constants";

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
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => console.log(error));
