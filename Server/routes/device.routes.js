const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');
const relayController = require('../controllers/relay.controller');

// Routes not requiring authentication
router.post('/update-sensor', sensorController.updateUltrasonicValue);
router.post('/relay-status', relayController.checkRelayStatus);

module.exports = router;
