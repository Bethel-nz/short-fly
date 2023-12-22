

# ShortFly URL Shortener

ShortFly is a simple URL shortening service powered by Node.js and MongoDB.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bethel-nz/short-fly.git
   ```

2. Navigate to the project folder:

   ```bash
   cd short-fly
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Configuration

Create a `.env` file in the root of the project and add the following:

```env
MONGO_DB=your_mongo_db_connection_string
```

Replace `your_mongo_db_connection_string` with your actual MongoDB connection string.

## Run the App

```bash
yarn start
```

This will start the server on [http://localhost:3000](http://localhost:3000).

## Routes

### 1. Shorten a URL

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url":"https://www.example.com"}' http://localhost:3000/api/shorten-url
```

**Parameters:**

- `url`: The URL to be shortened.

### 2. Redirect to Original URL

```bash
curl http://localhost:3000/api/get-url/short-url
```

Replace `short-url` with the actual short URL you received after shortening.

**Parameters:**

- None

---

Feel free to customize this README based on the specifics of your application. Provide additional details as needed, such as how to run tests, configure environment variables, or any other relevant information for developers using your app.
