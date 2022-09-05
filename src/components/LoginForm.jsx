import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { LogForm } from '../App';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ data, setData }) => {
  let navigate = useNavigate();
  const { setLogForm, setIsAutorised } = useContext(LogForm);
  const [passwordErr, setPasswordErr] = useState('Пароль должен быть минимум 8 символов');
  const [login, setLogin] = useState(data[0]?.login);
  const [password, setPassword] = useState(data[0]?.password);

  const handlePasswordChange = (e) => {
    const pas = e.target.value;
    setPassword(pas);
    if (pas.length < 8) {
      setPasswordErr('Введен некорректный пароль');
    } else {
      setPasswordErr('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      login: login,
      password: password,
      name: login,
    };

    if (passwordErr === '') {
      setData([...data, newUser]);
      setLogForm(false);
      setIsAutorised(true);
      navigate('/success');
    }
  };

  return (
    <div className='overlay'>
      <div className='center'>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className='inputbox'>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type='text'
              required='required'
            />
            <span>Имя</span>
          </div>
          <div className='inputbox'>
            <input
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              type='text'
              required='required'
            />
            <div style={{ color: 'red' }}>{passwordErr}</div>

            <span>Пароль</span>
          </div>
          <div className='inputbox'>
            <button className='input-btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
