const fs = require("fs");

// let content = fs.readFileSync("./index.js", "utf-8");
// console.log(content);

// fs.readFile("index.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data", data);
//   }
// });

// fs.writeFileSync(
//   "yash.txt",
//   "Hello This is Me Yash I have Created this file ",
// );

// fs.writeFile(
//   "yash.txt",
//   "this is the Async Data Write by me in this file ",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   },
// );

// fs.appendFile(
//   "yash.txt",
//   "This is the Appended Data In this File and we have to check either the Previous data is safe or not",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   },
// );

// fs.copyFile("yash.txt", "yash1.txt", (err) => {
//   if (err) {
//     console.log("Error Occur ", err);
//   }
// });

// fs.mkdir("./hello", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.unlink("./yash1.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.rmdir("./hello", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//Readable Stream
// const rs = fs.createReadStream("yash.txt");
// rs.on("data", (chunk) => console.log(chunk.toString()));

//Writable Stream
const rs = fs.createReadStream("yash.txt");
const ws = fs.createWriteStream("yash1.txt");

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

rs.pipe(ws);
