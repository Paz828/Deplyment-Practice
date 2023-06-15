const dotenv = require('dotenv');
const express = require('express');
const {Pool} = require('pg');
const app = express();

dotenv.config();

const PORT = process.env.PORT
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.use(express.json());
app.use(express.static('public'))

app.get('/wish', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM wishlist;');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err)
        res.status(500).send('error')
    }
})

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});
