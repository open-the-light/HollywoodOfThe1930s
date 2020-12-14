import React from 'react';
import ActorList from './ActorList';

const Actors = () => {
  return (
    <div className='hero is-fullheight-with-navbar has-background-grey-light'>
      <section className='section'>
        <h2 className='title'>All Actors:</h2>
        <ActorList />
      </section>
    </div>
  );
};

export default Actors;
