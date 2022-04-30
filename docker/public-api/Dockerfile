FROM node:16 as BUILD_PUBLIC_API

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY packages/public-api ./packages/public-api

RUN npm ci --workspace=packages/public-api
RUN cd packages/public-api
RUN npm run prebuild --workspace=packages/public-api && npm run prisma:generate --workspace=packages/public-api && npm run build --workspace=packages/public-api

FROM node:16-alpine

WORKDIR /app

COPY --from=BUILD_PUBLIC_API /app/package.json ./package.json

COPY --from=BUILD_PUBLIC_API /app/node_modules ./node_modules

COPY --from=BUILD_PUBLIC_API /app/packages/public-api/node_modules ./packages/public-api/node_modules

COPY --from=BUILD_PUBLIC_API /app/packages/public-api/package.json ./packages/public-api/package.json

COPY --from=BUILD_PUBLIC_API /app/packages/public-api/dist ./packages/public-api/dist

COPY --from=BUILD_PUBLIC_API /app/packages/public-api/prisma ./packages/public-api/prisma

ENTRYPOINT ["npm", "run", "start", "--workspace=packages/public-api"]
EXPOSE 3000
