import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './post';

@ObjectType()
export class User {
  @Field((type) => String)
  displayName: string;

  @Field((type) => String)
  photoUrl: string;

  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null;
}
