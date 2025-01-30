import React, { useState, useEffect } from "react";
import '../index.css';
import TopBar from './Components/TopBar'
import ToDo from "./Components/ToDo";
function ToDoList() {
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

        <TopBar newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        <ToDo 
        tasks={tasks} 
        deleteTask={deleteTask} 
        moveTaskUp={moveTaskUp} 
        moveTaskDown={moveTaskDown} 
    />

                    
            

        

           
        </div>
    );
}

export default ToDoList;
