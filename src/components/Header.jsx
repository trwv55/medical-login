import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/header-logo.svg';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
      </Link>
      <ul className='info'>
        <a href='/contacts'>Контакты</a>
        <div className='header-button'>
          <Button className='button-head' />
        </div>
      </ul>
    </div>
  );
};

export default Header;
