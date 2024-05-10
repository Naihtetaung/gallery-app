# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN yarn build

# Copy the rest of the project files
COPY . .

# Expose the port on which the Next.js application will run
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]