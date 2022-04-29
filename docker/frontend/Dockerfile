FROM node:16 as BUILD_FRONTEND

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY packages/frontend ./packages/frontend

RUN npm ci --workspace=packages/frontend
RUN cd packages/frontend
RUN npm run build --workspace=packages/frontend

FROM node:16-alpine

WORKDIR /app


COPY --from=BUILD_FRONTEND /app/node_modules ./node_modules

COPY --from=BUILD_FRONTEND /app/package.json ./package.json

COPY --from=BUILD_FRONTEND /app/packages/frontend/node_modules ./packages/frontend/node_modules

COPY --from=BUILD_FRONTEND /app/packages/frontend/package.json ./packages/frontend/package.json

COPY --from=BUILD_FRONTEND /app/packages/frontend/.next ./packages/frontend/.next

ENTRYPOINT ["npm", "run", "start", "--workspace=packages/frontend"]
EXPOSE 4000
