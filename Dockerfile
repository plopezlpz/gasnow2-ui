FROM node:14-alpine AS builder

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:14-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app ./
CMD ["serve", "-l", "3000", "-s", "build"]