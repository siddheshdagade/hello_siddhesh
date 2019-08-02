import React, {Component} from "react";
import Counter from "./components/Counter";

class App extends Component
{
    render(){
        return (
            <React.Fragment>
                <Counter name="Siddhesh" incrementBy={5} />
                <Counter name="Abdullah" incrementBy={10} />
                <Counter name="Rasika" incrementBy={20} />
            </React.Fragment>
        )
    }
}



export default App;