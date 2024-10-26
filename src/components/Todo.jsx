import React, { useState, useEffect } from 'react'
import Task from './Task';
import Inputs from './Inputs';

const Todo = () => {

  // List with tasks
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);

  // Parent function for create task
  function addTask(task) {
    setTodo([...todo, { title: task, isComplete: false }]);
  }

  function checkTask(id) {
    const newTodo = todo.map((task, index) =>
      id == index ? { ...task, isComplete: !task.isComplete } : task
    );
    setTodo(newTodo);
  }

  function deleteTask(id) {
    let newTodo = todo.filter((_, index) => id != index);
    setTodo(newTodo);
  }

  // Adding task in localStorage

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    console.log(todo);
  }, [todo]);

  return (
    <div className="todo">
      <Inputs onAddTask={addTask} />
      <div className="todo__tasks">
        <div className="todo__container">

          {/* Render tasks */}
          {todo.length != 0 ? (todo.map((task, index) => (
            <Task
              key={index}
              title={task.title}
              isComplete={task.isComplete}
              changeCheckTask={() => checkTask(index)}
              onDeleteTask={() => deleteTask(index)} />
          )))
            : (<div className='tasks__empty'>Write a new task</div>)
          }

        </div>

      </div>
    </div>
  )
}

export default Todo