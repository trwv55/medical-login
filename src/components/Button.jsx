import React, { useContext } from 'react';
import { LogForm } from '../App';
import { useNavigate, useLocation } from 'react-router';

const Button = ({ className }) => {
  const { setIsAutorised, isAutorised, setLogForm, logForm } = useContext(LogForm);
  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setIsAutorised(!isAutorised);
    setLogForm(!logForm);

    if (location.pathname === '/success') {
      setLogForm(false);
      navigate('/');
    }
  };

  return (
    <div className='button-wrapper'>
      <button onClick={handleClick} className={className}>
        {isAutorised ? 'Выйти' : 'Войти'}
      </button>
    </div>
  );
};

export default Button;
