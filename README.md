
# Item server - Express TS

This is a production-ready Node.js server built with the Express.js framework. It provides RESTful API endpoints for managing items, users, and authentication. This is the Exress-TS of the Item App - A generic app im building with various technologies including client and server side, using Vue, React, Express, Go and Pyhton.

## Tech Stack

**Server:** Typescript, Node, Express, cookie-parser, cryptr, mongodb, cors


## Run Locally

Clone the project

```bash
  git clone https://github.com/gDenisLit/item-server-ts.git
```

Go to the project directory

```bash
  cd item-server-ts
```

Install dependencies

```bash
  npm install
```

Start the server in dev enviroment

```bash
  npm run dev
```
Start the server in production enviroment

```bash
  npm run prod
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ATLAS_URL`
Connection URI to mongo

`DB_NAME`
Database name

`CRYPTER_KEY`
Base 64 secret key

## API Reference

#### Get all items

```http
  GET /api/item
```

#### Get item

```http
  GET /api/item/${id}
```

#### Add Item

```http
  POST /api/item
```
#### Update Item

```http
  PUT /api/item
```
#### Remove Item
```http
  DELETE /api/item/${id}
```


## Authors

- [@gDenislit](https://www.github.com/gDenislit)

