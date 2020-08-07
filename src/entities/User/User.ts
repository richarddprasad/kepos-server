// TODO: Make email field unique

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
import {
  ObjectType,
  Field,
  ID,
} from "type-graphql";
import {
  GENDER,
  MAX_EMAIL_LENGTH,
  MAX_FIRST_NAME_LENGTH,
  MAX_LAST_NAME_LENGTH,
  MAX_DISPLAY_NAME_LENGTH,
} from "../../config/constants";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  public id!: number;

  @Column({
    length: MAX_EMAIL_LENGTH,
  })
  @Field()
  public email!: string;

  @Column({
    length: MAX_FIRST_NAME_LENGTH,
    nullable: true,
  })
  @Field({
    nullable: true,
  })
  public firstName!: string;

  @Column({
    length: MAX_LAST_NAME_LENGTH,
    nullable: true,
  })
  @Field({
    nullable: true,
  })
  public lastName!: string;

  @Column({
    length: MAX_DISPLAY_NAME_LENGTH,
  })
  @Field()
  public displayName!: string;

  @Column({
    nullable: true,
  })
  @Field({
    nullable: true,
  })
  public dateOfBirth!: Date;

  @Column({
    nullable: true,
  })
  @Field({
    nullable: true,
  })
  public gender!: GENDER;
}
