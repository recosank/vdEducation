import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
  FImage: {
    data: String,
  },
});

const bannerDb = mongoose.model("bannerDb", bannerSchema);

export default bannerDb;
