FROM node:23-slim

RUN apt-get update && apt-get upgrade -y && apt-get install yarn -y && rm -rf /var/lib/lists/*

WORKDIR /front

COPY package.json ./

RUN yarn install --non-interactive
RUN yarn cache clean

COPY . .

CMD ["yarn", "dev"]
