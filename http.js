const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // res.write("Hello Write");
    // res.end();
    res.end("Hello World From my First Server");
  } else if (req.url == "/yash") {
    res.end("Hello Yash From the Server");
  } else if (req.url == "/search") {
    res.end("Hello Search Page here");
  } else {
    res.end("Wrong Route");
  }
});

server.listen(1234, () => {
  console.log("The server is Running");
});
