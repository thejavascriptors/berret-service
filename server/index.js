const express = require('express');
const app = express();
const database = require('../database/database.js');
const db = database.pool;

const cors = require('cors');
const path = require('path');
const port = 8080;

// app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
  // console.log('hello there')
  res.send('hello');
})

app.listen(port, () => {
  console.log('listening at 8080');
})

app.get('/api/product/:id', (req,res) =>{
  let sendData = (err, data) => {
    if(err){
      console.log(err);
    } else {
      console.log(data.rows)
      res.send(data.rows);
    }
  }
  db.readOne(req.params.id, sendData);
})



