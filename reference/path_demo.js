const path = require("path");

//Base file name
console.log(path.basename(__filename)); // path_demo.js

//Directory file name
console.log(path.dirname(__filename)); // C:\Users\User\projects\akhil\Node Learning\reference

//File extension
console.log(path.extname(__filename)); // .js

//create path object
console.log(path.parse(__filename));       // {
                                           //   root: 'C:\\',
                                           //   dir: 'C:\\Users\\User\\projects\\akhil\\Node Learning\\reference',
console.log(path.parse(__filename).base);  //   base: 'path_demo.js',
                                           //   ext: '.js',
                                           //   name: 'path_demo'
                                           // }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // C:\Users\User\projects\akhil\Node Learning\reference\test\hello.html

