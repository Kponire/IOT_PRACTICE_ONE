import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Relays from './components/Dashboard/Relays';
import UltrasonicSensor from './components/Dashboard/UltrasonicSensor';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);

  /*if (!token) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <Login setToken={setToken} />
        <h1 className="text-2xl font-bold mb-4 mt-4">Register</h1>
        <Register />
      </div>
    );
  } */

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">IoT Dashboard</h1>
      <Relays token={token} />
      <UltrasonicSensor token={token} />
    </div>
  );
};

export default App;
