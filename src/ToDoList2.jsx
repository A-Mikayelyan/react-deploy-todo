import React, { useState, useEffect } from "react";
import "./index.css";

function ToDoList2() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    
    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTasks(data.todos || []); 
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);


    const addTask = () => {
        if (newTask.trim() !== "") {
            const newTaskObject = {
                todo: newTask,
                completed: false,
                id: tasks.length + 1, 
            };

            setTasks((prevTasks) => [...prevTasks, newTaskObject]);
            setNewTask("");
        }
    };

    
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    
    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={task.id || index}>
                        <span className="text">{task.todo}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList2;
