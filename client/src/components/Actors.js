import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Actors = () => {
  const [actor, setActor] = useState(
    'This will be a place to show all actors in the database'
  );
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('/api/get_star');
      setActor(data.data);
    };
    getData();
  }, []);
  return (
    <div className='hero is-fullheight-with-navbar has-background-grey-light'>
      {actor.fullName}
    </div>
  );
};

export default Actors;
