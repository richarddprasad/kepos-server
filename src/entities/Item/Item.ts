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
    MAX_ITEM_NAME_LENGTH,
    ITEM_CATEGORY
} from '../../config/constants';

@Entity()
@ObjectType()
export class Item {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    public id!: number;

    @Column({
        length: MAX_ITEM_NAME_LENGTH,
    })
    @Field()
    public name!: string;

    @Column()
    @Field()
    public category!: ITEM_CATEGORY;
}