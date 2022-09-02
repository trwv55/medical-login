import React, { useContext, useState } from 'react';
import { LogForm } from '../App';

const LoginForm = ({ data, setData }) => {
  const { setLogForm } = useContext(LogForm);
  const [values, setValues] = useState({
    login: data?.login,
    password: data?.password,
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ [fieldName]: e.target.value });
  };
  // const [login, setLogin] = useState(data?.login);
  // const [password, setPassword] = useState(data?.password);

  return (
    <div className='overlay'>
      <div className='center'>
        <h1>Log In</h1>
        <form>
          <div className='inputbox'>
            <input
              name='login'
              value={values.login}
              onChange={(e) => handleChange(e)}
              type='text'
              required='required'
            />
            <span>Login</span>
          </div>
          <div className='inputbox'>
            <input
              name='password'
              value={values.password}
              onChange={(e) => handleChange(e)}
              type='text'
              required='required'
            />
            <span>Password</span>
          </div>
          <div className='inputbox'>
            <button
              className='input-btn'
              type='button'
              value='submit'
              onClick={() => setLogForm(false)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
