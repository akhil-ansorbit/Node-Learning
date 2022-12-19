const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer((req, res) => {
  res.end("<h1>Hello from the server</h1>");
});

server.listen(5001, () => {
  console.log("Lesting to the 5001 port...");
});
