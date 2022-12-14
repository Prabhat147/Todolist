import React, { useState } from 'react';
import './App.css';
function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className='main'>
        <div className='center'>
          <header>
            <h1>Todo list</h1><hr/>
          </header>
          <div>
            <input type="text" id='newTask' placeholder='Enter your task here' onChange={itemEvent}></input>&nbsp;
            <button onClick={()=>{
                listOfItems()
                document.getElementById('newTask').value=''
            }}>+</button>
            <ul>
              {Items.map((itemval) => {
                return <li> {itemval} </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
