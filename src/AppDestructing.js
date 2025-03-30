import React, { Component } from "react";
import "./App.css";
import "./developer.js";
debugger

const usersAr=['Robin','Andrew','Dan'];
const [
    userOne,
    userTwo,
    userThree
]=usersAr;

console.log(userOne,userTwo,userThree);



// Es5
const user={
    firstname:'Robin',
    lastname: 'Wieruch'
}    
var firstname=user.firstname;
var lastname=user.lastname;

console.log( firstname+ ' '+lastname);

// output: Robin Wieruch

// ES6
const useres6={
    firstnamees6:'Robines6',
    lastnamees6: 'Wieruches6'
}  
const { firstnamees6,lastnamees6 }=useres6;
console.log('ES6:' +firstnamees6+ ' '+lastnamees6);

// output: Robin Wieruch


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
const users = {
    fName,
};
//---------------------------------------------------------


const userService = {
    getUserName(users) {
        return users.firstname + " " + users.lastname;
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
      debugger
        return (
          
            <div className="App">
                   <form>
                        <input type="Text" onChange={this.onSearchChange} />
                    </form>
                
                        {
                             
                           this.state.list.filter(isSearched(this.state.searchTerm)).map((item) => {
                            // this.state.list.map((item) => {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}> {item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>
                                  <button onClick={()=> this.onDismiss(item.objectID)}
                             type="button" >Dismiss</button> 
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
