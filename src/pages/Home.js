import React from 'react';
import { Route } from 'react-router-dom';
import icon from '../images/Icon.png';
import Profile from '../components/profile';
import Links from '../components/links';
import Footer from '../components/footer';
import '../styles/main.css'

function Home() {
  return (
    <div className="App">
        <div className='upicon'>
            <img id='forward-icon'  alt="" src={icon}/>
        </div>
        
        <Profile twittername="ny_wura"  />
        <Links />         
        <Footer/>
    </div>
  );
}

export default Home;
