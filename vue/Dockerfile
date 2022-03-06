FROM node:16.13.2-alpine

WORKDIR /vue

RUN apk update && apk upgrade

COPY package.json package-lock.json ./
RUN yarn install

EXPOSE 3000

COPY . ./
