# Use Node.js 18.17.1 as the base image
FROM node:18.18.0

WORKDIR /app

COPY package.json package-lock.json ./
 
# Install dependencies
RUN npm  install

# Copy the rest of your application code
COPY . .

# Build your Next.js app
RUN npm run build

EXPOSE 3000

EXPOSE 80

EXPOSE 8080

# Start your app (in production mode)
CMD ["npm", "start"]
