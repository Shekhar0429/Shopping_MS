# creating container from node image
FROM node:18-alpine  

# creating app directory
WORKDIR /app/customer

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8001

CMD ["npm", "start"]