import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieWiki = (props) => {
  const { data } = props.location.state;

  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      console.log('starting search');
      const movieData = await axios.get('/api/get_movie_by_title', {
        params: {
          title: data.title,
        },
      });
      setMovie(movieData.data);
    };
    getMovie();
  }, [data]);
  return <div>{movie.title}</div>;
};

export default MovieWiki;
