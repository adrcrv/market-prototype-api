## 🛍️ Market Prototype Api
This is a simple Market Prototype Api Project developed with NodeJS and Typescript.

[![Continuous Integration](https://github.com/adrcrv/market-prototype-api/actions/workflows/main.yml/badge.svg)](https://github.com/adrcrv/market-prototype-api/actions/workflows/main.yml)

## 🛠 Requirements
[Node.JS](https://nodejs.org/en/download/)  
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install)  
[Docker](https://get.docker.com/)  
[Docker Compose](https://docs.docker.com/compose/install/)

## ⚙️ Commands
#### Docker Compose
```bash
# This is the easy way to install, build, migrate and start it
docker-compose up -d
```

#### Test
```bash
yarn test # 100% coverage so far
```

#### Install
```bash
yarn install
```

#### Build
```bash
yarn build
```

#### Database Migrate
```bash
yarn migrate:up
```

#### Start: Development Mode
```bash
yarn dev
```

#### Start: From Build
```bash
yarn start
```

## 🎲 Usage
#### Simple Usage
```bash
http://localhost:6540/:endpoint
```

#### API Collections
```bash
# Clients Collection
/api/clients
/api/clients
/api/clients/:id
/api/clients/:id
/api/clients/:id

# Products Collection
/api/products
/api/products
/api/products/:id
/api/products/:id
/api/products/:id

# Purchases Collection
/api/purchases
/api/purchases
/api/purchases/:id
/api/purchases/:id
/api/purchases/:id
```

#### Postman Collection
Available on project directory
```
market-prototype-api
  └── dev-tools
       └── market-prototype-api.postman_collection.json
```

## Autor
Feito com ❤️. Entre em contato!

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adrcrv/)
