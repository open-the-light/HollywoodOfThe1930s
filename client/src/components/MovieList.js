import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  if (movies) {
    return movies.map((movie) => {
      return (
        <div key={movie.id} className='card'>
          <header className='card-header'>
            <Link to={`/movies/{movie.id}`}>{movie.title}</Link>
          </header>
          <div className='card-content'>
            <div className='content'>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return <div></div>;
};

export default MovieList;
