const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
