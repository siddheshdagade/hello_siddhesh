import React, {Component} from "react";
import Counter from "./components/Counter";
import Todolist from "./components/todolist";
import TTdoolist from "./components/Todolist1";


class App extends Component{
    render(){
        return(<div>
            {/* <Counter name="siddhesh"/>
            <Counter name="sai"/>
            <Counter name="aditya"/>
            <Counter name="priyanka"/> */}
            {/* <Todolist /> */}
            <TTdoolist />

            </div>
        );
    }
}
export default App;