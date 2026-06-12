import User from "../../user/model/User.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerService = async (req, res) => {
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

  return {
    user_id: userId,
    name: body.name,
    email: body.email,
  };
};

export const loginService = async (req, res) => {
  const body = req.body;
  if (!body.email) {
    return res.status(500).json({ msg: "Email is Required" });
  }
  if (!body.password) {
    return res.status(500).json({ msg: "Password is Required" });
  }

  const user = await User.findOne({ email: body.email });
  if (!user) {
    return res.status(501).json({
      msg: "Invalid Credentials",
    });
  }

  const isMatch = await bcrypt.compare(body.password, user.password);
  if (!isMatch) {
    return res.status(501).json({
      msg: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    { user_id: user.user_id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  return { token, user };
};
