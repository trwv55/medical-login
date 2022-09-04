import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogForm } from '../App';
import Header from './Header';
import Button from './Button';

const WelcomePage = ({ data }) => {
  const { setIsAutorised, isAutorised, setLogForm, logForm } = useContext(LogForm);

  const userName = data.map((user) => user.name).slice(-1);
  return (
    <div>
      <Header />
      <div className='main-wrapper'>
        <h1 className='title title-wp'>{`Привет, ${userName}`}</h1>
        <div className='buttons-main'>
          <Button className='btn-main-wp' />
          <Link to='/contacts'>
            <button className='btn-contacts btn-contacts-wp'>Перейти в контакты</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
