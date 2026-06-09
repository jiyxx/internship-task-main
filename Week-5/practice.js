// // // Update a file
// // const fs = require('fs');
// // const path = require('path');

// // // Write a file
// // const filepath = path.join(__dirname , 'sample.txt');
// // fs.writeFileSync(filepath , "Hello from Jiya");

// // // Read it back
// // const content = fs.readFileSync(filepath , "utf-8");
// // console.log("File content" , content);
// // console.log("File path" , filepath);

// // // Get file stats
// // const stats = fs.statSync(filepath);
// // console.log("Is file?" , stats.isFile());
// // console.log("File size" , stats.size);
// // console.log("Created at" , stats.birthtime);
// // console.log("Modified at" , stats.mtime);
// // console.log("Is directory?" , stats.isDirectory());
// // console.log("is symbolic link?" , stats.isSymbolicLink());
// // console.log(__dirname);

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome to my Express Server",
//   });
//   res.status(200).json({
//     message: "Sucessfully sent response",
//   })
// });

// app.get("/about", (req, res) => {
//   res.json({
//     message: "This is About Page",
//     description: "This page provides information about our website and its purpose",
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// app
//   .route('/book')
//   .get((req, res) => {
//     res.send('Get a random book');
//   })
//   .post((req, res) => {
//     res.send('Add a book');
//   })
//   .delete((req , res) => {
//     res.send('Delete the book');
//   })

// // const cb0 = function (req, res, next) {
// //   console.log('CB0');
// //   next();
// // };

// // const cb1 = function (req, res, next) {
// //   console.log('CB1');
// //   next();
// // };

// // const cb2 = function (req, res) {
// //   res.send('Hello from C!');
// // };

// // app.get('/example/c', [cb0, cb1, cb2]);