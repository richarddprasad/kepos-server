import "reflect-metadata";
import { createConnection } from "typeorm";
import { UserEntity } from "./entities";
import {
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} from "./config/constants";

test("Dummy test", () => {
  expect(1 + 2).toBe(3);
});
