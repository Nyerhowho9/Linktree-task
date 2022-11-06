import React from 'react';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import Contact from '../components/Contact';
import '../styles/main.css';
import Footer from '../components/footer';

function Contactus() {
  return (
    <div className="App">               
        <Contact/>
        <Footer/>
    </div>
  );
}

export default Contactus;
