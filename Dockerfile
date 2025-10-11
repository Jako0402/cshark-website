# Use a lightweight Node.js image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ /app

# Expose the port Vite uses (default is 5173)
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]