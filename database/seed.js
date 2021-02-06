const database = require('./database');
const faker = require('faker');
const db = database.pool;
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

let seed = async () => {
  //let start
  let start = 1;
  let end = 1000000;
  let records = [];
  // loop to 10 when ready
  for(let loop = 1; loop <= 10; loop++){
    const csvWrite = createCsvWriter({
      header: ['name', 'id', 'photoURL', 'descript', 'rating', 'review_count', 'price'],
      path: `./database/csvFolder/data${loop}.csv`
    })
    for(let i = start; i <= end; i++){
      let name = faker.commerce.productName();
      let prodNum = i;
      let photoUrl = faker.image.imageUrl(640, 480, 'abstract', true, true);
      let desc = faker.commerce.productDescription();
      let rating = Math.floor(Math.random() * Math.floor(5));
      let review_count = Math.floor(Math.random() * Math.floor(3000));
      let price = Math.floor(Math.random() * Math.floor(1000));
      records.push([name,prodNum, photoUrl, desc, rating, review_count, price]);
    }
    csvWrite.writeRecords(records)
      .then( async () => {
        await db.query(`COPY products("name", "id", "photourl", "descript", "rating", "review_count", "price") FROM '/Users/nathan/Desktop/ndw001_SDC/database/csvFolder/data${loop}.csv' DELIMITER ',' CSV HEADER;`)
      })
      .catch( (err) => {
        console.log('error writing records from csv', err);
      })
    start += end;
    end += end;
    records = [];
  }
  // query from csv into database // copy path to
}
seed();
// type
let randomType = Math.floor(Math.random() * Math.floor(5));
/*
1: Electronics, 2: Toys, 3: Furniture, 4: Clothing, 5: Household Supplies
*/