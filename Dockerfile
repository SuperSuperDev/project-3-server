FROM node:16.13.0-alpine3.14


WORKDIR /usr/app
COPY package*.json ./
ARG CLIENT_URL
ENV CLIENT_URL $CLIENT_URL
# RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy
COPY . .
CMD ["npm", "run", "start"]