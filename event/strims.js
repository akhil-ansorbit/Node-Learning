const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("../reference/test2/name.txt");

  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err) => {
    console.log(err);
    res.end("File not found");
  });
});

server.listen(5010);
