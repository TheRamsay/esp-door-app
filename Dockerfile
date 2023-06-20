FROM node:18-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml .
RUN pnpm fetch --dev

ADD . ./
RUN pnpm install --offline --dev

RUN pnpm run build

CMD ["pnpm", "dev", "--host"]