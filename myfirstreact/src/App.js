import React, {Component} from "react";
import Counter from "./components/Counter";

class App extends Component{
    render(){
        return(<div>
            <Counter name="siddhesh"/>
            <Counter name="sai"/>
            <Counter name="aditya"/>
            <Counter name="priyanka"/>
            </div>
        );
    }
}
export default App;