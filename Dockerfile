FROM node:14

WORKDIR /app

COPY . .

RUN chmod +x ./wait-for-it.sh
RUN npm install -g knex
RUN npm install
