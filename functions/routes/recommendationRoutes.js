const { Router } = require("express");
const router = Router();
const admin = require("firebase-admin");
const http = require('http');


router.get("/api/recommendations/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const options = {
      hostname: 'gbenitezl.pythonanywhere.com',
      port: 80,
      path: `/recommendations/${user_id}`,
      method: 'GET'
    };
    
    const request = http.request(options, response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', async () => {
        const recommended_restaurants = JSON.parse(data);
        const db = admin.firestore();
        const promises = recommended_restaurants.map(restaurant_id => db.collection("restaurants").doc(restaurant_id).get());
        const restaurantData = await Promise.all(promises);
        const restaurants = restaurantData.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(restaurants);
      });
    });
    
    request.on('error', error => {
      res.status(500).json(error);
    });
    
    request.end();
  } catch (error) {
    return res.status(500).json(error);
  }
});

  module.exports = router;