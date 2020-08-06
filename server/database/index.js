const mysql = require('mysql');
const mysqlConfig = {user: 'student', database: 'imageurls'};

const connection = mysql.createConnection(mysqlConfig);

connection.connect((error) => {
  if (error) {
    console.log('error connecting');
  } else {
    console.log('connected successfully');
  }
});

const fetchURLs = (id, callback) => {
  let queryString = `SELECT url FROM  urls WHERE product_id='${id}';`;
  connection.query(queryString, (error, result) => {
    if (error) {
      console.log('error at the url fetch:' + error);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  fetchURLs
};