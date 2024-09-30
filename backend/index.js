const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRouter = require("./Routes/AuthRouter.js");
const productsRouter = require("./Routes/ProductsRouter.js");

require("dotenv").config();
const app = express();
const allowedOrigins = ["http://localhost:5173", "http://localhost:8000"];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // If you want to allow cookies/auth headers
};

// Apply CORS middleware with options
app.use(cors());
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
