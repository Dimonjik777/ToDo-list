import React from 'react'

const ShowTasks = ({activeShowTasks, handleClickShow}) => {

  return (
    <div className="show__tasks">
      <button
      className={activeShowTasks == "All tasks" ? "active" : ""}
      onClick={handleClickShow}
      value="All tasks">All tasks</button>
      <button
      className={activeShowTasks == "Uncomplete" ? "active" : ""}
      onClick={handleClickShow}
      value="Uncomplete">Uncomplete</button>
      <button
      className={activeShowTasks == "Complete" ? "active" : ""}
      onClick={handleClickShow}
      value="Complete">Complete</button>
    </div>
  )
}

export default ShowTasks