const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/api/users", async (req, res) => {
  try {
      const email = req.body.email;
      const userRef = db.collection("users").where("email", "==", email);
      const doc = await userRef.get();
      if (doc.empty) {
          const newUser = {
              name: req.body.name,
              email: req.body.email
          };
          await db
              .collection("users")
              .doc()
              .create(newUser);
          return res.status(200).json(newUser);
      } else {
          return res.status(200).json({ msg: "Login Successful" });
      }
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


router.post("/api/users/getUserByEmail", async (req, res) => {
  try {
    const email = req.body.email;
    const querySnapshot = await db.collection("users").where("email", "==", email).get();
    if (querySnapshot.empty) {
      return res.status(404).send("No user found with the provided email");
    }
    const doc = querySnapshot.docs[0];
    const response = { id: doc.id, ...doc.data() };
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
    let likes = {};
    if (userDoc.exists && userDoc.data().likes) {
      likes = userDoc.data().likes;
    }

    for (const property in req.body) {
      likes[property] = req.body[property];
    }

    if (userDoc.exists) {
      await userRef.update({ likes });
    } else {
      await userRef.set({ likes });
    }

    return res.status(200).send("Likes updated successfully.");
  } catch (error) {
    return res.status(500).send(error);
  }
});



module.exports = router;