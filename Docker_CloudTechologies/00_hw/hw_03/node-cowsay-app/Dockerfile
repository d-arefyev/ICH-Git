# Use the official Node.js image as a base image
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json (and package-lock.json if present) to the working directory
COPY package.json ./

# Install dependencies specified in package.json
RUN npm install

# Copy the application code to the working directory
COPY app.js ./

# Expose the port the application will run on
EXPOSE 3001

# Define the command to run the application
CMD ["node", "./app.js"]
