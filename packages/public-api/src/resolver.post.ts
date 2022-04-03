import { Post } from './post';
import { Args, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';
import { Inject } from '@nestjs/common';
import { User } from './user';

@Resolver(Post)
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  author(@Root() post: Post): Promise<User | null> {
    return this.prismaService.post
      .findUnique({
        where: {
          id: post.id,
        },
      })
      .author();
  }

  @Query(() => Post, { nullable: true })
  postById(@Args('id') id: number) {
    return this.prismaService.post.findFirst({
      where: {
        id,
        status: 'PUBLISHED',
      },
    });
  }

  @Query(() => [Post], { nullable: true })
  feed() {
    return this.prismaService.post.findMany({
      where: {
        status: 'PUBLISHED',
        isDelete: false,
      },
    });
  }
}
