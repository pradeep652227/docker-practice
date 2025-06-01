## Manual Installation
- Install Node.JS locally
- Clone the repo
- Install Dependencies (npm install)
- Start the db locally
 - docker run -e POSTGRES_PASSWORD=youpassword -d -p 5432:5432 postgres
 - Go to neon.tech and get one connection string
- change the .env file and update the db credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker Installation
- Clone the repo
- Install Docker
- start postgres
    - docker run -e POSTGRES_PASSWORD=youpassword -d -p 5432:5432 postgres
- Build the image `docker build -t user-project`
- Start the image `docker run -p 3000:3000 user-project`

## Docker Compose Installation
- Clone the repo
- Install Docker, docker-compose
- RUN `docker-compose up`