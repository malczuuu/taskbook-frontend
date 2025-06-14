FROM node:24.1.0-slim AS builder

WORKDIR /builder

COPY . ./
RUN npm install && npm run build


FROM nginx:1.28.0-alpine

WORKDIR /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /builder/dist/taskbook-frontend/* ./
