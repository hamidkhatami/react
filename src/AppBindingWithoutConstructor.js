import React, { Component } from "react";
import "./App.css";
import "./developer.js";

//Explain Binding component
class App extends Component {
    
    onClick=()=>
    {
        console.log(this);
    }
    

    
    render() {

        return (
            <button onClick={this.onClick} type="button">
                Click me

            </button>

            
            
            
        );
    }
}
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());

export default App;
