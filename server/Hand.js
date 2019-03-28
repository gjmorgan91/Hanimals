const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const handSchema = mongoose.Schema({
  source: String
});
mongoose.model("hands", handSchema);
