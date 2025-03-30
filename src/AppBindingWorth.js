import React, { Component } from "react";
import "./App.css";
import "./developer.js";

//Explain Binding component
class App extends Component {
    constructor() {
        super();
        
     this.doSomthing=this.doSomthing.bind(this);
     this.doSomethingElse=this.doSomethingElse.bind(this);

    }
    doSomthing=()=>
    {
        //Do some thing
    }
    doSomethingElse=()=>
    {
        //Do Some thing Else
    }

    
    render() {

        return (
            <button onClick={this.doSomthing} type="button">
                Click me

            </button>

            
            
            
        );
    }
}
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());

export default App;
