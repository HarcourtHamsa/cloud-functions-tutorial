const { basicHTTP, api } = require("./http");
const { newUserEvent } = require("./auth");
const { firestoreTrigger } = require("./firebase");

module.exports = {
  basicHTTP,
  api,
  newUserEvent,
  firestoreTrigger
};
