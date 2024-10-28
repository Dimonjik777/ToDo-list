import React, { useState, useEffect } from 'react'
import Task from './Task';
import Inputs from './Inputs';
import ShowTasks from './ShowTasks';

const Todo = () => {

  // List with tasks
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);
  
  // Display all tasks or category
  const [showTasks, setShowTasks] = useState("All tasks");

  function handleChangeShowTasks(event){
    setShowTasks(event.target.value);
  }

  // Parent function for create task
  function addTask(task) {
    setTodo([...todo, { id:Date.now() ,title: task, isComplete: false }]);
  }

  function checkTask(id) {
    const newTodo = todo.map(task =>
      task.id == id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTodo(newTodo);
    setShowTasks(showTasks)
  }

  function deleteTask(id) {
    let newTodo = todo.filter((task, index) => task.id != id);
    setTodo(newTodo);
  }

  // Adding task in localStorage

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const filteredTasks = showTasks == "All tasks" ? todo
  : showTasks == "Complete" ? todo.filter(task => task.isComplete)
  : todo.filter(task => !task.isComplete);
  
  const noHaveTasks = todo.length == 0 ? "Write a new task"
  : showTasks == "Complete" ? "No task completed"
  : "All tasks are completed";

  console.log(todo);
  return (
    <div className="app">
      <Inputs onAddTask={addTask} />
      <div className="todo">
        <div className="todo__tasks">
          <div className="todo__container">

            {/* Render tasks */}
            {filteredTasks.length != 0 ? (filteredTasks.map(task => (
              
              <Task
                key={task.id}
                title={task.title}
                isComplete={task.isComplete}
                changeCheckTask={() => checkTask(task.id)}
                onDeleteTask={() => deleteTask(task.id)} />
            )))
              : (<div className='tasks__empty'>{noHaveTasks}</div>)
            }

          </div>

        </div>
            <ShowTasks activeShowTasks={showTasks} handleClickShow={handleChangeShowTasks} />
      </div>
    </div>
  )
}

export default Todo