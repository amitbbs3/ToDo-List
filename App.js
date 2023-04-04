import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDolist from './ToDolist';
function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems]= useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listofItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputList];
    })
    setInputList(""); //taki add hone ke bad input blank ho jaye
  };

  const deleteItem = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index!==id;
      });
    });
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
        <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type="text" placeholder='Add an Item' value={inputList} onChange={itemEvent}/>
        <button onClick={listofItems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval, index)=>{
           return <ToDolist 
           key = {index}
           id = {index}
           text={itemval}
           onSelect={deleteItem} />
          })}
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
