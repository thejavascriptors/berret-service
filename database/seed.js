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
      header: ['name', 'id', 'photoURL', 'descript', 'rating', 'review_count', 'price','typeid'],
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
      let typeID = Math.floor(Math.random() * Math.floor(15));
      records.push([name,prodNum, photoUrl, desc, rating, review_count, price, typeID]);
    }
    csvWrite.writeRecords(records)
      .then( async () => {
        await db.query(`COPY products("name", "id", "photourl", "descript", "rating", "review_count", "price", "typeid") FROM '${__dirname}/csvFolder/data${loop}.csv' DELIMITER ',' CSV HEADER;`)
      })
      .catch( (err) => {
        console.log('error writing records from csv', err);
      })
    start += 1000000;
    end += 1000000;
    records = [];
  }
}


// let seedTypeList = () => {
//     //let start
//   let start = 1;
//   let end = 1000000;
//   let records = [];
//   // loop to 10 when ready
//   for(let loop = 1; loop <= 10; loop++){
//     const csvWrite = createCsvWriter({
//       header: ['typeid', 'typename', 'productid'],
//       path: `./database/csvFolder/typeList${loop}.csv`
//     })
//     for(let i = start; i <= end; i++){
//       let typeID = Math.floor(Math.random() * Math.floor(5))
//       let prodNum = i;
//       let typeName = '';
//       if(typeID===0){
//         typeName = 'Electronics';
//       } else if(typeID===1){
//         typeName = 'Toys';
//       } else if(typeID===2){
//         typeName = 'Furniture';
//       } else if(typeID===4){
//         typeName = 'Household Supplies';
//       } else if(typeID===3){
//         typeName = 'Clothing';
//       }
//       records.push([typeID, prodNum, typeName]);
//     }
//     csvWrite.writeRecords(records)
//       .then( async () => {
//         await db.query(`COPY products("typeid", "typename", "productid") FROM '/Users/nathan/Desktop/ndw001_SDC/database/csvFolder/typeList${loop}.csv' DELIMITER ',' CSV HEADER;`)
//       })
//       .catch( (err) => {
//         console.log('error writing records from csv', err);
//       })
//     start += end;
//     end += end;
//     records = [];
//   }
// }
seed();
// console.log(__dirname);


// seedTypeList();
// type
/*
0: Electronics, 1: Toys, 2: Furniture, 3: Clothing, 4: Household Supplies, 5: Kitchen, 6: Bathroom, 7: Stationary, 8: Sports, 9: Canned Goods, 10: Dry foods, 11: Drinks, 12: Silverware, 13: Party Supplies, 14: Camping, 15:

CREATE TABLE IF NOT EXISTS products (
    name VARCHAR (255),
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    photoURL VARCHAR (255),
    descript VARCHAR (255),
    rating INT,
    review_count INT,
    price INT,
    typeID INT
   );
CREATE INDEX type_index ON products (typeid);




*/