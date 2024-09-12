const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) throw err;
    res.status(201).send('User registered successfully');
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0) return res.status(404).send('User not found');
    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send('Invalid password');
    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
};
