# Multi-stage Dockerfile for Next.js (App Router) + pnpm
# Produces a small runtime image using Next.js standalone output

FROM node:20-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@10.8.1 --activate

# 1) Dependencies layer (faster caching)
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2) Build layer
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure Next.js outputs standalone server for smaller runtime image
RUN pnpm build

# 3) Runtime layer
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone output and public assets
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Expose the Next.js port
EXPOSE 80

# Run as non-root
USER nextjs

# Start Next.js server
CMD ["node", "server.js"]


