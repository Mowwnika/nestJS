FROM node:24-alpine  
WORKDIR /app  
COPY package*.json ./
COPY . .
RUN npm install
CMD ["npm", "run", "start"]


