FROM ubuntu:20.04
# FROM node:18-alpine
RUN apt-get update
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN mkdir src
# COPY src/ ./src/ -r
COPY src ./src/ 
COPY package.json .
RUN npm install
EXPOSE 8080
# CMD ["npm run" "dev"]

