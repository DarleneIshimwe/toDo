import React, { useState } from "react";

function Todolist() {
    const [tasks, setTasks] = useState([]);

    const [newTasks, setNewTasks] = useState('');

    console.log(newTasks)

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }
    function AddTask() {
        setNewTasks(newTasks)
        setTasks(t=>[...t, newTasks]);
        setNewTasks("")
    }

    function DeleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }
    return (
        <div className="To.do.list">
            <h1>Todo list</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new task...."
                    value={newTasks}
                    onChange={() => handleInputChange} />
                <button className="Add-button" onClick={AddTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                  <li key={index}>
                    <button className="delete.button" onClick={()=>DeleteTask(index)}>
                       Delete
                    </button>
                  </li>)}
            </ol>
        </div>

    )
}

export default Todolist