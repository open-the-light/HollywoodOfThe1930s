import React from 'react';

const StarWiki = (props) => {
  const { data } = props.location.state;
  return <div>{data.fullName}</div>;
};

export default StarWiki;
