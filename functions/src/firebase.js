const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

const firestoreTrigger = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snapshot, ctx) => {
    const documentSnapshot = snapshot.data();

    const user = db.doc(`users/${documentSnapshot.uid}`);

    const userInfo = await user.get();
    const data = userInfo.data();

    // update user data
    return user.update({
      gameCount: data.gameCount + 1,
    });
  });

module.exports = {
  firestoreTrigger,
};
