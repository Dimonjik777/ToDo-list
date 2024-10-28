import React, { useState } from 'react'

const Inputs = ({ onAddTask }) => {

  // Task in form
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  // Add new task in state parent and clean form
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(task);
    setTask("");
  }

  return (
    <>
      <div className="todo__inputs">
        <input
          className="task__input"
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="task__add">Save</button>
      </div>
    </>
  )
}

export default Inputs