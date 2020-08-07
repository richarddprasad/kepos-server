import { getConnection } from "typeorm";
import { UserEntity } from "../../entities";

export class UserService {
    public static async findAll() {
        const users = await getConnection().getRepository(UserEntity).find();
        return users;
    }
}