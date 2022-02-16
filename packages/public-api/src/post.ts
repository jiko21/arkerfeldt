import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  title: string;

  @Field((type) => String)
  content: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;

  @Field((type) => Boolean)
  isDelete: boolean;

  @Field((type) => String)
  status: string;

  @Field((type) => User)
  author: User;
}
