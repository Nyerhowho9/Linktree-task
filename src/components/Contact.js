import React from "react";
import { Component } from "react";
import '../styles/main.css';

class Contact extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form>
                <div className="names">
                    <div className="firstnamediv">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name"/>
                    </div>
                    <div className="lastnamediv">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name"/>
                    </div>

                </div>
                <div className="emaildiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="ny@email.com"/>
                </div>
                <div className="messagediv">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>You agree to providing your data to (Nyerho) who may contact you.</label>
                </div>
                <button id="btn__submit">Send message</button>
            </form>
        </div>;
    }
}
export default Contact;