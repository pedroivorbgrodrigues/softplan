FROM node:latest

WORKDIR /user/client
COPY ./client .
RUN npm install --quiet
#if the host is windows the next line is needed
RUN npm rebuild node-sass --silent
RUN npm run build

WORKDIR /user/server
COPY ./server .
RUN npm install --quiet

EXPOSE 3000
CMD [ "npm", "run", "watch" ]
