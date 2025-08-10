#################################################
# STAGE 1: Build
#################################################
ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /workspace
ENV CI=1
RUN corepack enable

FROM base AS deps
COPY pnpm-lock.yaml ./
RUN --mount=type=cache,target=/pnpm/store,id=pnpm-store \
  pnpm fetch

FROM base AS build
WORKDIR /workspace

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

# Optimize icons
RUN npx optimize-icons-cli@1.5.1 -o dist/browser -i dist/browser/icons -n heroicons_outline,heroicons_solid

#################################################
# STAGE 2: Run
#################################################
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /workspace/dist/browser /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
