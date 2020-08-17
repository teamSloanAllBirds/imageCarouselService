const mysql = require('mysql');

const mysqlConfig = require('./config.js');

mysqlConfig.database = 'imageurls';

const connection = mysql.createConnection(mysqlConfig);

connection.connect((error) => {
  if (error) {
    console.log('error connecting');
  }
});

const fetchURLs = (id, callback) => {
  const queryString = `SELECT url FROM  urls WHERE product_id='${id}';`;
  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('error at the url fetch:', error);
    } else {
      callback(null, result);
    }
  });
};

const fetchDescriptions = (id, callback) => {
  const queryString = `SELECT subtext_one, subtext_two, features FROM descriptions WHERE product_id='${id}';`;
  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('error at the description fetch:', error);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  fetchURLs,
  fetchDescriptions,
};
