/// firebase.js
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, onValue } = require('firebase/database');

const firebaseConfig = {
  databaseURL: 'https://systemeantivol-4bcbf-default-rtdb.firebaseio.com'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = { db, ref, onValue };