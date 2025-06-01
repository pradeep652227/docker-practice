FROM node:20-alpine

WORKDIR /app

# Install dependencies early to leverage Docker layer caching
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

# (Optional for testing only) Environment variable
ENV DATABASE_URL="postgresql://postgres:docker-practice@localhost:5432/postgres"

RUN npx prisma generate
RUN npx prisma migrate deploy 

# Build the app
RUN npm run build

EXPOSE 3001

# Start the app
CMD ["npm", "start"]
