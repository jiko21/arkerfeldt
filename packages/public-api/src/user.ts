import 'reflect-metadata';
import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from './post';

@ObjectType()
export class User {
  @Field(() => String)
  displayName: string;

  @Field(() => String)
  photoUrl: string;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;
}
