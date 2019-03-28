const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const mongoose = require("mongoose");
require("./Animal");
require("./Hand");

const Animal = mongoose.model("animals");
const Hand = mongoose.model("hands");

mongoose.connect(
  "mongodb://ryancooper:password1@ds125486.mlab.com:25486/hanimals"
);

var db = mongoose.connection;
db.once("open", function() {
  console.log("Connection Succesful!");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/createHanimal", async (req, res) => {
  const numAnimals = await Animal.find().count();
  const randomNumber = Math.floor(Math.random() * numAnimals);
  const randomAnimal = await Animal.find()
    .limit(-1)
    .skip(randomNumber);
  const numHands = randomAnimal[0].toObject().numHands;
  console.log(randomAnimal[0].toObject().name)
  console.log("The number of hands is " + numHands);

  const totalHands = await Hand.find().count();
  const hands = [];
  for (i = 0; i < numHands; i++) {
    const randomHandNumber = Math.floor(Math.random() * totalHands);
    const randomAnimal = await Hand.find()
      .limit(-1)
      .skip(randomHandNumber);
    hands.push(randomAnimal[0].toObject());
  }

  res.send({ animal: randomAnimal, hands: hands });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
