
import Todoform from "./components/Todoform.js"
import Todolist from "./components/Todolist.js"
import React, { Component } from "react";
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
      enter: "To Do List"
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

addItem(value,index){
  if(value !== ""){
  var arr = [...this.state.list, {value: value, index: index, done: false}]
  // console.log(arr);
  this.setState({list: arr, enter : "To Do List"});
  }
  else{
      this.setState({enter:"Please enter something"});
    console.log("please enter something")}
  
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
   <div className="Appname">
     <div>{this.state.enter}</div>
        <div>
              <Todoform addItem={this.addItem} />
        </div>
        <div>
              <Todolist className="todolist" listItem={this.state.list} removeItem={this.removeItem} updateColor={this.updateColor}/>
        </div>
    </div>
  );
}
}
export default App;
