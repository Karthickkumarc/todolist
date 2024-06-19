import React from 'react'

import "./TaskColumn.css"

import TaskCard from '../TaskCard/TaskCard';

function TaskColumn({ title, icon, tasks, status ,handleDelete}) {
  // console.log(tasks.status);
  // console.log(status)
  return (
    <section className='task_column'>
      <h2 className='task-column-heading'>
        <img className="task-column-icon"
          src={icon} alt="" />{title}
      </h2>
      {
        
        tasks.map((task, index) => {
          return(
          task.status === status &&
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
               />)
        })
      }

    </section>
  )
}

export default TaskColumn


