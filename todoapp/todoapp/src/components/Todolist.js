import React, { Component  } from "react";
import "./Todolist.css"
class Todolist extends Component{
 constructor(props){
     
     super(props);
     this.state={
        list: this.props.list
     }
     
    this.deleteItem = this.deleteItem.bind(this);
    this.colorItem = this.colorItem.bind(this);
    
    
 }
    colorItem(index){
        const va = this.props.listItem
        console.log(va)
        
        this.props.updateColor(index);
       }

    deleteItem(i){
        this.props.removeItem(i);
        console.log(i);
    }
    render(){
        const listItem = this.props.listItem;
        // console.log(this.props.listItem.value);
        // console.log(listItem.done);
        //const { listItem } = this.props;
        return(<div className="App">
          <ul >
             {listItem.map( (value,index)=>{
                 
                //  console.log(index);
                  console.log(value.done)
                 return <li key={index} >
                            <button onClick={()=> this.colorItem(index, value.done)}>✓</button>
                            <span className={value.done? "undone" : "done"}>{value.value}</span>
                            <button onClick={()=>this.deleteItem(index)}>X</button>
                        </li>
             } )}
          </ul>
        </div>);
    }
}
export default Todolist; 