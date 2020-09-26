const Offer = require("../model/Offer");
const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  try {
    const offers = await Offer.find({ reserved_by: null });
    if (!offers) return res.status(400).send("No offers available.");
    res.send(offers);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const offer = new Offer({
      title: req.body.title,
      category: req.body.category,
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      location: req.body.location,
      tags: req.body.tags,
      reserved_by: null,
      created_by: req.user,
    });

    try {
      await offer.save();
      res.send({ offer: offer._id });
    } catch (error) {
      res.status(400).send(error);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.get("/:offerId", verify, async (req, res) => {
  try {
    const offer = await Offer.find({ _id: req.params.offerId });
    if (!offer) return res.status(400).send("Offer does not exist.");

    res.send(offer);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
