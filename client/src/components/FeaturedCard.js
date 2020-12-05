import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ data }) => {
  return (
    <div className='column'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by5'>
            <img src={data.image} alt='featured' />
          </figure>
        </div>
        <div className='card-content'>
          <Link
            className='title'
            to={{ pathname: `/actors/${data.link}`, state: { data: data } }}
          >
            {data.fullName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
