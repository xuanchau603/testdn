const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();

const { authRoutes, verifyRoutes, newsRoutes } = require("./Routes");

app.use(cors());
// app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to server DanaHome");
});

app.use("/users", authRoutes);
app.use("/verifyCode", verifyRoutes);
app.use("/news", newsRoutes);

app.listen(8002, () => {
  console.log("Server is running at port 802");
});
