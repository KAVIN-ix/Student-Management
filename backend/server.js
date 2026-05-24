require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({
  origin: "*"
}));app.use(express.json());


// Custom Middleware
app.use((req, res, next) => {
  console.log(req.method);
  next();
});


app.use("/students", require("./routes/studentRoutes"));

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});