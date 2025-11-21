import React, { useState } from "react";
import "./To_Do_List.css";

function ToDoList() {
    
    const [tasks, setTasks] = useState(["I Want ROTTII","Trying to Learn ReactJs", "Badly Wants to Sleep", "Dont Know What to Do"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    };
    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }

    };
    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    };
    function handleMoveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to_do_list">
            <h1>To-Do List</h1>
            <div className="input_section">
                <input 
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Enter a new task"
                /> &nbsp;
                <button className="add_task_button" onClick={handleAddTask}>Add Task</button>
            </div>

            <ol className="task_list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} &nbsp;
                        <button className="move_up_button" onClick={() => handleMoveTaskUp(index)}>👆</button>
                        <button className="move_down_button" onClick={() => handleMoveTaskDown(index)}>👇</button>
                        <button className="delete_task_button" onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        
        </div>
    );     
};  
export default ToDoList;
