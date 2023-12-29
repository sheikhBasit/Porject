// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import TheaterList from './components/TheaterList';
import BookingList from './components/BookingList';
import ItemForm from './components/ItemForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/movies" component={MovieList} />
          <Route path="/theaters" component={TheaterList} />
          <Route path="/bookings" component={BookingList} />
          {/* Add routes for ItemForm based on the item type (Movie/Theater/Booking) */}
          <Route path="/create/:type" component={ItemForm} />
          <Route path="/edit/:type/:id" component={ItemForm} />
          <Route path="/" component={MovieList} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
