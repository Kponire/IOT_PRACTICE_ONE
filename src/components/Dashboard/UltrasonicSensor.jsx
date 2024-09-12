import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const UltrasonicSensor = ({ token }) => {
  const [distance, setDistance] = useState(0);

  const fetchDistance = async () => {
    const response = await axios.get('http://localhost:3000/api/sensor/ultrasonic-values', {
      headers: { Authorization: token },
    });
    setDistance(response.data[0].distance);
  };

  useEffect(() => {
    fetchDistance();
    socket.on('sensorUpdate', (data) => {
      console.log(data);
      if (data.id == "1") { // Assuming ID 1 for the sensor
        setDistance(data.distance);
      }
    });

    return () => {
      socket.off('sensorUpdate');
    };
    //const interval = setInterval(fetchDistance, 5000); // Fetch distance every 5 seconds
    //return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-64 border border-gray-400 relative">
        <div
          className="bg-blue-500 absolute bottom-0 w-full transition-all duration-500 ease-in-out"
          style={{ height: `${(distance / 400) * 100}%` }} // Assuming 400 cm as max distance
        />
      </div>
      <p className="mt-2 text-lg">Distance: {distance} cm</p>
    </div>
  );
};

export default UltrasonicSensor;
