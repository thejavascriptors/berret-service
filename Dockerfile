FROM node:slim
WORKDIR /BERRET-SERVICE
COPY . .
RUN npm install --production
RUN npm run db:seed
CMD ["node", "server/index.js"]

