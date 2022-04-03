import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Boolean)
  isDelete: boolean;

  @Field(() => String)
  status: string;

  @Field(() => User)
  author: User;
}
