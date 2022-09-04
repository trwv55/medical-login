import React, { useContext } from 'react';
import { LogForm } from '../App';
import { useNavigate, useLocation } from 'react-router';

const Button = ({ className }) => {
  const { setIsAutorised, isAutorised, setLogForm, logForm } = useContext(LogForm);
  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setLogForm(!logForm);

    if (isAutorised) {
      setIsAutorised(false);
      navigate('/');
      setLogForm(false);
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
