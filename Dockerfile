FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY src /app/src
EXPOSE 80
CMD ["node", "src/index.js"]
