require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//const createPasswordsRouter = require("./routes/passwords");
const createUsersRouter = require("./routes/users");
const createOffersRouter = require("./routes/offers");

const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

const app = express();

const port = process.env.PORT || 3008;

async function main() {
  await client.connect();
  const database = client.db(process.env.MONGO_DB_NAME);
  database.collection("passwords").createIndex({ name: 1 }, { unique: true });

  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use((request, response, next) => {
    console.log(`Request ${request.method} on ${request.url}`);
    next();
  });

  app.use("/api/users", createUsersRouter(database));
  app.use("/api/offers", createOffersRouter(database));

  app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
  });

  app.listen(port, () => {
    console.log(`Ready! App is listening on http://localhost:${port}`);
  });
}

main();
