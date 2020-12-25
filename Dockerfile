FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm ci --production
EXPOSE 4000
CMD node src/index.js --host=0.0.0.0 --port=80
