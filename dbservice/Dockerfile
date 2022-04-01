# TODO: set fixed node version
FROM node 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000
CMD [ "npm", "start" ]
