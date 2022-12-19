const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Hello from the server</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>Wel-come in AboutUs page</h1>");
  } else if (req.url == "/about/home") {
    res.end("<h1>Wel-come in About of Home page</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 Error Page</h1>");
  }
}); 

server.listen(5001, () => {
  console.log("Lesting to the 5001 port...");
});
