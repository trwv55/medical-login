import React, { useState, createContext } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import LoginForm from './components/LoginForm';

import mock from './mock.json';

export const LogForm = createContext();

function App() {
  const [logForm, setLogForm] = useState(false);
  const [data, setData] = useState(mock);

  return (
    <div className='app-wrapper'>
      <LogForm.Provider value={{ logForm, setLogForm }}>
        {logForm && <LoginForm data={data} setData={setData} />}
        <Header />
        <Main />
      </LogForm.Provider>
    </div>
  );
}

export default App;
