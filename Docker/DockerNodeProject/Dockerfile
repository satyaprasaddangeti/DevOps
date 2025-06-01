# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY configs .
RUN npm install

# Copy the application code
#COPY ./server.js .

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]

