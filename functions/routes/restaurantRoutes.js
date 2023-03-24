const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

router.get("/api/restaurants", async (req, res) => {
  try {
    let query = db.collection("restaurants");
    const snapshot = await query.limit(10).get();
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
});


router.get("/api/restaurants/:restaurant_id", (req, res) => {
    (async () => {
      try {
        const doc = db.collection("restaurants").doc(req.params.restaurant_id);
        const item = await doc.get();
        const response = item.data();
        return res.status(200).send(response);
      } catch (error) {
        return res.status(500).send(error);
      }
    })();
});


module.exports = router;