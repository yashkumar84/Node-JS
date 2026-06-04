export const registerController = (req, res) => {
  const body = req.body;
  if (!body.username) {
    res.send("Username is Required");
  }
  if (!body.password) {
    res.send("Password is Required");
  }
  //   console.log("Registered Successfully", body);
  res.json({
    msg: "Registered SuccessFully",
    user: body,
  });
};

export const loginController = (req, res) => {};
