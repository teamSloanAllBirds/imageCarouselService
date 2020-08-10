const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./database');

const app = express();
app.set('port', 5000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/:productid', (req, res) => {
  const id = req.url.split('/')[2];
  db.fetchURLs(id, (error, result) => {
    if (error) {
      console.log('error retrieving product id:', error);
    } else {
      res.status(200).json(result);
    }
  });
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
