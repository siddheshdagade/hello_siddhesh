import React, { Component } from "react";
class TToodolist extends Component{
    constructor(props){
        super(props);
        this.state={
            list: [],
            inputValue: "asasasa"
        }
        this.addList = this.addList.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.remove = this.remove.bind(this);
    }

    updateInputValue(s){
        this.setState({inputValue : s.target.value})
    }
    addList(){
       var newList = this.state.list;
        newList.push(this.state.inputValue);

        this.setState({
            list: newList ,
            inputValue : ""})
    }
    remove(i) {
        console.log('i', i);
        console.log('this item', this.state.list[i])
        let rem = this.state.list
        rem.splice(i,1);
        this.setState({
            list: rem
        })
    }
    render(){
        return(<div>
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
                <div><ul>
                        {this.state.list.map((item, index) => 
                            <li key={index}>
                                <span>{item}</span>
                                <button onClick={() => this.remove(index)}>x</button>
                            </li>
                        )}        
                    </ul></div>
        </div>);
    }
}
export default TToodolist;