import React from "react";
import { Component } from "react";
import '../styles/main.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return <div>
            <div className="headingdiv">
                <h1 className="contactHeading">Contact Me</h1>
                <p className="contactPara">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <form className="contactForm">
                <div className="names">
                    <div className="fnamediv">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name"/>
                    </div>
                    <div className="lnamediv">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name"/>
                    </div>

                </div>
                <div className="emaildiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="yourname@email.com"/>
                </div>
                <div className="messagediv">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                </div>
                <div className="check">
                    <input type="checkbox" className="tick"/>
                    <label>You agree to providing your data to (Nyerho) who may contact you.</label>
                </div>
                <button id="btn__submit" type="submit" onClick={this.handleSubmit}>Send message</button>
            </form>
        </div>;
    }
}
export default Contact;