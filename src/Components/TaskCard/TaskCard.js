import React from 'react'
import "./TaskCard.css";
import Tag from "../Tags/Tag"
import deleteIcon from "../assets/Delete-button.png"

 const TaskCard=({title,tags,handleDelete,index})=> {
  
  return (
    <div>
      <article className='task-card'>
        <p className='task-text'>{title}</p>
        <div className="task-card-bottom-line">
            <div className="task-card-tags">
             { tags.map((tag,index)=>(
                <Tag key={index} tagName={tag}  selected={true}/>
             ))}
             {/* <Tag tagName="HTML" />
             <Tag tagName="HTML" /> */}
            </div>
            <div className="task-delete">
             <img src={deleteIcon} 
             onClick={()=>handleDelete(index)}

              className='delete-icon'
               alt="" />
            </div>
        </div>
      </article>
    </div>
  )
}

export default TaskCard


