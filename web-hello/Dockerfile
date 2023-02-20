
# This line specifies the base image for the Docker image.
# The node:alpine image is a lightweight version of the official Node.js image, built on the Alpine Linux distribution.
FROM node:alpine 

# This line sets the working directory inside the container to /app.
# All subsequent commands in the Dockerfile will be executed in this directory.
WORKDIR /app

# This line tells Docker to expose port 3000 on the container. 
# This allows incoming traffic to reach the container on that port.
EXPOSE 3000

#This line copies the package.json and package-lock.json files from the host into the current working directory (./) inside the container. 
# These files describe the dependencies of the Node.js application.
COPY package.json package-lock.json ./

#This line runs the npm install command inside the container, which installs the dependencies listed in the package.json file.
RUN npm install

#This line copies all the remaining files from the host into the current working directory (./) inside the container. 
#This includes the source code and any other assets needed to run the application.
COPY . ./

# This line sets the default command to be executed when the container starts.
# The command ["npm", "start"] runs the npm start command inside the container, which starts the Node.js application.
CMD ["npm", "start"]