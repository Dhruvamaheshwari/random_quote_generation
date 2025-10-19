# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /pro
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Vite preview (no Nginx)
FROM node:20-alpine

WORKDIR /pro
COPY --from=build /pro/dist ./dist
COPY package*.json ./
RUN npm install --only=production

EXPOSE 4173
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
