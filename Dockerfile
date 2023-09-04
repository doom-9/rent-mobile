# NodeJS Version 16
FROM node:20-slim AS builder

# Copy Dir
COPY . ./app

# Work to Dir
WORKDIR /app

# Install Node Package
RUN yarn install --frozen-lockfile && \
    yarn build

FROM nginx:alpine

# 复制Nginx配置文件到容器中，如果有需要自定义配置可以修改该文件
COPY nginx.conf /etc/nginx/nginx.conf
# 复制构建好的前端项目到Nginx的默认站点目录
COPY --from=builder /app/dist /usr/share/nginx/html
