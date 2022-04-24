FROM node:16

COPY package.json .
COPY package-lock.json .
COPY packages/public-api ./packages/public-api

RUN npm ci
RUN cd packages/public-api
RUN npm run prebuild --workspace=packages/public-api && npm run prisma:generate --workspace=packages/public-api && npm run build --workspace=packages/public-api

CMD ["npm", "run", "start", "--workspace=packages/public-api"]

EXPOSE 3000
