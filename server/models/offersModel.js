import mongoose from "mongoose";

const offerModel = new mongoose.Schema({
  title: String,
  subTitle: String,
  MImage: {
    data: String,
  },
});

const offerModelDb = mongoose.model("offerDb", offerModel);

export default offerModelDb;
