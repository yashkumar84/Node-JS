import express from "express";

const app = express();

app.use("/error", (req, res, next) => {
  console.log("Hello Middleware");
  next();
});
//Static Middleware

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express Server ");
});

app.get("/yash", (req, res) => {
  res.status(200).send("<h1>Hi, My name is Yash </h1> ");
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

app.get("/req", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  // console.log(req.);
  res.send("Hello This is for the Req");
});

app.get("/json", (req, res) => {
  res.status(200).json({
    name: "Yash Tyagi",
    proffession: "SDE2",
    company: "Brain Mentors PVT LTD",
  });
});

app.listen(1234, () => {
  console.log("The Server is Running");
});

//Status Codes

// 200 Success
// 201 Created
// 400 - 500 -  Authorisation , Authentication , No Found Errors
// 500 -- 600 - Error Server Side Errors
