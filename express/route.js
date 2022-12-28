const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  // res.send("Helloo Ansorbit");
  res.status(200).send("Helloo Ansorbit with status code 200");
});

app.get("/about", (req, res) => {
  // res.send("Helloo Ansorbit");
  res.send("<h1>Helloo Wel-come in about page</h1>");
});

app.listen(8010, () => {
  console.log("Listen on http://localhost-8010");
});
  