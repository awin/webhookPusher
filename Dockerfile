FROM node:onbuild

WORKDIR /app

ADD . /app

ENV APPID=""
ENV KEY=""
ENV SECRET=""

EXPOSE 5000

CMD ["node", "server.js"]
