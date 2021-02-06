const axios = require('axios')
const database = require('../database/database.js');
const Products = database.Products


test('Database should have 100 entries', () => {
  expect.assertions(1);
  return Products.find({})
    .then((docs) => {
      expect(docs.length).toBe(100)
    })
    .catch((err) => {
      console.error(err)
    })
})

test('API Get call Should get only 60 entries from database', () => {
  expect.assertions(1);
  return axios.get('http://localhost:4357/relprod')
  .then((res) => {
    expect(res.data.length).toBe(60)
  })
  .catch((err) => {
    console.error(err)
  })

})

test('Should get a 200 response from API Server', () => {
  expect.assertions(1);
  return axios.get('http://localhost:4357/relprod')
  .then((res) => {
    expect(res.status).toBe(200)
  })
  .catch((err) => {
    console.error(err)
  })

})

