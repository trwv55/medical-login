import React, { useState, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './scss/app.scss';
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';

import mock from './mock.json';

export const LogForm = createContext();

function App() {
  const [logForm, setLogForm] = useState(false);
  const [data, setData] = useState(mock);
  const [isAutorised, setIsAutorised] = useState(false);

  return (
    <div className='app-wrapper'>
      <LogForm.Provider value={{ logForm, setLogForm, isAutorised, setIsAutorised }}>
        <>
          {logForm && <LoginForm data={data} setData={setData} />}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/success' element={<WelcomePage data={data} />} />
          </Routes>
        </>
      </LogForm.Provider>
    </div>
  );
}

export default App;
