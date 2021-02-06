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
  for(let loop = 1; loop <= 1; loop++){
    const csvWrite = createCsvWriter({
      header: ['NAME', 'PRODNUM', 'PHOTOURL', 'DESC', 'RATING', 'REVIEW_COUNT', 'PRICE'],
      path: `./database/csvFolder/data${loop}.csv`
    })
    for(let i = start; i <= end; i++){
      let name = faker.commerce.productName();
      let prodNum = i;
      let photoUrl = faker.image.imageUrl(640, 480, 'abstract', true, true);
      let desc = faker.commerce.productDescription();
      let rating = Math.floor(Math.random() * Math.floor(5));
      let review_count = Math.floor(Math.random() * Math.floor(3000));
      let price = faker.commerce.price(10, 200, 2, '$');
      records.push([name,prodNum, photoUrl, desc, rating, review_count, price]);
    }
    csvWrite.writeRecords(records)
      .then( async () => {
        await db.query(`COPY postgres("NAME", "PRODNUM", "PHOTOURL", "DESC", "RATING", "REVIEW_COUNT", "PRICE") FROM '/ndw001_SDC/database/csvFolder/data${loop}.csv' DELIMITER ',' CSV HEADER;`)
      })
      .catch( (err) => {
        console.log(err);
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