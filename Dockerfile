FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ----------  Production ----------
FROM node:20-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]