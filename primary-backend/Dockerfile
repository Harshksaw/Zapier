FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and TypeScript
RUN npm install
RUN npm install -g typescript

# Copy source code
COPY . .

# Build TypeScript code
RUN npm run build

# Set environment variables
ENV PORT=3002
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the service
CMD ["npm", "run", "dev"]