const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const animalSchema = mongoose.Schema({
  name: String,
  source: String,
  numHands: Number,
  hands: [{
    top: Number,
    left: Number,
    rotation: Number,
    scale: Number
  }]
});

console.log("In animal");
mongoose.model("animals", animalSchema);
