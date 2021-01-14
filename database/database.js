const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:4357/products', {useNewUrlParser: true});

const productsSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  desc: String,
  rating: Number,
  review_count: {type: Number, default: 0},
  price: Number
});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;