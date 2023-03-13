import bannerDb from "../models/bannerModel.js";
import offerModelDb from "../models/offersModel.js";
import cosmeticDb from "../models/costemicModel.js";

export const getAll = async (req, res) => {
  console.log(req);
  try {
    const bannerData = await bannerDb.find();
    const offerData = await offerModelDb.find();
    const cosmeticData = await cosmeticDb.find();

    const data = {
      bannerData,
      offerData,
      cosmeticData,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
