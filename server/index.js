let express = require('express');
let app = express();

const cors = require('cors');
const path = require('path');
const port = 4000;

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use(cors());

// app.get('')




