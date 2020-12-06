import React from 'react';

const StarWiki = (props) => {
  const { data } = props.location.state;
  return (
    <div className='hero is-fullheight-with-navbar has-background-grey-light'>
      <div className='tile is-ancestor'>
        <div className='tile is-vertical is-4'>
          <div className='tile is-parent'>
            <article className='tile is-child'>
              <p className='title'>{data.fullName}</p>
              <img className='image is4by5' alt='starpage' src={data.image} />
            </article>
          </div>
        </div>
        <div className='tile is-vertical is-4'></div>
        <div className='tile is-vertical is-4'></div>
      </div>
    </div>
  );
};

export default StarWiki;
