FROM node:16 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
FROM base as test
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
RUN npm run test

FROM base as prod
RUN npm install --production
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]