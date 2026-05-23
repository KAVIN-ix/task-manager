import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleStatus }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleStatus={toggleStatus}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;