FROM node:latest

USER node

WORKDIR /usr/src/app/

# Accept build arguments
ARG BUILD_NUMBER
ARG GIT_COMMIT
ARG BUILD_DATE

# Set environment variables
ENV BUILD_NUMBER=${BUILD_NUMBER}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV BUILD_DATE=${BUILD_DATE}

ADD --chown=node:node package.json /usr/src/app

RUN npm install

ADD --chown=node:node . /usr/src/app/

RUN NODE_ENV=production npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"]