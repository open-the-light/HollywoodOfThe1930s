import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieWiki = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      let movieData = {};
      if (props.location.state.release_date === undefined) {
        movieData = await axios.get('/api/get_movie_by_tmdb_id', {
          params: {
            id: props.location.state.data.tmdb_id,
          },
        });
      } else {
        movieData = await axios.get('/api/get_movie_by_title', {
          params: {
            title: props.location.state.title,
            release_date: props.location.state.release_date,
          },
        });
      }
      setMovie(movieData.data);
    };
    getMovie();
  }, [props.location.state]);

  if (movie.poster_path !== undefined) {
    console.log('were here');
    console.log(movie);
    console.log(Boolean(movie));
    return (
      <div className='hero is-fullheight-with-navbar has-background-grey-light'>
        <div className='hero-body'>
          <div className='container'>
            <div className='tile is-ancestor'>
              <div className='tile is-4 is-parent'>
                <div className='tile is-child'>
                  <p className='title featured-title'>{movie.title}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </div>
              <div className='tile is-4 is-parent'>
                <div className='tile is-child'>
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className='tile is-4 is-parent'>
                <div className='tile is-child'>
                  <p className='title featured-title'>Cast:</p>
                  <div className='movie-container'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MovieWiki;
