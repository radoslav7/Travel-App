const PORT = 8000;
const { default: axios } = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());

// Default
app.get('/', (req, res) => {
    res.status(200).json('Welcome to my travel app.');
});

// Get all posts
app.get('/posts', async (req, res) => {
    const url = `${process.env.ASTRA_URL}?page-size=20`;

    const options = {
        method: 'GET',
        headers: {
            'X-Cassandra-Token': process.env.TOKEN,
        },
    };

    try {
        const response = await axios(url, options);
        res.status(200).json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
});

app.listen(PORT, console.log('Server is running on PORT ' + PORT));
