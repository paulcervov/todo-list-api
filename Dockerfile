FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]
