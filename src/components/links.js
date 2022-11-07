import React from "react";
import { Component } from "react";
import slack from '../images/slack.png'
import git from '../images/git.png'
import { Route, Link } from 'react-router-dom';
import '../styles/main.css';


class Links extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return <div>
            <div id="cont">
                <a id="twitter_btn" href="https://twitter.com/home">Twitter</a>
                <a id="btn_zuri" href="https://training.zuri.team/">Zuri Team</a>
                <a id="books" href=" https://books.zuri.team/python-for-beginners" title="Books on coding and design can be found here">Zuri Books</a>
                <a id="book__python" href=" https://books.zuri.team/python-for-beginners?ref_id" title="Python for beginners to learning coding">Python Books</a>
                <a id="pitch" href="https://background.zuri.team/" title="Best services rendered for getting background check on coders">Background check for coders</a>
                <a id="book__design" href="https://books.zuri.team/design-rules" title="Learn design for free, with this great book, 'HNG design rules' ">Design Books</a>  
                <Link to="/contact" id="contact">Contact Me</Link>
                
                <div id="social-icons">
                    <img src={slack} id="slack-icon" alt="slack icon"/>
                    <img src={git} id="git-icon" alt="github icon"/>
                </div>
                
            </div>
            
        </div>;
    }
}
export default Links;