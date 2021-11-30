FROM node:14.18.1

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install --production

COPY . .
RUN yarn build

EXPOSE 6540

CMD yarn migrate:up && yarn start
