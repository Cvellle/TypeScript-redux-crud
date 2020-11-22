const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    title: String,
    body: String,
    // message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
