#################################################
# STAGE 1: Build
#################################################
ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /workspace

RUN corepack enable

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm pkg delete scripts.prepare
RUN pnpm install --frozen-lockfile

ENV NODE_OPTIONS=--max-old-space-size=8192
ENV NODE_ENV=production

COPY . .

# Use production mode for Angular build while keeping devDependencies installed during install
ARG BUILD_MODE=staging
RUN pnpm build:${BUILD_MODE}
# RUN npx optimize-icons-cli@1.5.1 -o dist/browser -i dist/browser/assets/icons -n credit_card,custom_outline,custom_solid,heroicons_outline,heroicons_solid

#################################################
# STAGE 2: Run
#################################################
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /workspace/dist/browser /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
