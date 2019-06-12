FROM node:12.2.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install 

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]