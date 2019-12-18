FROM node:12.13.0 as builder

WORKDIR /builder

COPY . ./
RUN npm install && npm run build


FROM nginx:1.17.5

WORKDIR /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /builder/dist/taskbook-frontend/* ./
