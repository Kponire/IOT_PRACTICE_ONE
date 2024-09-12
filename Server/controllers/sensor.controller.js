const db = require('../config/db.config');
const io = require('../index');

exports.getUltrasonicValues = (req, res) => {
  db.query('SELECT * FROM ultrasonic_sensors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.updateUltrasonicValue = (req, res) => {
  const { id, distance } = req.body;
  db.query('UPDATE ultrasonic_sensors SET distance = ? WHERE id = ?', [distance, id], err => {
    if (err) throw err;
    io.emit('sensorUpdate', { id, distance });
    res.send('Ultrasonic sensor value updated');
  });
};
