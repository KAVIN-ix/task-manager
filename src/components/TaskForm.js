import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "Pending",
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;