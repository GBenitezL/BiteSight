const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();


router.post('/api/ratings', async (req, res) => {
    try {
      const { user_id, restaurant_id, rating } = req.body;
      const docRef = await db.collection('ratings').add({
        user_id,
        restaurant_id,
        rating,
        timestamp: Date.now()
      });
      res.status(201).json({ id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


router.get('/api/ratings/user/:user_id', async (req, res) => {
    try {
      const querySnapshot = await db.collection('ratings').where('user_id', '==', req.params.user_id).get();
      const ratings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        user_id: doc.data().user_id,
        restaurant_id: doc.data().restaurant_id,
        rating: doc.data().rating,
        timestamp: doc.data().timestamp
      }));
      res.status(200).json(ratings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


router.get('/api/ratings/restaurant/:restaurant_id', async (req, res) => {
    try {
      const querySnapshot = await db.collection('ratings').where('restaurant_id', '==', req.params.restaurant_id).get();
      const ratings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        user_id: doc.data().user_id,
        restaurant_id: doc.data().restaurant_id,
        rating: doc.data().rating,
        timestamp: doc.data().timestamp
      }));
      res.status(200).json(ratings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;