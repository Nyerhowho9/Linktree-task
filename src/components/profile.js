import React from "react";
import { Component } from "react";
import '../styles/main.css';
import img from '../images/ny.png';


class Profile extends Component {
    constructor(props){
        super(props);
    };
    render(){
        
      return <div>
        <div className="profile">
          <img src={img} alt="Nyerho profile pic" id="profile-picture" />
          <h2 id="twitter" > {this.props.twittername} </h2>
          <h2 id="slack" > Nyerho</h2>
        </div>
        
      </div>;  
    };
}
export default Profile;