FROM node:18.14.2
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . /api
EXPOSE 3000
CMD [ "npm", "start" ]