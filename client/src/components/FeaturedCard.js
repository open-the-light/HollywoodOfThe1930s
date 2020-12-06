import React from 'react';
import ActorCard from './ActorCard';

const FeaturedCard = ({ data }) => {
  return (
    <div className='column'>
      <ActorCard data={data} />
    </div>
  );
};

export default FeaturedCard;
