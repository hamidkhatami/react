 import React ,{Component} from "react";

// //function Search(props)
// function Search({children,value,onChange})
//    {
//   //      const {value,onChange,children}=props;
//         return(
//             <form>
//                 {children} <input
//                  type="text"
//                  value={value}
//                  onChange={onChange}/>
//             </form>
//         )
//     }

 const Search= ({children,value,onChange})=>
               <form>
                {children} <input
                 type="text"
                 value={value}
                 onChange={onChange}/>
            </form>
      

export default Search;

