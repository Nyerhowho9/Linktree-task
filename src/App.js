import React from 'react';
import './App.css';
import icon from '../src/images/Icon.png';
import Profile from './components/profile';
import Links from './components/links';
import Footer from './components/footer';
import '../src/styles/main.css';

function App() {
  return (
    <div className="App">
        <img id='forward-icon'  alt="" src={icon}/>
        <Profile twittername="ny_wura"  />
        <Links />
        <Footer/>
    </div>
  );
}

export default App;
