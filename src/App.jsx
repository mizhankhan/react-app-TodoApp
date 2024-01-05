import React from "react";
import "./App.css";
import { Delete, Edit } from "@mui/icons-material";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">TODO APP</h1>
        <div className="addtask">
          <button className="btn">Add Task</button>
          <select className="dropBtn">
            <option>All</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        {/* main background */}
        <div className="main-bg">


          {/* first todo */}
          <div className="todo">
            <input type="checkbox" />
            <div className="todo-input">
              <p>Create a new project</p>
              <p>5:23 AM, 12/03/24</p>
            </div>

            <div className="items">
              <Delete />
              <Edit />
            </div>
          </div>

          {/* 2nd todo */}

          <div className="todo">
            <input type="checkbox" />
            <div className="todo-input">
              <p>Learn React</p>
              <p>5:22 AM, 12/03/24</p>
            </div>

            <div className="items">
              <Delete />
              <Edit />
            </div>
          </div>

          {/* 3rd todo */}

          <div className="todo">
            <input type="checkbox" />
            <div className="todo-input">
              <p><strike>Create a Todo App</strike></p>
              <p>5:21 AM, 12/03/24</p>
            </div>

            <div className="items">
              <Delete />
              <Edit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
