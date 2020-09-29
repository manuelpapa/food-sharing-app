const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken");
const Offer = require("../model/Offer");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // Validate the data, before creating a user
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Checking if the user is already in db
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const { email, password } = req.body;

    // Checking if the email is in db
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("Email doesn't exist");

    // Check if password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    // Create and sign a Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Return JWT to Client
    res.setHeader("Set-Cookie", `auth-token=${token};path=/;Max-Age=604800`);
    res.json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Get created offers by user_id
router.get("/offers", verify, async (req, res) => {
  try {
    const createdOffers = await Offer.find({ created_by: req.user });
    res.send(createdOffers);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

// Get reserved offers by user_id
router.get("/reservations", verify, async (req, res) => {
  try {
    const reservedOffers = await Offer.find({ reserved_by: req.user });
    res.send(reservedOffers);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
