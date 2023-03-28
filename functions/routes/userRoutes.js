const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/api/users", async (req, res) => {
    try {
      await db
        .collection("users")
        .doc()
        .create({ 
          name: req.body.name, 
          gender: req.body.gender,
          birthday: req.body.birthday,
          email: req.body.email
        });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).send(error);
    }
});


router.get("/api/users/:user_id", async (req, res) => {
    try {
      const doc = db.collection("users").doc(req.params.user_id);
      const item = await doc.get();
      const response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
});


router.get("/api/users", async (req, res) => {
    try {
      let query = db.collection("users");
      const querySnapshot = await query.get();
      let docs = querySnapshot.docs;
  
      const response = docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        gender: doc.data().gender,
        birthday: doc.data().birthday,
        email: doc.data().email,
      }));
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
});

router.post("/api/users/:user_id/likes", async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.user_id);

    const userDoc = await userRef.get();
    let likes = userDoc.exists ? userDoc.data().likes : {};

    for (const property in req.body) {
      likes[property] = req.body[property];
    }

    await userRef.set({ likes }, { merge: true });

    return res.status(200).send("Likes updated successfully.");
  } catch (error) {
    return res.status(500).send(error);
  }
});


module.exports = router;