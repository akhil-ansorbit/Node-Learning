const fs = require("fs");
const path = require("path");

// Folder created mathod-1
fs.mkdir("test1", (err) => {
  console.log(err);
  console.log("Folder1 created successfully");
});
// Folder created mathod-2
fs.mkdir(path.join(__dirname, "test2"), {}, (err) => {
  console.log("Folder2 created successfully");
});

//Write file
fs.writeFile(
  path.join(__dirname, "test2", "hello.txt"),
  "Helloo John",
  {},
  (err) => {
    if (err) throw err;
    console.log(
      "Write successfully................................................................"
    );
  }
);

// Append File
fs.appendFile(
  path.join(__dirname, "test2", "hello.txt"),
  "  Helloo Doe",
  (err) => {
    if (err) throw err;
    console.log("Append File successfully");
  }
);

// Read file
fs.readFile(path.join(__dirname, "test2", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("Read Data -", data);
});

//Renamed file
fs.rename(
  path.join(__dirname, "test2", "hello.txt"),
  path.join(__dirname, "test2", "name.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("Renamed file");
  }
);

// //Delete file
// fs.unlink(path.join(__dirname, "test2", "name.txt"), (err) => {
//   console.log("File deleted");
// });

// //Remove folder
// fs.rmdir(path.join(__dirname, "test1"), (err) => {
//   console.log("Folder deleted successfully");
// });
