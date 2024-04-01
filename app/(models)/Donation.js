import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const donationShema = new Schema(
  {
    title: String,
    description: String,
    maxMoney: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Donation =
  mongoose.models.Donation || mongoose.model("Donation", donationShema);
export default Donation;
