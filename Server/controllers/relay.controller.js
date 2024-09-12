const db = require('../config/db.config');

exports.toggleRelay = (req, res) => {
  const { id } = req.body;
  db.query('SELECT * FROM relays WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    const status = results[0].status;
    //console.log(status);
    const newStatus = status == 0 ? 1 : 0;
    //console.log(newStatus);
    db.query('UPDATE relays SET status = ? WHERE id = ?', [newStatus, id], err => {
      if (err) throw err;
      res.json({ status: newStatus });
    });
  });
};

exports.checkRelayStatus = (req, res) => {
  const { id } = req.body;
  db.query('SELECT * FROM relays WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ status: results[0].status });
  });
};

exports.getAllRelays = (req, res) => {
  db.query('SELECT * FROM relays', (err, results) => {
    if (err) throw err;
    res.json(results);
  })
}
