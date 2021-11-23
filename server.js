const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./database/config");
db.conn();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 8877;
app.listen(PORT, console.log("Server ON"));


const Card = require("./models/cardModel");

app.post("/card", async (req, res) => {
  try {
    const { cardId, name } = req.body;
    const card = await Card.create({
      name: name,
      cardId: cardId,
    })
    console.log(card)

    res.status(200).json( card );
  } catch (err) {
    res.status(400).json( err );
  }
});

app.get("/carddata", async (req, res) => {
  try {
    const data = await Card.find();
    res.status(200).json( data );
  } catch (err) {
    res.status(400).json( err );
  }
});


