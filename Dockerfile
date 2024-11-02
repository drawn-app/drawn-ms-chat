# Stage 1: Build the application
FROM node:20.11.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run proto:gen
RUN npx prisma generate

# Stage 2: Run the application
FROM node:20.11.0-alpine AS prod

WORKDIR /app

COPY --from=build /app /app

EXPOSE 8082

CMD ["npm", "run", "dev"]
