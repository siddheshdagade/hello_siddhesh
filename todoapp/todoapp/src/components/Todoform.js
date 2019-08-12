import React, { Component } from "react";
import "./Todolist.css"
class Todoform extends Component{
    constructor(props){
        super(props);
        this.state={
            inputvalue: ""
        }
        this.changeInput = this.changeInput.bind(this);
        this.addnewItem = this.addnewItem.bind(this);
    }

    changeInput(e){
        this.setState({
            inputvalue: e.target.value
        })
    }
    addnewItem(){
        this.props.addItem(this.state.inputvalue)
        this.setState({inputvalue:""})
        console.log(this.state.inputvalue)
    }
    

    render(){
       
        return(<div className="formInput">
            <input type="text" value={this.state.inputvalue} onChange={this.changeInput} />
            
            <button type="button" onClick={this.addnewItem}>Add Me</button>


        </div>);
    }
}
export default Todoform;