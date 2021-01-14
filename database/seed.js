import Products from './database'
import faker from 'faker'


const seeds = {
  name: faker.commerce.productName(),
  photoUrl: faker.image.imageUrl(),
  desc: faker.commerce.productDescription(),
  rating: Math.ceil(Math.random() * 5),
  review_count: Math.ceil(Math.random() * 3000),
  price: faker.commerce.price(10, 200, 2, '$')
}

var seedData = (seed) => {
  let data = [];
  while (data.length < 100) {
    data.push(seed)
  }
  return data
}

var productSeeds = seedData(seeds)

const buildDB = () => {
  Products.insertMany(productSeeds)
  .catch((err) => {
    console.log(err, 'seed failed')
  })
}

buildDB()