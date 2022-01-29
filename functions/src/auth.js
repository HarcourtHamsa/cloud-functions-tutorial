const fnc = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

const newUserEvent = fnc.auth.user().onCreate((user, ctx) => {
  const userRef = db.doc(`users/${user.uid}`);
  return userRef.set({
    displayName: "cld fnc",
  });
});

module.exports = {
  newUserEvent,
};
