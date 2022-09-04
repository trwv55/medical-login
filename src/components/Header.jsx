import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/header-logo.svg';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='info'>
        {/* <Link to='/contacts'> */}
        <a href='/contacts'>Контакты</a>
        {/* </Link> */}
        <div className='header-button'>
          <Button className='button-head' />
        </div>
      </ul>
    </div>
  );
};

export default Header;
