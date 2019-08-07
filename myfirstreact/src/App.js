import React, {Component} from "react";
import Counter from "./components/Counter";
import Todolist from "./components/todolist";
import TTdoolist from "./components/Todolist1";
import "./App.css"


class App extends Component{
    render(){
        return(<div className="todo">
            {/* <Counter name="siddhesh"/>
            <Counter name="sai"/>
            <Counter name="aditya"/>
            <Counter name="priyanka"/> */}
            {/* <Todolist /> */}
            <TTdoolist className="todoList" />

            </div>
        );
    }
}
export default App;