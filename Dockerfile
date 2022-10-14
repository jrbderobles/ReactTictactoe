FROM node:18.10-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

LABEL maintainer="John de Robles <jrbderobles@gmail.com>"

CMD npm start