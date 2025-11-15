# creating container from node image
FROM node:18-alpine    

# creating app directory
WORKDIR /app/shopping

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8003

CMD ["npm", "start"]