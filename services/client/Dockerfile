FROM node:16-alpine as webBuilder
WORKDIR '/app'
COPY package*.json ./
RUN npm install && npm install -g expo-cli
COPY . .
RUN npm run build:web

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=webBuilder /app/web-build /usr/share/nginx/html
