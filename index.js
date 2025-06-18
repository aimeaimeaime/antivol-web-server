// Fichier: index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/location", require("./routes/location"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en ligne sur le port ${PORT}`);
});