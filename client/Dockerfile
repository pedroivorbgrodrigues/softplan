FROM node:latest

RUN mkdir -p /usr/client
WORKDIR /usr/client
COPY package.json /usr/client
RUN npm install
COPY . /usr/client
EXPOSE 4200
CMD ["npm", "start"]
