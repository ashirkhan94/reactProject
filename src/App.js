import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';




function App() {
const as=useSelector((aa)=>aa.MainReducer.name)
const bs=useSelector((aa)=>aa.SubReducer.age)
console.log(as,bs)
  return (
    
    <div >
      <div className="HeaderContainer">
       <h1>my first react js App</h1>
       </div>
       
      <h4>ffggggfhfhfh</h4>
    </div>
    
  );
}

export default App;
