FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

RUN npm install -g knex
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
