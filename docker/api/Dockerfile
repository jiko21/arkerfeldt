FROM node:16 as BUILD_API

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY packages/api ./packages/api

RUN npm ci --workspace=packages/api
RUN npm run clean --workspace=packages/api && npm run prisma:generate --workspace=packages/api && npm run build --workspace=packages/api

FROM node:16-alpine

WORKDIR /app

COPY --from=BUILD_API /app/node_modules ./node_modules

COPY --from=BUILD_API /app/package.json ./package.json

COPY --from=BUILD_API /app/packages/api/node_modules ./packages/api/node_modules

COPY --from=BUILD_API /app/packages/api/package.json ./packages/api/package.json

COPY --from=BUILD_API /app/packages/api/dist ./packages/api/dist

COPY --from=BUILD_API /app/packages/api/prisma ./packages/api/prisma

ENTRYPOINT ["npm", "run", "start", "--workspace=packages/api"]
EXPOSE 5000
