import React, { Component } from "react";
import "./App.css";
import "./developer.js";

const list = [
    {
        title: "React",
        url: "www.leankanban.ir",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "google.com",
        author: "Hamid khatami, soheil jahangiri",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
//---------------------------------------------------------
//ES5
//  const fName='Hamid';
//  const user={
//      name:name
//  };
// |
// v
//ES6
const fName = "Hamid";
const user = {
    fName,
};
//---------------------------------------------------------
//ES5
//   var userService={
//       getUserName:function(user)
//       {
//           return user.firstname+' '+user.lastname
//       }
//   }
// |
// V

//ES6
const userService = {
    getUserName(user) {
        return user.firstname + " " + user.lastname;
    },
};

//---------------------------------------------------------
//ES5
// var usertest=
// {
//     name:'test'
// }
// |
// V
//ES6

const key = "name";
const usertest = {
    [key]: "test",
};

class App extends Component {
    constructor(props) {
        super(props);
        //ES5
        // this.state={
        //     list:list
        // }
        // |
        // v
        //ES6
        this.state = {
            list,
        };
        this.onDismiss=this.onDismiss.bind(this);
        
    }
    onDismiss(id)
    {
         
            const isNotID= item=>item.objectID!=id;
            const list=this.state.list.filter(isNotID);
            debugger;
            this.setState({list});
    }

    render() {

        return (
            <div className="App">
                {
                    /* 
          function expression
          //function () { ... }
          
           arrow function expression
          () => { ... }
                    // don't do this
          */

                    /*
           allowed
          item => { ... }
           allowed
          (item) => { ... }
           not allowed
          item, key => { ... }
           allowed
          (item, key) => { ... }
          */

                    this.state.list.map((item) => (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}> {item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>
                                <button onClick={()=>
                                        this.onDismiss(item.objectID)}
                             type="button" >Dismiss</button>
                            </span>
                        </div>
                    ))
                }
            </div>
        );
    }
}
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());

export default App;
