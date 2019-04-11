FROM docker.io/node:10.15-alpine
MAINTAINER twy

ADD ./ /usr/src/app

WORKDIR /usr/src/app

RUN npm install \
    && npm run build \
    && npm i pm2 -g \
    && mkdir logs

VOLUME [ "/usr/src/app/logs" ]

EXPOSE 3001 9615
CMD ["npm","run","pro_app"]
    