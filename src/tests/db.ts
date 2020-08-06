import "reflect-metadata";
import { createConnection } from "typeorm";
import {
  UserEntity,
  ItemEntity,
} from "../entities";
import {
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} from "../config/constants";

export const connectToDb = async function() {
    const conn = await createConnection({
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
        console.log('TEST DB CONNECTED');
        return connection;
      }).catch((error) => console.log(error));
}
