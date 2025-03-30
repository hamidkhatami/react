import React,{ Component } from 'react';
import './App.css';
import './developer.js';

const list=[
  {
    title:'React',
    url:'www.leankanban.ir',
    num_comments:3,
    points:4,
    objectID:0
  },
  {
    title:'Redux',
    url:'google.com',
    author:'Hamid khatami, soheil jahangiri',
    num_comments:2,
    points:5,
    objectID:1
  }
];

class App extends Component
 {
   render()
   {
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
          {list.map(function(item, key) {
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


list.map(item =>
  <div key={item.objectID}>
    <span >
      <a href={item.url}> {item.title}</a>
    </span>
    <span>
      {item.author}
    </span>
  </div>
        )}
    </div>
  ) 
  
}

 }
//  const fullName=new Developer('Hamid','Khatami');
// console.log(fullName.getName());


export default App;

