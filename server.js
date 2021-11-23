const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./database/config");
db.conn();

app.use(express.json());

app.listen(PORT, console.log("Server ON"));
const PORT = process.env.PORT || 8877;

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

