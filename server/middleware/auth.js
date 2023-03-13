import jwt from "jsonwebtoken";
import { env } from "../utils/enviroment.js";

const secret = env.SECRET_JWT;

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    decodedData = jwt.verify(token, secret);
    req.userId = decodedData.id;
    next();
  } catch (error) {
    if (error.name === "TypeError") {
      let data = {
        message: "not authorized",
      };
      res.status(403).json({ data });
    } else {
      let resData = {
        message: "expired",
      };
      res.status(403).json({ resData });
    }
  }
};

export default auth;
