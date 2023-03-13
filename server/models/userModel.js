import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

const userDb = mongoose.model("userdb", userSchema);

export default userDb;
