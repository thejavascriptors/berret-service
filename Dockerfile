FROM node:slim
WORKDIR /BERRET-SERVICE
COPY . .
RUN npm install --production
EXPOSE 4357
CMD ["node", "server/index.js"]

