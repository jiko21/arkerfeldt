"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("./prisma/prisma.service");
const resolver_post_1 = require("./resolver.post");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                buildSchemaOptions: { dateScalarMode: 'timestamp' },
                debug: process.env.NODE_ENV === 'development',
                playground: process.env.NODE_ENV === 'development',
            }),
        ],
        providers: [prisma_service_1.PrismaService, resolver_post_1.PostResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map