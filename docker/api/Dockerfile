FROM node:16

COPY package.json .
COPY package-lock.json .
COPY packages/api ./packages/api

RUN npm ci
RUN npm run clean --workspace=packages/api && npm run prisma:generate --workspace=packages/api && npm run build --workspace=packages/api

EXPOSE 5000
