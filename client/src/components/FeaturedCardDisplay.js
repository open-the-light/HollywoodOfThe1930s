import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedCard from './FeaturedCard';

const FeaturedCardDisplay = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get('/api/get_featured_list');
      const items = data.map((d) => {
        return <FeaturedCard data={d} />;
      });
      setList(items);
    };
    getList();
  }, []);
  return <div className='columns is-centered'>{list}</div>;
};

export default FeaturedCardDisplay;
