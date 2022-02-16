import { Post } from './post';
import { PrismaService } from './prisma/prisma.service';
import { User } from './user';
export declare class PostResolver {
    private prismaService;
    constructor(prismaService: PrismaService);
    author(post: Post): Promise<User | null>;
    postById(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    feed(): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
}
