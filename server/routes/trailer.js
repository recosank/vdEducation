import express from "express";

import { getAll } from "../controlers/post.js";
import { signinUser, signupUser } from "../controlers/userC.js";
import auth from "../middleware/auth.js";
import bodyValidator from "../middleware/bodyValidate.js";

const router = express.Router();

router.get("/gethome", getAll);
router.post("/signup", signupUser);
router.post("/signin", signinUser);

export default router;
