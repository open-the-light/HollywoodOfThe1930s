import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeaturedMovieCard = ({ id }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get('/api/get_movie_by_id', {
        params: { id: id },
      });
      setMovie(data);
    };
    getMovie();
  }, [id]);
  if (!movie) {
    return null;
  } else {
    return (
      <div className='card' style={{ margin: '15px 0' }}>
        <div className='card-image'>
          <figure className='image is-5by4'>
            <img src={movie.screenshot} alt='featured' />
          </figure>
        </div>
        <div className='card-content'>
          <Link
            className='title'
            to={{ pathname: `/movies/${movie.link}`, state: { data: movie } }}
          >
            {movie.title + ' (' + movie.year + ')'}
          </Link>
        </div>
      </div>
    );
  }
};

export default FeaturedMovieCard;
