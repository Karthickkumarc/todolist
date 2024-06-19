import { useState } from 'react'
import "./TaskForm.css"
import Tag from "../Tags/Tag"

function Taskform({ setTasks }) {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  })
  const checkTag = (tag) => {

    return taskData.tags.some(item => item === tag)
  }
  const handleChange = (e) => {
    settaskData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const HandleClick = (e) => {
    e.preventDefault();
    // console.log(taskData);
    setTasks(prev =>{
      return[...prev,taskData]
    })
    settaskData({
      task: "",
      status: "todo",
      tags: []})

  }
  const SelectTag = (tag) => {
    // console.log(tag);
    if(taskData.tags.some(item => item===tag))
      {
       const filterTags  =taskData.tags.filter(item => item!==tag)
       settaskData(prev =>{
        return {...prev, tags:filterTags}
       })
      }
      else{
        settaskData(prev =>{
          return{...prev ,tags:[...prev.tags, tag]}
        })
      }
  }
  //  console.log(taskData.tags)
  return (

    <header className='header'>
      <form onSubmit={HandleClick}>
        <input
         type="text"
          className='task_input' 
          name="task"
          placeholder='Enter your task' 
          onChange={handleChange} 
          value={taskData.task}
          />
        <div className='task-form-bottom-line'>
          <div>
            <Tag tagName="HTML"
              SelectTag={SelectTag}
            selected={checkTag("HTML")}
            />
            <Tag tagName="CSS"
              SelectTag={SelectTag}
            selected={checkTag("CSS")}
            />
           
            <Tag tagName="JAVASCRIPT"
              SelectTag={SelectTag}
             selected={checkTag("JAVASCRIPT")}
            />
            <Tag tagName="REACT"
              SelectTag={SelectTag}
             selected={checkTag("REACT")}
            />

          </div>
          <div>
            <select 
            className="task-status" 
            name="status" 
            onChange={handleChange}
            value={taskData.status} 
            >
              <option value="todo">to do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className='task-submit' >+Add Task</button>
          </div>
        </div>

      </form>
    </header>

  )
}

export default Taskform

