# # Base image for Node.js applications
# FROM node:20-alpine AS base

# WORKDIR /app

# # Install dependencies for both client and server first (to leverage caching)
# COPY . ./
# RUN yarn install

# # -------------------------------
# # Step 1: Build Client App
# # -------------------------------
# RUN yarn build

# # -------------------------------
# # Step 2: Production Image
# # -------------------------------
# FROM node:20-alpine AS production

# WORKDIR /app

# ENV NODE_ENV=production

# # Copy only necessary files from the previous stage into production image
# COPY --from=base /app/. ./
# # COPY --from=base /app/node_modules ./node_modules
# EXPOSE 5000

# CMD ["node", "./dist/server/index.js"]

# Stage 1: Build React client
FROM node:20-alpine AS client-build

WORKDIR /app/client

# Copy client package files and install dependencies
COPY client/package.json client/yarn.lock ./
RUN yarn install

# Copy client source files and build the React app
COPY client/ ./
RUN yarn build

# Stage 2: Build Express server
FROM node:20-alpine AS server-build

WORKDIR /app/server

# Copy server package files and install dependencies
COPY server/package.json server/yarn.lock ./
RUN yarn install

# Copy root tsconfig.json and server source files, then build the TypeScript code
COPY tsconfig.json /app/tsconfig.json
COPY server/ ./
RUN yarn build

# Stage 3: Production image
FROM node:20-alpine AS production

# Accept build arguments
ARG BUILD_NUMBER=-11
ARG GIT_COMMIT='local-run'
ARG BUILD_DATE='1970-01-01T00:00:00Z'

# Set environment variables
ENV BUILD_NUMBER=${BUILD_NUMBER}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV BUILD_DATE=${BUILD_DATE}

WORKDIR /app

ENV NODE_ENV=production

# Copy built client files from the client-build stage
COPY --from=client-build /app/client/build ./dist/client

# Copy built server files from the server-build stage
COPY --from=server-build /app/dist ./dist/

# Install production dependencies for the server
COPY package.json yarn.lock ./
WORKDIR /app
RUN yarn install --production

# Expose port 3000 for the application
EXPOSE 3000

# Start the Express server (serving both API and React app)
CMD ["node", "./dist/server/index.js"]