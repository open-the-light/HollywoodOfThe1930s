import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  if (movies) {
    return movies
      .sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
      .map((movie) => {
        return (
          <div key={movie.id} className='card'>
            <header className='card-header'>
              <Link to={{ pathname: `/movies/${movie.id}`, state: movie }}>
                {movie.title}
              </Link>
            </header>
            <div className='card-content'>
              <div className='content'>
                <p>Release Date: {movie.release_date}</p>
              </div>
            </div>
          </div>
        );
      });
  }
  return <div></div>;
};

export default MovieList;
