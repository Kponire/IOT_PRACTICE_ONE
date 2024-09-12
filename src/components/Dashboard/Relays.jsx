import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Relays = ({ token }) => {
  const [relays, setRelays] = useState([]);

  const toggleRelay = async (id) => {
    await axios.post(
      'http://localhost:3000/api/relay/toggle-relay',
      { id },
      //{ headers: { Authorization: token } }
    );
    fetchRelays();
  };

  const fetchRelays = async () => {
    const response = await axios.get('http://localhost:3000/api/relay/get-relays', {
      //headers: { Authorization: token },
    });
    setRelays(response.data);
  };

  useEffect(() => {
    fetchRelays();
  }, []);

  return (
    <div className="flex flex-row gap-2 items-center">
      {relays.map((relay, index) => (
        <button
          key={relay.id}
          onClick={() => toggleRelay(relay.id)}
          className={`px-4 py-2 mb-2 rounded ${relay.status ? 'bg-green-500' : 'bg-red-500'}`}
        >
          Relay {index + 1} - {relay.status == 1 ? 'ON' : 'OFF'}
        </button>
      ))}
    </div>
  );
};

export default Relays;
