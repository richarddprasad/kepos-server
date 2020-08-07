import {
    Query,
    Resolver,
} from 'type-graphql';
import { UserService } from '../../services';
import { User as UserEntity } from './user.entity';

@Resolver()
export class UserResolver {
    @Query(returns => [UserEntity])
    public async users() {
        return await UserService.findAll();
    }
}