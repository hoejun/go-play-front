import React from 'react';
import SideMenu from './components/Layout/SideMenu';
import Header from './components/Layout/Header';
import Center from './components/Layout/Center';
import './App.css';

function App() {
  return (
    <div id='background_img'>
      <div id='main'>
        <SideMenu />
        <div id='main_body'>
          <Header />
          <Center />
        </div>
      </div>
    </div>
  );
}

export default App;
