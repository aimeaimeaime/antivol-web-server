




// /// index.js
// const express = require('express');
// const cors = require('cors');
// const { db, ref, onValue } = require('./firebase');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 10000;

// app.use(cors());
// app.use(express.static('public'));

// app.get('/location/:email', (req, res) => {
//   const rawEmail = req.params.email;
//   const emailKey = rawEmail.replace(/\./g, '_');

//   const userRef = ref(db, `localisation/${emailKey}`);

//   onValue(userRef, (snapshot) => {
//     const data = snapshot.val();
//     if (data) {
//       const latest = Object.values(data).pop();
//       res.json(latest);
//     } else {
//       res.status(404).json({ error: 'Aucune position trouvée pour cet utilisateur.' });
//     }
//   }, {
//     onlyOnce: true
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Serveur en ligne sur le port ${PORT}`);
// });














/// index.js
const express = require('express');
const cors = require('cors');
const { db, ref, onValue } = require('./firebase');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.static('public'));

app.get('/location/:email', (req, res) => {
  const rawEmail = req.params.email;
  const emailKey = rawEmail.replace(/\./g, '_');

  const userRef = ref(db, `localisation/${emailKey}`);

  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const latest = Object.values(data).pop();
      res.json(latest);
    } else {
      res.status(404).json({ error: 'Aucune position trouvée pour cet utilisateur.' });
    }
  }, {
    onlyOnce: true
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur le port ${PORT}`);
});