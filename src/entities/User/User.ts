import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        length: 40,
    })
    public firstName!: string;

    @Column({
        length: 40,
    })
    public lastName!: string;

}