const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter name !"],
    },
    email: {
      type: String,
      require: [true, "Please enter email !"],
      unique: true,
    },
    age: {
      type: Number,
      require: [true, "Please enter age !"],
      min:[18,"Age should be greater than 18 !"],
      max:[65,"Age should be less than 65"]
    },
    batch: {
      type: String,
      require: [true, "Please add an email !"],
      enum: ["6-7AM", "7-8AM", "8-9AM", "5-6PM"],
    },
    monthlyFee: {
      type: Number,
      require: [true, "Please enter fee amount !"],
      default:500
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
