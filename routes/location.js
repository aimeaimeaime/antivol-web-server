
// Fichier: routes/location.js
const express = require("express");
const router = express.Router();
const db = require("../firebase");

router.get("/", async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: "Email requis" });

  const path = `localisation/${email.replace(/\./g, "_")}`;
  const ref = db.ref(path);

  try {
    const snapshot = await ref.limitToLast(1).once("value");
    const data = snapshot.val();
    if (!data) return res.status(404).json({ error: "Aucune donnée trouvée" });

    const [key] = Object.keys(data);
    res.json(data[key]);
  } catch (err) {
    res.status(500).json({ error: "Erreur Firebase" });
  }
});

module.exports = router;
