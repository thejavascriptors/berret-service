const {Pool, Client} = require('pg');
// const client = new Client();
/*
PGUSER='nathan' \
PGHOST='localhost' \
PGDATABASE='postgres' \
PGPORT=55461 \
node database/seed.js
*/
const pool = new Pool({
  user: 'nathan',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
})
// pool.query(`CREATE TABLE IF NOT EXISTS products (
//     name VARCHAR (255),
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     photoURL VARCHAR (255),
//     descript VARCHAR (255),
//     rating INT,
//     review_count INT,
//     price INT
//   );`)
//   .then( ()=>{
//     console.log('here we are')
//     pool.query('CREATE INDEX product_index ON Product id')
//       .then( ()=>{
//         console.log('done');
//       })
//       .catch( (err) => {
//         console.log('error creating products table', err)
//       })
//   })
//   .catch( (err) => {
//     console.log(err)
//   })
//function to readOne/All for API call
module.exports.pool = pool;
