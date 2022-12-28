const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// !added for deployment 
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
// mongoose.connect("mongodb://localhost:27017/keeperDB");

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection established successfully");
});

const notesRouter = require("./routes/notes");

app.use("/", notesRouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
