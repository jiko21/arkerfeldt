FROM node:16

COPY package.json .
COPY package-lock.json .
COPY packages/frontend ./packages/frontend

RUN npm ci
RUN cd packages/frontend
RUN npm run build --workspace=packages/frontend

EXPOSE 4000
