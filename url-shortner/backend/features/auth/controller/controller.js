import bcrypt from "bcrypt";
import User from "../../user/model/User.js";
import { nanoid } from "nanoid";

export const registerController = async (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(500).json({ msg: "Username is Required" });
  }
  if (!body.email) {
    return res.status(500).json({ msg: "Email is Required" });
  }
  if (!body.password) {
    return res.status(500).json({ msg: "Password is Required" });
  }

  const user = await User.findOne({ email: body.email });
  if (user) {
    return res.status(501).json({
      msg: "User Already Exis",
    });
  }
  const userId = nanoid(10);
  const hashPassword = await bcrypt.hash(body.password, 10);
  //   console.log("Registered Successfully", body);
  const newUser = new User({
    user_id: userId,
    name: body.name,
    password: hashPassword,
    email: body.email,
  });

  await newUser.save();
  res.json({
    msg: "Registered SuccessFully",
    user: body,
  });
};

export const loginController = (req, res) => {};
