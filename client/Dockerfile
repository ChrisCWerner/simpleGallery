FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /client
WORKDIR /client

RUN npm i -g serve
# COPY package.json package-lock.json ./

# RUN npm i --production

COPY . .

RUN yarn build

CMD ["npm", "start"]
