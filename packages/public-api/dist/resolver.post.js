"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const post_1 = require("./post");
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("./prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PostResolver = class PostResolver {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    author(post) {
        return this.prismaService.post
            .findUnique({
            where: {
                id: post.id,
            },
        })
            .author();
    }
    postById(id) {
        return this.prismaService.post.findFirst({
            where: {
                id,
                status: 'PUBLISHED',
            },
        });
    }
    feed() {
        return this.prismaService.post.findMany({
            where: {
                status: 'PUBLISHED',
                isDelete: false,
            },
        });
    }
};
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.Post]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "author", null);
__decorate([
    (0, graphql_1.Query)((returns) => post_1.Post, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "postById", null);
__decorate([
    (0, graphql_1.Query)((returns) => [post_1.Post], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "feed", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)(post_1.Post),
    __param(0, (0, common_1.Inject)(prisma_service_1.PrismaService)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=resolver.post.js.map