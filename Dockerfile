# Use an official Node.js runtime as the base image
FROM node:18-alpine
RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

# Set the command to run your Next.js application
CMD [ "npm", "run", "dev" ]

