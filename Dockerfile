FROM node:20
RUN mkdir /home/node/app && chown node:node /home/node/app
WORKDIR  /home/node/app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm install
COPY --chown=node:node . .