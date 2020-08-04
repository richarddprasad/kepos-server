import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {
    ObjectType,
    Field,
    ID,
} from 'type-graphql'
import {
    MAX_FIRST_NAME_LENGTH,
    MAX_LAST_NAME_LENGTH,
} from '../../config/constants';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    public id!: number;

    @Column({
        length: MAX_FIRST_NAME_LENGTH,
    })
    @Field()
    public firstName!: string;

    @Column({
        length: MAX_LAST_NAME_LENGTH,
    })
    @Field()
    public lastName!: string;

}