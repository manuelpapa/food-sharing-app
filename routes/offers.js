const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

const { getOffers, getOffer, createOffer } = require("../lib/offers");

const router = express.Router();
router.use(bodyParser.json());

function createOffersRouter(database) {
  router.get("/test", (request, response) => {
    response.send("We're on offer route!");
  });

  // GET OFFERS
  router.get("/", async (request, response) => {
    try {
      const { authToken } = request.cookies;
      const { username } = jwt.verify(authToken, process.env.JWT_SECRET);
      console.log(`Allow access to ${username}`);

      const offers = await getOffers(database);
      if (!offers) {
        response.status(404).send("No offers available.");
        return;
      }

      response.status(200).send(offers);
    } catch (error) {
      console.error(error);
      console.error("Something went wrong", error);
      response.status(500).send(error.message);
    }
  });

  // GET OFFER
  router.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const { authToken } = request.cookies;
      const { username } = jwt.verify(authToken, process.env.JWT_SECRET);
      console.log(`Allow access to ${username}`);

      const offer = await getOffer(database, id);
      if (!offer) {
        response.status(404).send("No offer available.");
        return;
      }

      response.status(200).send(offer);
    } catch (error) {
      console.error(error);
      console.error("Something went wrong", error);
      response.status(500).send(error.message);
    }
  });

  // CREATE OFFER
  router.post("/", async (request, response) => {
    try {
      console.log("POST in /api/offers");
      const { offer } = request.body;
      await createOffer(database, offer);
      response.status(201).send("Offer created.");
    } catch (error) {
      console.error("Something went wrong", error);
      response.status(500).send(error.message);
    }
  });

  return router;
}

module.exports = createOffersRouter;
