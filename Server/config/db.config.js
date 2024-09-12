const mysql = require('mysql2');
/*
const db = mysql.createConnection({
  host: 'localhost',
  user: 'konkraf1_konkraft_root',
  password: 'Oluwaponire1234#',
  database: 'konkraf1_IOT'
});
*/

const db = mysql.createConnection({
    host: 'localhost',
    user: 'oluwaponire',
    password: 'oluwaponire1234#',
    database: 'konkraft_IOT'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;
