FROM node:lts-alpine3.10

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]