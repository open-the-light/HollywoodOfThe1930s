import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FeaturedCard from './FeaturedCard';
import FeaturedCardDisplay from './FeaturedCardDisplay';
import ActorList from './ActorList';
import ActorCard from './ActorCard';

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
