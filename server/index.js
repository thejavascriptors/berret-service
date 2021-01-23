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
  let prods = new Promise((resolve, reject) => {
    Products.find({}).limit(5).exec((err, docs) => {
      if (err) {
        reject(err)
      }
      resolve(docs)
    })
  })
  let total = new Promise((resolve, reject) => {
    Products.estimatedDocumentCount((err, count) => {
      if (err) {
        reject(err)
      }
      resolve(count)
    })
  })
  Promise.all([prods, total])
  .then((results) => {
    res.send({'docs': results[0], 'total': results[1]})
  })
  .catch((err) => {
    res.send(err)
  })
})

app.get('/relprod/prev/:id', (req, res) => {
  let id = req.params.id
  Products.find({'_id': {'$lt': id}}).sort({'_id': -1}).limit(5).exec((err, docs) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).json(docs)
    }
  })
})


app.get('/relprod/next/:id', (req, res) => {
  let id = req.params.id
  Products.find({'_id': {'$gt': id}}).limit(5).exec((err, docs) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).json(docs)
    }
  })
})




app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

