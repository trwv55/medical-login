import React from 'react';
import Button from './Button';
import Box from './Box';
import box1 from '../assets/images/box1.svg';

const Main = () => {
  return (
    <div className='main-wrapper'>
      <h1 className='title'>
        Место для получения <br /> медицинской помощи
      </h1>
      <div className='buttons-main'>
        <Button />
        <Button />
      </div>
      <div className='boxes'>
        <Box image={box1} text='Онлайн прием' />
      </div>
    </div>
  );
};

export default Main;
