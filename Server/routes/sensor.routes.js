const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/ultrasonic-values', sensorController.getUltrasonicValues);
router.post('/update-ultrasonic-value', sensorController.updateUltrasonicValue);

module.exports = router;