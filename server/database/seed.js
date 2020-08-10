/* eslint-disable no-param-reassign */
const mysql = require('mysql');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const mysqlConfig = require('./config.js');

const schema = fs.readFileSync(path.join(__dirname, '/schema.sql'), 'utf-8').replace(/\r|\n/g, '');

const connection = mysql.createConnection(mysqlConfig);

// connect to database //
connection.connect((error) => {
  if (error) {
    console.log('error connecting to db');
  } else {
    console.log('db connected successfully');
  }
});

// load schema //
connection.query(schema, (error) => {
  if (error) {
    console.log('loading schema');
  } else {
    console.log('schema loaded');
  }
});

// helper function to write urls //
const pad = (n, width) => {
  n += '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};

// populate the db with products //
for (let i = 1; i < 101; i += 1) {
  const productName = faker.commerce.productName();
  const queryString = `INSERT INTO products (name) VALUES ('${productName}');`;
  connection.query(queryString, (error) => {
    if (error) {
      console.log(error);
    } else {
      for (let j = i; j < i + 8; j += 1) {
        const k = j > 90 ? j - 90 : j;
        const url = `https://teamsloanpics.s3.us-east-2.amazonaws.com/${pad(k, 3)}.jpeg`;
        const qString = `INSERT INTO urls (product_id, url) VALUES ('${i}', '${url}');`;
        connection.query(qString, (err) => {
          if (err) {
            console.log(error);
          }
        });
      }
    }
  });
}
