
import Todoform from "./components/Todoform.js"
import Todolist from "./components/Todolist.js"
import React, { Component } from "react";
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

addItem(value,index){
  var arr = [...this.state.list, {value: value, index: index, done: false}]
  // console.log(arr);
  this.setState({list: arr});
  
}
removeItem(index){
  // console.log(":",this.state.list[index]);
  // console.log(index);
  let arr = this.state.list;

  arr.splice(index,1)
  // console.log("console :",);
  
  this.setState({
    list: arr
  })
  
}

updateColor(index){
    // let arr2 = [this.state.list[index],{done:true}]
    let arr = this.state.list  
    // console.log(arr[index].done)
    // console.log(arr[index].done = !arr[index].done)
    arr[index].done = !arr[index].done
    this.setState({
      list: arr,
    })
    console.log("this state",arr)
}


render(){

  return (
   <div className="Appname">To Do List
     <Todoform addItem={this.addItem} />
     <Todolist className="todolist" listItem={this.state.list} removeItem={this.removeItem} updateColor={this.updateColor}/>
     
   </div>
  );
}
}
export default App;