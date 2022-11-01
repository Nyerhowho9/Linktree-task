import React from "react";
import { Component } from "react";
import zuri from '../images/zuri.png';
import i4g from '../images/I4G.png'

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <div id="footer">
                <img src={zuri} alt='zuri internship logo' />
                <p id="footer-text">HNG Internship 9 Frontend Task</p>
                <img src={i4g} alt='Ingressive for good logo' />
            </div>
        </div>;
    }
}

export default Footer;