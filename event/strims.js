const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // 1 Mathod ______________
  // fs.readFile("../reference/test2/name.txt", (err, data) => {
  //   if (err) return console.log(err);
  //   res.end(data.toString());
  // });

  //2 Mathod ________________
  // const rstream = fs.createReadStream("../reference/test2/name.txt");
  // rstream.on("data", (del) => {
  //   res.write(del);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("File not found");
  // });

  //3 Mathod
  const rstream = fs.createReadStream("../reference/test2/name.txt");
  rstream.pipe(res);
});

server.listen(5010);
