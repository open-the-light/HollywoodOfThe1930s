import React from 'react';

const LoginPage = () => {
  return (
    <div className='hero is-fullheight-with-navbar has-background-grey-light'>
      <div className='columns is-desktop is-vcentered'>
        <div className='column is-4'></div>
        <div className='column is-4 center-items'>
          <div className='log-in-tile'>
            <h2 className='log-in-text'>Log In:</h2>
            <a href='/auth/google'>
              <button class='button is-light log-in-buttons'>
                Log In with Google
              </button>
            </a>

            <br />
            <button class='button is-light log-in-buttons'>
              Log In with Github
            </button>
          </div>
        </div>
        <div className='column is-4'></div>
      </div>
    </div>
  );
};

export default LoginPage;
