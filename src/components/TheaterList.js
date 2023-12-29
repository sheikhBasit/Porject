// TheaterList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheaterList = ({ loggedIn, onLogout }) => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    axios.get('/api/theaters')
      .then((response) => setTheaters(response.data))
      .catch((error) => console.error('Error fetching theaters:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Theaters</h2>
      <ul className="list-group">
        {theaters.map((theater) => (
          <li key={theater._id} className="list-group-item">
            <strong>{theater.name}</strong> - {theater.location} (Capacity: {theater.capacity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheaterList;
