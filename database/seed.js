const database = require('./database');
const faker = require('faker');
const Products = database.Products
const db = database.db

var createSeed = () => {
  var products = []

  for (var i = 0; i < 100; i++) {
    const seeds = {
      name: faker.commerce.productName(),
      prodNum: i + 1,
      photoUrl: faker.image.imageUrl(640, 480, 'abstract', true, true),
      desc: faker.commerce.productDescription(),
      rating: Math.ceil(Math.random() * 5),
      review_count: Math.ceil(Math.random() * 3000),
      price: faker.commerce.price(10, 200, 2, '$')
    }
    products.push(seeds)
  }
  return products
}

let productSeeds = createSeed()

const buildDB = () => {
  Products.insertMany(productSeeds)
  .then(() => {
    db.Products.disconnect()
  })
  .catch((error) => {
    console.log(error)
  })
}

buildDB()