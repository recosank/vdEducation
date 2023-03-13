import mongoose from "mongoose";

const cosmeticSchema = mongoose.Schema({
  name: String,
  AImage: {
    data: String,
  },
});

const cosmeticDb = mongoose.model("cosmeticdb", cosmeticSchema);

export default cosmeticDb;
