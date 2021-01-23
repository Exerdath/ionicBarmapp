FROM node:latest

RUN mkdir -p /barman/src

WORKDIR /barman/src

COPY package.json .

RUN npm install -g cordova ionic
RUN npm install

COPY . .

EXPOSE 8100

CMD ["ionic","serve"]