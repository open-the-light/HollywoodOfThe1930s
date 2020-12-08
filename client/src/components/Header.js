import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      className='navbar is-dark'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <p className='navbar-item'>Hollywood of the 1930's</p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/actor_list' className='navbar-item'>
            Actors
          </Link>
        </div>
        <div className='navbar-end'>
          <Link to='/login' className='navbar-item'>
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
