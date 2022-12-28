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

app.get("/", (req, res) => {
  res.write("<h1>Helloo Wel-come in about page</h1>");
  res.write("<h1>Helloo Wel-come in again about page</h1>");
  res.send();
});

app.get("/api", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Pavan",
    },
    {
      id: 2,
      name: "Harshad",
    },
  ]);
});

app.get("/api/json", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Pavan",
    },
    {
      id: 2,
      name: "Harshad",
    },
  ]);
});

app.listen(8010, () => {
  console.log("Listen on http://localhost-8010");
});
