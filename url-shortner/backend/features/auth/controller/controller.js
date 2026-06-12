import bcrypt from "bcrypt";
import User from "../../user/model/User.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import { loginService, registerService } from "../service/service.js";

export const registerController = async (req, res) => {
  const body = req.body;
  const { userId } = await registerService(req, res);
  res.status(201).json({
    msg: "Registered SuccessFully",
    user: {
      user_id: userId,
      name: body.name,
      email: body.email,
    },
  });
};

export const loginController = async (req, res) => {
  const body = req.body;
  const { token, user } = await loginService(req, res);

  res.status(201).json({
    msg: "Login SuccessFull",
    token: token,
    user: { email: user.email, name: user.name },
  });
};
