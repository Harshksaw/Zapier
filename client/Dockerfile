# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies (no need to copy pnpm-lock.yaml if it doesn't exist)
RUN npm install -g pnpm
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Production image using nginx
FROM nginx:alpine AS production

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Create a simple nginx config
RUN echo 'server { \
  listen 3004; \
  location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html; \
  } \
}' > /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 3004

# Start nginx
CMD ["nginx", "-g", "daemon off;"]