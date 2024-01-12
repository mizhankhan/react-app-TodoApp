import React, { useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { Delete } from "@mui/icons-material";
import TodoList from "./components/TodoList";
import swal from 'sweetalert';




function App() {
  const [listTodo,setlistTodo]=useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
    setlistTodo ([...listTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
  }
  function allDelete () {
    swal({
      title: "Are you sure?",
      text: "SOCH LO",
      icon: "warning",
      buttons: true,
      
      
    })
    .then((willDelete) => {
      if (willDelete) {
        setlistTodo([])
        swal("Tasks deleted!", {
          icon: "success",
        
        });
        
  
      }
      
    });
  }
  return (
    <>
      <div className="main-container">
        <div className="center-container">     
         <TodoInput addList={addList} />
         {listTodo.map((ListItem,i)=>{
          return(
        <TodoList index={i} key={i} item={ListItem} deleteItem={deleteListItem} />
          )
          
         })}
          <button className="DeleteAll" onClick={allDelete}>Delete All</button>
         
         </div>   
         
        </div>
      

    
    </>
  );
}

export default App;
