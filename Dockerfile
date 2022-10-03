FROM node:16-alpine AS deps
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]
