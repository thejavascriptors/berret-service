const postgres = require('postgres');
const { Sequelize, DataTypes } = require('sequelize');

// db, username and password. this is the connection
let db = new Sequelize('relateditems', 'postgres', 'postgres', {
  // specify where. on EC2 it will be different
  host: 'localhost',
  // which db i'm using
  dialect: 'postgres',
  // this will prevent console.logs when querying
  logging: false,
});

// this is the model
const products = db.define('products',{
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  productName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  picURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price : {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

const typeids  = db.define('typeids', {
  typeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  typeName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const typelists = db.define('typelists', {
  typeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'typeids',
      key: 'id',
      as: 'typeID'
    }
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id',
      as: 'productID'
    }
  }
});

module.exports.db = db;
module.exports.products = products;
module.exports.typeids = typeids;
module.exports.typelists = typelists;