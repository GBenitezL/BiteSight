const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

router.get("/api/recommendations", async (req, res) => {
    try {
      const querySnapshot = await db
        .collection("recommendation")
        .orderBy("distancias", "asc")
        .orderBy("PROMEDIOS DE LAS ESTRELLAS", "desc")
        .limit(10)
        .get();
  
      const docs = querySnapshot.docs;
      const response = docs.map((doc) => doc.data());
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
});
  

  module.exports = router;