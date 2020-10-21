const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
const data = require('./data.json');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.get('/locations', (req, res) => {
    res.send(data)
})

app.get('/location/:name', (req, res) => {
    res.send(data)
})

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
        data.locations,
        newLocation
    ])
    data.locations.push(newLocations);
})

app.listen(port, () => console.log(`We're live on port, ${port}`))