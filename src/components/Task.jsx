import React from 'react'

const Task = ({ title, isComplete, changeCheckTask, onDeleteTask }) => {

  let taskClass = "task";

  taskClass = isComplete ? "task task__complete" : "task";

  return (
    <div className={taskClass}>
      <p className="task__title">{title}</p>
      <button onClick={changeCheckTask} className="task__check"></button>
      <button onClick={onDeleteTask} className="task__delete">X</button>
    </div>
  )
}

export default Task