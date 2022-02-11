FROM node:1-alpine as webBuilder
WORKDIR '/app'
COPY package*.json .
RUN npm install 
COPY . .
RUN npm run build:web


FROM nginx 
EXPOSE 80

