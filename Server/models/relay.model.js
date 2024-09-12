const db = require('../config/db.config');

const Relay = {
  findById: (id, callback) => {
    db.query('SELECT * FROM relays WHERE id = ?', [id], callback);
  },
  updateStatus: (id, status, callback) => {
    db.query('UPDATE relays SET status = ? WHERE id = ?', [status, id], callback);
  }
};

module.exports = Relay;
