import React, { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';
import Contacts from './components/Contacts';

import mock from './mock.json';

export const LogForm = createContext();

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('data')) || mock;
  const [logForm, setLogForm] = useState(false);
  const [data, setData] = useState(initialState);
  const [isAutorised, setIsAutorised] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className='app-wrapper'>
      <LogForm.Provider value={{ logForm, setLogForm, isAutorised, setIsAutorised }}>
        <>
          {!isAutorised && logForm && <LoginForm data={data} setData={setData} />}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/success' element={<WelcomePage data={data} />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </>
      </LogForm.Provider>
    </div>
  );
}

export default App;
