FROM node:21 AS build

WORKDIR /node
COPY package*.json .
RUN npm ci

COPY next* .
COPY vitest* .
COPY tsconfig*.json .
COPY public public
COPY src src
COPY .env.build .env

RUN npm run build

FROM node:21 AS runner

WORKDIR /web
COPY --from=build /node/package*.json .
COPY --from=build /node/node_modules node_modules
COPY --from=build /node/.next .next
COPY --from=build /node/build build
COPY --from=build /node/dist dist
RUN touch .env
EXPOSE 3000

CMD npm run serve
