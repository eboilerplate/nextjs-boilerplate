const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const path = require("path");

const directory = path.join(__dirname, "/uploads");
app.use("/uploads", express.static(directory));

const userRouter = require("./routes/userRoutes");

// adding json middleware which gives access to req.body
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


app.use(cors()) // cool now everything is handled!



app.use("/api/users", userRouter);

module.exports = app;