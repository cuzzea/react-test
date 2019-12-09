import React from 'react';
import logo from 'logo.svg';
import './app.css';
import MyRouter from 'usables/router';

const App: React.FC = () => {
  return (
    <div className="App">
      <MyRouter />
      <header className="App-header">
        <img src={logo} width="100px" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
