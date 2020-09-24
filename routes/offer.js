const User = require("../model/User");
const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  // Now we have the _id in req.user and can find the User in the db
  const user = await User.findById(req.user._id);
  res.send(user);
});

module.exports = router;
