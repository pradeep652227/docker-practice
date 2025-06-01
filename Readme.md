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
- Create network `docker network create user_project_netw`
- Create volume `docker volume create user_project_vol`
- start postgres
    - docker run --network user_project_netw --name postgres -v user_project_vol:/var/lib/postgresql/data -e POSTGRES_PASSWORD=docker-practice -d -p 5432:5432 postgres
- Build the image `docker build --network=host -t user-project .`
- Start the image `docker run -e DATABASE_URL=postgresql://postgres:docker-practice@postgres:5432/postgres --network user_project_netw -p 3000:3001 user-project`

## Docker Compose Installation
- Clone the repo
- Install Docker, docker-compose
- RUN `docker-compose up`