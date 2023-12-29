// BookingList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = ({ loggedIn, onLogout }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then((response) => setBookings(response.data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Bookings</h2>
      <ul className="list-group">
        {bookings.map((booking) => (
          <li key={booking._id} className="list-group-item">
            <strong>{booking.movie.title}</strong> at {booking.theater.name} on {new Date(booking.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
