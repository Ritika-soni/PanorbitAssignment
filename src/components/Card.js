import React from 'react';

const Card = ({ name, profilepicture, id }) => {
  return (
    <div className='tc grow bg-light-white w5 br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>{profilepicture}</p>
      </div>
    </div>
  );
}

export default Card;
