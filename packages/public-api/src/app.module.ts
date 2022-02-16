import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma/prisma.service';
import { PostResolver } from "./resolver.post";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
    }),
  ],
  providers: [PrismaService, PostResolver],
})
export class AppModule {}
