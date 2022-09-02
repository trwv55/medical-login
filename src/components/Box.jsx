import React from 'react';

const Box = ({ image, text }) => {
  return (
    <div className='box'>
      <div className='box-wrapper'>
        <img src={image} />
        <h5>{text}</h5>
        <p>Рыба текст</p>
      </div>
    </div>
  );
};

export default Box;
