require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/individual', (req, res) => {
  console.log('Serving GET request for individual search');
  const { query } = req.body;

  axios.get(`https://www.pricecharting.com/api/product?t=${process.env.PC_TOKEN}&q=${query}`).then((data) => {
    res.status(200).send(data.data);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
})

app.get('/api/group', (req, res) => {
  console.log('Serving GET request for group search');
  const { query } = req.query;

  axios.get(`https://www.pricecharting.com/api/products?t=${process.env.PC_TOKEN}&q=${query}`).then((data) => {
    const { products } = data.data

    res.status(200).send(products);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
})






app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
})