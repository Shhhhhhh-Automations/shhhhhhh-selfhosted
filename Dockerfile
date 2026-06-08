# Stage 1: Build
FROM oven/bun:1.1 as builder

WORKDIR /app

# Copy root config files
COPY package.json ./

# Copy backend and frontend source
COPY backend ./backend
COPY frontend ./frontend

# Install dependencies and build
# Note: frontend needs npm (already in bun image usually, or use bun)
# We use bun to install everything for speed
RUN bun install

# Build frontend
WORKDIR /app/frontend
RUN bun run build

# Build backend
WORKDIR /app/backend
RUN bun run build

# Prepare final public directory
RUN mkdir -p /app/backend/public && cp -r /app/frontend/build/* /app/backend/public/

# Stage 2: Run
FROM oven/bun:1.1-slim

WORKDIR /app

# Copy bundled backend (which includes frontend in /public)
COPY --from=builder /app/backend/dist/index.js ./server.js
COPY --from=builder /app/backend/public ./public

# Create data directory for SQLite
RUN mkdir -p /data
ENV SHHHHHHH_DATA_DIR=/data
VOLUME /data

# Expose the port
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["bun", "server.js"]
