import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "./prisma/prisma.service";
import { PostResolver } from "./resolver.post";
import { mockDeep } from "jest-mock-extended";
import { AppModule } from "./app.module";


describe("resolver.post", () => {
  let resolver: PostResolver;
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    resolver = module.get<PostResolver>(PostResolver);
    service = module.get<PrismaService>(PrismaService);
  });

  test("should be defined", () => {
    expect(service).toBeDefined();
  });

  test("postById query should be find one item with published item by id", async () => {
    await resolver.postById(1);
    expect(service.post.findFirst).toBeCalledWith({
      where: {
        status: "PUBLISHED",
        id: 1,
      }
    });
  });

  test("feed query should be find many with published item", async () => {
    await resolver.feed();
    expect(service.post.findMany).toBeCalledWith({
      where: {
        status: "PUBLISHED",
        isDelete: false
      }
    });
  });
});
