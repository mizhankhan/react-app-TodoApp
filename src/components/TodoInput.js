import React, { useState } from 'react'
import App from '../App'

export const TodoInput = (props) => {
    const [inputText,setinputText]=useState('');
    const handleEnterPress =(e)=>{
        if (e.keyCode===13){
            props.addList(inputText)
            setinputText("")
        }
    }
    return (
        <div> 
              <h1 className="title">TODO APP</h1>
            <div className="addtask">
                <input
            
                value={inputText}
                placeholder='Enter Your Todo'
                    type="text"
                    className="input-box-todo"
                    onChange={e => {
                        setinputText(e.target.value)
                    }}
                    onKeyDown={handleEnterPress}
                />
                <button className="btn"
                onClick={()=>{
                props.addList(inputText)
                setinputText("")
                }}>Add Task</button>
                </div>
                </div>
            )
}
