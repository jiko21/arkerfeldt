import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma/prisma.service';
import { PostResolver } from './resolver.post';

describe('resolver.post', () => {
  let resolver: PostResolver;
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PostResolver]
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
    service = module.get<PrismaService>(PrismaService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
});
