const db = require('../config/db.config');

const Sensor = {
  findAll: (callback) => {
    db.query('SELECT * FROM ultrasonic_sensors', callback);
  },
  update: (id, distance, callback) => {
    db.query('UPDATE ultrasonic_sensors SET distance = ? WHERE id = ?', [distance, id], callback);
  }
};

module.exports = Sensor;
