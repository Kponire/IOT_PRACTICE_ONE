const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

module.exports = io;

const authRoutes = require('./routes/auth.routes');
const relayRoutes = require('./routes/relay.routes');
const sensorRoutes = require('./routes/sensor.routes');
const devicesRoutes = require('./routes/device.routes');

app.use('/api/auth', authRoutes);
app.use('/api/relay', relayRoutes);
app.use('/api/sensor', sensorRoutes);
app.use('/api/devices', devicesRoutes);

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});