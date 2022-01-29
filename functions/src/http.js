const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

admin.initializeApp();
const app = express();

app.get("", (req, res) => {
  res.send("okay from express and cloud functions");
});

const basicHTTP = functions.https.onRequest((req, res) => {
  const name = req.query.name;
  res.send(`hello ${name}`);
});

const api = functions.https.onRequest(app);

module.exports = {
  basicHTTP,
  api,
};
