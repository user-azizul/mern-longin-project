const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRouter = require("./Routes/AuthRouter.js");
const productsRouter = require("./Routes/ProductsRouter.js");

require("dotenv").config();
const app = express();

app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Apply CORS middleware with options
app.use(cors({ origin: "https://mern-ui-one.vercel.app" ,credentials:true}));
app.use(bodyParser.json());

// Database connection
const mongo_url = process.env.MONGO_CONNECT;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => console.log("MongoDB Connetion error", err));

// Use the auth router
app.use("/auth", authRouter);
app.use("/products", productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
