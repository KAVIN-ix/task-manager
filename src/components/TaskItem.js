import React from "react";

function TaskItem({ task, deleteTask, toggleStatus }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>

        <span
          className={
            task.status === "Completed"
              ? "completed"
              : "pending"
          }
        >
          {task.status}
        </span>
      </div>

      <div className="btn-group">
        <button onClick={() => toggleStatus(task.id)}>
          {task.status === "Pending"
            ? "Mark Completed"
            : "Mark Pending"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;