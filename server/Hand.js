const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const handSchema = mongoose.Schema({
  location: String
});
mongoose.model("hands", handSchema);
