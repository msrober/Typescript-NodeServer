FROM node:12-alpine

WORKDIR /var/www
COPY ./Webserver/package*.json ./

RUN npm install

COPY ./Webserver .

CMD ["npm", "run", "start"]

EXPOSE 3010
