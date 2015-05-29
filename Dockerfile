FROM node:onbuild

WORKDIR /app

RUN npm install mocha express pusher body-parser

ADD . /app

ENV APPID=""
ENV KEY=""
ENV SECRET=""

EXPOSE 5000

CMD ["node", "server.js"]
