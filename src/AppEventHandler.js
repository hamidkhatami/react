import React, { Component } from "react";
import "./App.css";
import "./developer.js";
debugger
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
debugger
const fName = "Hamid";
const user = {
    fName,
};
//---------------------------------------------------------


const userService = {
    getUserName(user) {
        return user.firstname + " " + user.lastname;
    },
};

//---------------------------------------------------------

const key = "name";
const usertest = {
    [key]: "test",
};

class App extends Component {
  debugger
    constructor(props) {
      debugger
        super(props);
        this.state = {
            list,
        };
        debugger
        this.onDismiss=this.onDismiss.bind(this);
        
    }
    debugger
    onDismiss(id)
    {
      debugger
         
            const isNotID= item=>item.objectID!=id;
            const list=this.state.list.filter(isNotID);
            debugger;
            this.setState({list});
    }

    render() {
      debugger
        return (
          
            <div className="App">
                {
                    this.state.list.map((item) => {

                      const onHandleDismiss=()=>
                      {
                        this.onDismiss(item.objectID);
                        alert("a");
                      }
                    
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}> {item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>
                                  <button onClick={()=> this.onDismiss(item.objectID)}
                             type="button" >Dismiss</button> 
                            {/*  <button onClick={onHandleDismiss}
                             type="button" >Dismiss</button> */ }
                               {/* <button onClick={
                                   
                                   ()=>
                                   {
                                    debugger
                                   console.log(item.objectID)
                                   }
                               } 
                             type="button" >Dismiss</button> 
                             */}
                            </span>
                        </div>
                    )})
                }
            </div>
        );
    }
}
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());

export default App;
