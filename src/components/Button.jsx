import React, { useContext } from 'react';
import { LogForm } from '../App';

const Button = ({ className }) => {
  const { logForm, setLogForm } = useContext(LogForm);
  return (
    <button className={className} onClick={() => setLogForm(!logForm)}>
      Войти
    </button>
  );
};

export default Button;
