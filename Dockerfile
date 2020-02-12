FROM node:current-alpine AS builder
ENV NODE_ENV=production
WORKDIR /client
COPY ./client/package.json ./client/yarn.lock ./
RUN yarn install
COPY ./client .
RUN yarn build

FROM node:current-alpine
WORKDIR /app
COPY ./images/package*.json ./
# COPY ./images/package.json ./images/package-lock.json ./
RUN npm ci --only=production

COPY ./images .
COPY --from=builder /client/build ./public

CMD ["npm", "start"]
