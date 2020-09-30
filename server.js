require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const offerRoute = require("./routes/offers");
const app = express();

const port = process.env.PORT || 3008;

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use((request, response, next) => {
    console.log(`Request ${request.method} on ${request.url}`);
    next();
  });

  app.use("/api/user", authRoute);
  app.use("/api/offers", offerRoute);

  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build/index.html"));
  });

  app.listen(port, () => {
    console.log(`Ready! App is listening on http://localhost:${port}`);
  });
}

main();
