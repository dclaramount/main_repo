FROM node:latest

USER node

WORKDIR /usr/src/app/

ADD --chown=node:node package.json /usr/src/app

RUN npm install

ADD --chown=node:node . /usr/src/app/

RUN NODE_ENV=production npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"]