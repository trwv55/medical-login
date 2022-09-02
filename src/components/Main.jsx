import React from 'react';
import Button from './Button';
import Box from './Box';
import box1 from '../assets/images/box1.svg';
import box2 from '../assets/images/box2.svg';
import box3 from '../assets/images/box3.svg';

const Main = () => {
  return (
    <div className='main-wrapper'>
      <h1 className='title'>
        Место для получения <br /> медицинской помощи
      </h1>
      <div className='buttons-main'>
        <Button className='btn-main' />
        <button className='btn-contacts'>Контакты</button>
      </div>
      <div className='boxes'>
        <Box image={box1} text='Онлайн прием' />
        <Box image={box2} text='Экстренный Случай' />
        <Box image={box3} text='Лечение рака' />
      </div>
    </div>
  );
};

export default Main;
