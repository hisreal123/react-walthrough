const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const { mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// require('dotenv').config
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://p-rjs.vercel.app/"],
    credentials: true,
  })
);
app.use(express.json());

const PORT = 5000;

const salt = bcrypt.genSaltSync(10);
const secret = "dosndosnndonsdinosndonson3non";

const URL =
  "mongodb+srv://blog:XreRHy0Ja3FC05Hw@cluster0.z2ujdbw.mongodb.net/dbName";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch((error) => {
    console.log("Database Not Connected !!", error);
  });

// POST
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists !!" });
    }
    const userCreation = await User.create({
      username,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });
    res.json(userCreation);
  } catch (error) {
    console.error(" Error Man !!!!".error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(410).json({ message: "User not found !!" });
    }
    const passOk = bcrypt.compareSync(password, existingUser.password);
    if (passOk) {
      // return res.status(411).json({ token: createToken(existingUser._id) });
      jwt.sign({ username, id: existingUser._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({ message: "Login successful" });
      });
    } else {
      res.status(403).json({ message: "Wrong Credentials" });
    }
  } catch (error) {
    console.error(" Error Man !!!!".error);
  }
});

// GET
app.get("/", (req, res) => {
  res.send("Home working");
});

// GET
app.get("/test", (req, res) => {
  res.send("Home test working");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
