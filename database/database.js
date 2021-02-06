const {Pool, Client} = require('pg');
const client = new Client();

/*
PGUSER='nathan' \
PGHOST='localhost' \
PGDATABASE='postgres' \
PGPORT=55461 \
node database/seed.js
*/
const pool = new Pool({
  user: 'nathan',
  host:'localhost',
  database: 'postgres',
  port: 55461,
})

pool.connect( (err, client, release) => {
   if(err){
     console.log(err);
   } else {
     client.query('SELECT NOW()', (err,result) => {
       release();
       if(err){
         console.log(err);
       }
     })
     console.log('HELLOOOOO')
   }
});

pool.query('CREATE TABLE (IF NOT EXISTS) PRODUCTS (NAME STRING, PRODNUM INT, PHOTOURL STRING, DESC STRING, RATING INT, REVIEW_COUNT INT, PRICE INT, PRIMARY KEY (PRODNUM)')
  .then( ()=>{
    console.log('here we are')
    pool.query('CREATE INDEX product_index ON Product PRODNUM')
      .then( ()=>{
        console.log('done');
      })
      .catch( (err) => {
        console.log(err)
      })
  })
  .catch( (err) => {
    console.log(err)
  })

//function to readOne/All for API call

module.exports.pool = pool;

/*

# Removes latest commit from the stash, KEEPS changes
git reset --soft HEAD~

# Removes latest commit from the stash, DELETES changes
git reset --hard HEAD~

git rebase --onto <branch name>~<first commit number to remove> <branch name>~<first commit to be kept> <branch name>

*/