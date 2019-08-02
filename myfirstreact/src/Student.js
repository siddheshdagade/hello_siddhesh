
import React, { Component } from "react";
const date= new Date();
function formatDate() {
    return date.toLocaleDateString();
  }
class Student extends Component{
   constructor(props){
       super(props);
       this.state ={
        name: "siddhesh dagade",
        imgurl: "https://placekitten.com/g/64/64",
        text: this.props.text,
        color: "My fav color is "+this.props.color
    };
   }

    render(){
        
        return ( <div className="basic_info">
    <div className="profile">
    <img
          className="Avatar"
          src={this.state.imgurl}
          alt={this.state.name}
        />
    </div>
    <div className= "profile_name">
        {this.state.name}
    </div>
    <div> {this.state.text} </div>
    <div>{this.state.color}</div>
    <div> {formatDate(this.state.date)} </div>
    </div>);
}

}
export default Student;