const fs = require("fs");
const path = require("path");

// Folder created mathod-1
fs.mkdir("test1", (err) => {
  console.log(err);
  console.log("Folder1 created successfully");
});
// Folder created mathod-2
fs.mkdir(path.join(__dirname, "test2"), {}, (err) => {
  if (err) throw err;
  console.log("Folder2 created successfully");
});
