# https://www.dpoindexter.com/garden/using-docker-for-react-storybook/
FROM node:16.3.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]

