FROM node:carbon-slim

# Create app directory
WORKDIR /git/api-gateway-1

# Install app dependencies
COPY package.json /git/api-gateway-1/
RUN npm install

# Bundle app source
COPY . /git/api-gateway-1/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]