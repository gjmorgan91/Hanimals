const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const animalSchema = mongoose.Schema({
  name: String,
  body: String,
  numHands: Number
});

console.log("In animal");
mongoose.model("animals", animalSchema);
