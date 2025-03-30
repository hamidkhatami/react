import React, { Component } from "react";
import "./App.css";
import "./developer.js";

//Explain Binding component
class App extends Component {
    constructor() {
        super();
    }
    onClick()
    {
        console.log(this);
    }

    render() {

        return (
            <button 
            onClick={
                //Avoid This
                this.onClick.bind(this)
                } type="button">
                Click me1

            </button>

            
            
            
        );
    }
}
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());

export default App;
