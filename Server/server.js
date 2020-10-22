const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
// const data = require('./data.json');
const cors = require('cors');
const admin = require('firebase-admin');
admin.initializeApp();
// const functions = require('firebase-functions');
const firestore = admin.firestore();

require('dotenv').config();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.get('/locations', (req, res) => {
    var docRef = firestore.collection('locations').doc(req.params.locations);
    console.log(docRef)
    docRef.get().then((doc => {
        if(doc.exists) {
            return res.status(200).json(doc.data());
        } else {
            return res.status(400).json({"message":"ID not found"});
        }
    }).catch((error) => {
        return res.status(400).json({"message":"Unable to connect to Firestone"});
    }))
});

app.get('/say/hello', (req, res) => {
    // Return success response
    return res.status(200).json({"message":"Hello there... Welcome to mock server."});
  });
  

// app.get('/locations', (req, res) => {
//     res.send(data)
// })

// app.get('/location/:name', (req, res) => {
//     res.send(data)
// })



app.post('location', (req, res) => {
    const { id, location, description, morningLight, eveningLight, address, city, region, longitude, latitude, categories, permit } = req.body
    const newLocation = {
        id,
        location, 
        description,
        morningLight,
        eveningLight,
        address,
        city,
        region,
        longitude,
        latitude,
        categories,
        permit
    }
    res.json([
        db.locations,
        newLocation
    ])
    db.locations.push(newLocations);
})

app.listen(port, () => console.log(`We're live on port, ${port}`))
// module.exports.db = db.database();