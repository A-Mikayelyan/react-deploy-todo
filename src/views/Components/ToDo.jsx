import React from 'react';

function ToDo({ tasks, deleteTask, moveTaskUp, moveTaskDown }) {
    return (
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
    );
}

export default ToDo;