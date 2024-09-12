const express = require('express');
const router = express.Router();
const relayController = require('../controllers/relay.controller');
const verifyToken = require('../middleware/auth.middleware');

router.post('/toggle-relay', relayController.toggleRelay);
router.post('/check-relay-status', verifyToken, relayController.checkRelayStatus);
router.get('/get-relays', relayController.getAllRelays);

module.exports = router;
