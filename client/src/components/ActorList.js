import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActorCard from './ActorCard';

const ActorList = () => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('/api/get_all_stars');
      const items = data.data.map((d) => {
        return <ActorCard data={d} key={d.id} />;
      });
      setActors(items);
    };
    getData();
  }, []);
  return (
    <div className='columns'>
      <div className='column'>{actors.filter((e, i) => i % 4 === 0)}</div>
      <div className='column'>{actors.filter((e, i) => (i - 1) % 4 === 0)}</div>
      <div className='column'>{actors.filter((e, i) => (i - 2) % 4 === 0)}</div>
      <div className='column'>{actors.filter((e, i) => (i - 3) % 4 === 0)}</div>
    </div>
  );
};

export default ActorList;
