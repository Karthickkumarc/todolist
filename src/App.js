
import './App.css';
import {useState,useEffect} from 'react'
import Taskform from './Components/Taskform/Taskform';
import TaskColumn from './Components/TaskColumn/TaskColumn';
import todoIcon from "./Components/assets/direct-hit.webp"
import DoingIcon from "./Components/assets/glowingstar.png"
import DoneIcon from "./Components/assets/DoneIcon.png";
 const oldTasks=localStorage.getItem("tasks")
 console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)|| []);
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])
  const handleDelete=(taskIndex)=>{
   const filterTasks= tasks.filter((task,index)=>(index !==taskIndex))
   setTasks(filterTasks);
  }

  return (
    <div className="app">
     <Taskform setTasks={setTasks} />
     <main className='app-main'>

     <TaskColumn 
      title="To do" 
      icon={todoIcon} 
       tasks={tasks}
       status="todo"
       handleDelete={handleDelete}
       />

     <TaskColumn 
      title="doing" 
      icon={DoingIcon} 
      tasks={tasks}
      status="doing"
      handleDelete={handleDelete}
      />
      
     <TaskColumn 
      title="Done" 
       icon={DoneIcon} 
       tasks={tasks}
       status="done"
       handleDelete={handleDelete}
       />
     </main>
    </div>
  );
}

export default App;
