
import React from "react";

function TopBar({ newTask, setNewTask, addTask }) {
    return (
        <>
            <title>Time Assist Application</title>
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
        </>
    );
}

export default TopBar;
