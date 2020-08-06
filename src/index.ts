import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import {
  UserEntity,
  ItemEntity,
} from "./entities";
import { app } from "./server";
import {
  PORT,
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} from "./config/constants";

// This import and function will be removed later
import { GENDER } from "./config/constants";
async function insertDummyUsers(connection: Connection) {
  const u1 = new UserEntity();
  u1.email = "homer@fox.com";
  u1.firstName = "Homer";
  u1.lastName = "Simpson";
  u1.displayName = "Max Power";
  u1.gender = GENDER.MALE;

  let userRepo = connection.getRepository(UserEntity);
  await userRepo.clear();

  try {
    await userRepo.save(u1);

    let allUsers = await userRepo.find();
    console.log("Users:", allUsers);
  } catch (err) {
    console.log('DB ERR', err);
  }
}

createConnection({
  type: "postgres",
  host: PGHOST,
  port: PGPORT ? parseInt(PGPORT) : 5432,
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  entities: [
    UserEntity,
    ItemEntity,
  ],
  synchronize: true,
  logging: false,
}).then(async (connection) => {
  insertDummyUsers(connection);

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((error) => console.log(error));
