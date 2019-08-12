import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "./Todolist1.css"

class TToodolist extends Component{
    constructor(props){
        super(props);
        this.state={
            msg: "TO DO LIST",
            list: [],
            inputValue: "asasasa"
        }
        this.addList = this.addList.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.remove = this.remove.bind(this);
        this.strike = this.strike.bind(this);
    }
    strike(i){
        let x = this.state.list
        x[i].done = !x[i].done

        this.setState({
            list: x
        })
    }
    updateInputValue(s){
        this.setState({inputValue : s.target.value})
    }
    addList(){
        if(this.state.inputValue !== ""){
        var newList = [...this.state.list, {value : this.state.inputValue, done:false}]
    //     newList.push(this.state.inputValue);
        console.log(newList);
        this.setState({
            msg:"TO DO LIST",
            list: newList ,
            inputValue : ""})
        }
        else{this.setState({msg: "Please enter something"})}
    }

    remove(i) {
        // console.log('i', i);
        // console.log('this item', this.state.list[i])
        let rem = this.state.list
        rem.splice(i,1);
        this.setState({
            list: rem
        })
    }
    render(){
        return(<div className="mainClass">
            <span>{this.state.msg}</span>
                    <div className="buttonClass">
                        <input id="input" 
                            type="text" 
                            value={this.state.inputValue} 
                            onChange={this.updateInputValue}
                            
                            autoComplete="off"
                        />

                        <button type="button" 
                                onClick={this.addList}>
                                Add Me
                        </button>
                    </div>
                    <div className="listClass">
                        <ul>
                            {this.state.list.map((item, index) => 
                                <li key={index}>
                                    <button onClick={() => this.strike(index)}>✓</button>
                                    <span className={item.done ? "undone":"done"}>{item.value}</span>
                                    <button onClick={() => this.remove(index)}>x</button>
                                </li>
                            )}        
                        </ul>
                    </div>
                </div>);
    }
}
export default TToodolist;