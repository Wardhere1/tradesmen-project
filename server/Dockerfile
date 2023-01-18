FROM node:18-alpine

WORKDIR /server

COPY . ./

RUN npm install

EXPOSE 3001

CMD ["node", "server.js"]
