const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.use(bodyParser)
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("server started at port 3001");
});
