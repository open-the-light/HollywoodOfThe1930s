import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const tmdb_key = 'bf4b0991505e1b312ba71d73dd074d03';

const StarWiki = (props) => {
  const { data } = props.location.state;
  const [bio, setBio] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getBio = async () => {
      const req = await axios.get(
        `https://api.themoviedb.org/3/person/${data.tmdb_id}`,
        {
          params: {
            api_key: tmdb_key,
          },
        }
      );
      setBio(req.data.biography);
    };
    getBio();
  }, [data]);

  useEffect(() => {
    const getMovies = async () => {
      const req = await axios.get(
        `https://api.themoviedb.org/3/person/${data.tmdb_id}/movie_credits`,
        {
          params: {
            api_key: tmdb_key,
          },
        }
      );
      setMovies(req.data.cast);
    };
    getMovies();
  }, [data]);

  return (
    <div className='hero is-fullheight-with-navbar has-background-grey-light'>
      <div className='hero-body'>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-4 is-parent'>
              <div className='tile is-child'>
                <p className='title featured-title'>{data.fullName}</p>
                <img src={data.image} alt={data.fullName} />
              </div>
            </div>
            <div className='tile is-4 is-parent'>
              <div className='tile is-child'>
                <p>{bio}</p>
              </div>
            </div>
            <div className='tile is-4 is-parent'>
              <div className='tile is-child'>
                <p className='title featured-title'>Movies:</p>
                <div className='movie-container'>
                  <MovieList movies={movies} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarWiki;
