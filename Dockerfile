FROM node:latest

WORKDIR /app

RUN npm install express pusher body-parser mocha blanket

ADD . /app

ENV APPID=""
ENV KEY=""
ENV SECRET=""

EXPOSE 5000

CMD ["node", "server.js"]
