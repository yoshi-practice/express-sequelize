import express from 'express';
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'NodeTest'
});

app.get('/', function (req, res) {
  connection.query('select * from test_table', function (error, results, fields) {
    if (error) throw error;
    res.send(results[0]);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});