FROM node:latest

RUN mkdir -p /usr/server
WORKDIR /usr/server
COPY package.json /usr/server
RUN npm install
COPY . /usr/server
EXPOSE 3000
CMD ["npm", "start"]
