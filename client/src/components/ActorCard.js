import React from 'react';
import { Link } from 'react-router-dom';

const ActorCard = ({ data }) => {
  return (
    <div className='card' style={{ margin: '15px 0' }}>
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
  );
};

export default ActorCard;
