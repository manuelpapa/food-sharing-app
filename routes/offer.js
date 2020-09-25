const User = require("../model/User");
const Offer = require("../model/Offer");
const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  // Now we have the _id in req.user and can find the User in the db
  const user = await User.findById(req.user._id);
  res.send(user);
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
      reserved_by: req.body.reserved_by,
      created_by: req.body.created_by,
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

module.exports = router;
