FROM node:12.2.0-alpine
WORKDIR /app

# COPY package.json /app/package.json

COPY package*.json ./


RUN yarn

COPY . .

EXPOSE 80

CMD ["yarn", "start"]
