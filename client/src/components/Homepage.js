import React from 'react';
import FeaturedCardDisplay from './FeaturedCardDisplay';

const Homepage = () => {
  return (
    <>
      <section className='hero is-fullheight-with-navbar has-background-grey-light'>
        <figure className='image'>
          <img
            src='https://filmforum.org/do-not-enter-or-modify-or-erase/client-uploads/lubitsch/_1000w/TROUBLE-IN-PARADISE-web2050.jpg'
            alt='hero'
          />
        </figure>
      </section>

      <section className='section'>
        <div className='container has-text-centered'>
          <h1 className='title'>Hollywood of the 1930's</h1>
          <p>
            The 1930's was a time of great success for Hollywood, produing many
            great films and launching the careers of great actors who would go
            on to star in countless great pieces of cinema. The pre-Code era in
            particular stands out as a time where films felt more real and
            mature, with films containing promiscuity, violence, prostitution
            and much more.
          </p>
          <br />
          <p>
            This site aims to document the stars and films of this era and shine
            a spotlight on those that may be underrated and forgotton by modern
            audiences.
          </p>
        </div>
      </section>

      <section className='section'>
        <div className='container has-text-centered'>
          <h2 className='title'>Featured Stars</h2>
        </div>
      </section>

      <section className='section'>
        <FeaturedCardDisplay />
      </section>
    </>
  );
};

export default Homepage;
