import React, { Component } from "react";
import "./App.css";
import "./developer.js";
import { Developer } from "./developer.js";
import Search from "./Search";
import Table from "./Table";
import Button from "./Button"
debugger;


        
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

const isSearched=searchTerm => 
    item=> 
    
         item.title.toLowerCase().includes(searchTerm.toLowerCase())
    
class App extends Component {
  debugger
    constructor(props) {
      
        super(props);

        this.state = {
            list,
            searchTerm:''
        };

        
        debugger
        isSearched("Redux")
        this.onSearchChange=this.onSearchChange.bind(this)
        this.onDismiss=this.onDismiss.bind(this);
        
    }

        


    onSearchChange=(event)=>
    {
        debugger
        const searchTerm =event.target.value;
        this.setState({searchTerm})
        // const title= item=>item.title.includes(event.target.value);
        // const list=this.state.list.filter(title)
        // this.setState({list});
    }
    onDismiss(id)
    {
      debugger
         
            const isNotID= item=>item.objectID!=id;
            const list=this.state.list.filter(isNotID);
            debugger;
            this.setState({list});
    }

    //filterFunction=()=> this.state.searchTerm;
    

    render() {
        //ES6
        const{list,
            searchTerm}=this.state;
      
        return (
          
            <div className="App">
                <Search
                value={searchTerm}
                onChange={this.onSearchChange}
                
                />
                <Table 
                list={list}
                pattern={searchTerm}
                onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

 const fullName=new Developer('Hamid','Khatami');
console.log(fullName.getName());

export default App;
