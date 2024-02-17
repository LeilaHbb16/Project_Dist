FROM node:18-alpine3.18 AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install 

COPY . .

