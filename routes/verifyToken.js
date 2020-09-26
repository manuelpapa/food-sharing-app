const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const cookie = req.header("Cookie").split("=");
  const token = cookie[1];

  if (!token) return res.status(401).send("Access Denied");

  try {
    const userId = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userId;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
