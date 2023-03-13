import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import userDb from "./../models/userModel.js";
import { env } from "../utils/enviroment.js";

const secret = env.SECRET_JWT;

export const signupUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const existedUser = await userDb.findOne({ email });
    if (existedUser)
      return res.status(400).json({ message: "user already existed" });

    const hasedPasswd = await bcrypt.hash(password, 12);

    const user = await userDb.create({
      email,
      password: hasedPasswd,
    });

    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "8h",
    });
    const profile = {
      email: user.email,
      token: token,
    };
    res.status(201).json({ profile });
  } catch (error) {
    console.log(error);
  }
};

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await userDb.findOne({ email });
    if (!User) return res.status(404).json({ message: "user not existed" });
    const hasedPasswd = await bcrypt.compare(password, User.password);
    if (!hasedPasswd)
      return res.status(400).json({ message: "invalid credentials" });
    const token = jwt.sign({ email: User.email, id: User._id }, secret, {
      expiresIn: "8h",
    });
    const existedUser = {
      email: User.email,
      token: token,
    };
    res.status(200).json({ existedUser });
  } catch (error) {
    console.log(error);
  }
};
