const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");

const app = express();

const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors({ origin: true }));

app.use(require("./routes/userRoutes"));
app.use(require("./routes/restaurantRoutes"));
app.use(require("./routes/ratingsRoutes"));
app.use(require("./routes/recommendationRoutes"));

exports.app = functions.https.onRequest(app);