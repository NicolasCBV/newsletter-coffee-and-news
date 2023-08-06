FROM node:alpine AS base

RUN mkdir -p /usr/app/
WORKDIR /usr/app/

RUN apk update

#--------- build stage -----------
FROM base AS builder

COPY package.json .
RUN npm install -g npm@latest
RUN npm install

COPY . .

RUN npm run build
RUN npm prune --omit=dev

#------- release stage -----------
FROM base AS release

COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/dist ./dist

VOLUME ["/usr/app/node_modules"]

EXPOSE 3030
