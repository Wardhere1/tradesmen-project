FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent 

COPY . ./

CMD ["npm", "start"]
