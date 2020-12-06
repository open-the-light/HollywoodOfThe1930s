import React from 'react';

const MovieWiki = (props) => {
  const { data } = props.location.state;
  return <div>{data.title}</div>;
};

export default MovieWiki;
