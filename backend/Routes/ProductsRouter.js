const ensureAuthenticated = require("../Middlewares/AuthProduct.js");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("Request received on products route.");
  res.status(200).json([
    { name: "mobile", price: 10000, id: 1 },
    { name: "tv", price: 20000, id: 2 }
  ]);
});

module.exports = router;
