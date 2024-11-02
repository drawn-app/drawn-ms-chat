# Stage 1: Build the application
FROM node:20.11.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run proto:gen
RUN npx prisma generate

RUN npm run build

# Stage 2: Run the application
FROM node:20.11.0-alpine AS prod

WORKDIR /app

COPY --from=build /app/build /app
COPY --from=build /app/package*.json /app/
COPY --from=build /app/prisma /app/prisma

RUN npm install --only=production
RUN npm install prisma --save-dev
RUN npx prisma generate

EXPOSE 8082

CMD ["node", "/app/server.js"]
