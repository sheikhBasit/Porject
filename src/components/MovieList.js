// MovieList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ loggedIn, onLogout }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then((response) => setMovies(response.data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Movies</h2>
      <ul className="list-group">
        {movies.map((movie) => (
          <li key={movie._id} className="list-group-item">
            <strong>{movie.title}</strong> - {movie.description} ({new Date(movie.releaseDate).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
