# creating container from node image
FROM node:18-alpine    

# creating app directory
WORKDIR /app/products

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8002

CMD ["npm", "start"]