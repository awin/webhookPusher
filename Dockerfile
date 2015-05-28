FROM node:onbuild

WORKDIR /app

ADD . /app

CMD ["node", "server.js"]
