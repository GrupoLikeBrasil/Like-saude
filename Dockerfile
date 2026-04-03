# -------- Stage 1: build --------
FROM node:20-alpine AS builder
WORKDIR /app

# Dependências
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
RUN \
  if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile; \
  else npm i --no-audit --no-fund; fi

# Código-fonte
COPY . .

# Build Vite
RUN npm run build

# -------- Stage 2: serve estático --------
FROM nginx:1.27-alpine AS runner

# Remover config padrão e adicionar a nossa
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build
COPY --from=builder /app/dist /usr/share/nginx/html

# Permissões (não estritas; nginx roda como nginx)
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

