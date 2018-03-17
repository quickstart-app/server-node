FROM node:8.9.4-alpine

RUN adduser -D -H -S -s /bin/false app

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64 /usr/local/bin/dumb-init

RUN chmod +x /usr/local/bin/dumb-init

ENV MONGODB_URI mongodb://192.168.99.100/unity
ENV PORT 3000
ENV REDIS_PORT 32768
ENV REDIS_HOST 192.168.99.100
ENV REDIS_PASSWORD pwd
ENV SEQUELIZEDBNAME dbname
ENV SEQUELIZEDBUSER user
ENV SEQUELIZEDBPASSWORD password
ENV SEQUELIZEDBHOST 192.168.99.100
ENV NODE_ENV production

WORKDIR /opt/app

COPY package*.json ./

RUN npm install && npm install --only=dev && npm cache clean --force

COPY . .

RUN npm run build

RUN npm run heroku-postbuild

EXPOSE 3000

USER app

CMD [ "dumb-init", "npm", "start" ]
