const express = require('express');
const cors = require('cors');
const path = require('path');
const database = require('../database/database.js');
const Products = database.Products

const app = express();
const port = 4357;

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use(cors());

app.get('/relprod', (req, res) => {
  Products.find({}).limit(60).exec((err, docs) => {
    res.json(docs)
  })
})


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})