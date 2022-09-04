import React, { useContext } from 'react';
import { LogForm } from '../App';
import Header from './Header';

const WelcomePage = ({ data }) => {
  const { setIsAutorised, isAutorised, setLogForm, logForm } = useContext(LogForm);

  const userName = data.map((user) => user.name).slice(-1);
  console.log(userName);

  return (
    <div>
      <Header />
      <div className='main-wrapper'>
        <h1 className='title'>{`Привет, ${userName}`}</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
